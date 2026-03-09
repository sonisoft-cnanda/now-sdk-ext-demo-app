# ServiceNow SDK — Agent Reference Guide

This document provides all the context an AI agent needs to build ServiceNow artifacts using the **ServiceNow SDK** and **Fluent Domain Language (FDL)**. It covers project structure, artifact patterns, the build/deploy cycle, post-deploy verification via MCP, and known gotchas. It is designed to be generic and reusable across projects.

---

## Table of Contents

1. [How This Stack Works](#how-this-stack-works)
2. [Project Structure](#project-structure)
3. [The Build & Deploy Cycle](#the-build--deploy-cycle)
4. [FDL Fundamentals](#fdl-fundamentals)
5. [SDK Examples Reference](#sdk-examples-reference)
6. [Artifact Patterns by Type](#artifact-patterns-by-type)
7. [MCP Server — Verifying & Testing on Instance](#mcp-server--verifying--testing-on-instance)
8. [Known Gotchas & Workarounds](#known-gotchas--workarounds)

---

## How This Stack Works

```
Source code (FDL + client/server TS)
        │
        ▼
  npm run build          ← now-sdk compiles FDL → ServiceNow XML update sets
        │                  also runs any prebuild steps (e.g. Rollup for client bundles)
        ▼
  npm run deploy         ← now-sdk install pushes update sets to the instance
        │
        ▼
  MCP tools              ← verify deployment, run scripts, inspect records, publish flows
```

- **FDL files** (`*.now.ts`) declare ServiceNow artifacts (Flows, UI Pages, Tables, etc.) using TypeScript constructor functions imported from `@servicenow/sdk/*`.
- The **SDK build** compiles FDL into ServiceNow XML and auto-generates `src/fluent/generated/keys.ts` with stable sys_ids for every declared artifact.
- The **MCP server** (`servicenow` in `.mcp.json`) provides tools to interact with the live instance after deployment.

---

## Project Structure

```
src/
├── client/              # Front-end code (React/Vue/Svelte/SolidJS + TypeScript)
│   ├── components/
│   ├── services/
│   └── app.tsx
├── fluent/              # All FDL artifact definitions
│   ├── *.now.ts         # Top-level artifacts (or group into subdirectories)
│   ├── flows/           # Flow/Subflow definitions (convention)
│   ├── ui-pages/        # UI Page definitions (convention)
│   ├── tables/          # Table definitions (convention)
│   └── generated/
│       └── keys.ts      # AUTO-GENERATED — never edit manually
└── server/              # Server-side TypeScript (Script Includes, etc.)

now.config.json          # App scope, scopeId, name, tsconfigPath
.mcp.json                # MCP server registration (ServiceNow instance connection)
now.prebuild.mjs         # Optional: Rollup/bundler step before SDK build
```

**Key config: `now.config.json`**
```json
{
  "scope": "x_<id>_<abbr>",
  "scopeId": "<32-char hex>",
  "name": "My App Name",
  "tsconfigPath": "./src/server/tsconfig.json"
}
```

---

## The Build & Deploy Cycle

```bash
npm run build      # Compile FDL + client assets → dist/
npm run deploy     # Push update set to instance (now-sdk install)
npm run transform  # now-sdk transform (when needed)
npm run types      # Regenerate script include type definitions from instance
                   # NOTE: this is slow (~2-3 min) — it fetches from the instance
                   # The build step auto-generates keys.ts; only run types when
                   # you need Script Include type definitions from the instance
```

**After any new `.now.ts` file is created:**
1. Run `npm run build` — the SDK will assign stable sys_ids and update `keys.ts`
2. Run `npm run deploy` — pushes to instance
3. Use MCP tools to verify and (for Flows) publish

---

## FDL Fundamentals

### Required imports in every `.now.ts` file
```typescript
import '@servicenow/sdk/global'   // Required: makes Now.ID, TemplateValue, Duration globals
```

### `Now.ID[...]` — artifact identity
Every artifact gets a stable sys_id via `Now.ID['my_artifact_key']`. Keys are arbitrary snake_case strings you choose. The SDK assigns real sys_ids on first build and stores them in `src/fluent/generated/keys.ts`.

```typescript
// Use any descriptive key — SDK will create the sys_id
$id: Now.ID['my_flow_name']
$id: Now.ID['my_trigger']
$id: Now.ID['my_action_step']
```

**Rule:** Every artifact AND every step within a Flow/Subflow needs its own unique `$id`.

### `TemplateValue({...})` — setting record field values
Used inside actions that write fields to a record:
```typescript
values: TemplateValue({
    short_description: 'My value',
    state: '2',
    assigned_to: wfa.dataPill(someRef.Record.sys_id, 'reference'),
})
```

### `wfa.dataPill(value, type)` — dynamic values from previous steps
```typescript
wfa.dataPill(params.trigger.current.sys_id, 'reference')  // Reference field
wfa.dataPill(params.trigger.current.short_description, 'string')
wfa.dataPill(someAction.Record.sys_id, 'reference')
wfa.dataPill(someAction.Records, 'records')               // Array of records
wfa.dataPill(someAction.Record.name, 'string')
```

---

## SDK Examples Reference

**Repo:** https://github.com/ServiceNow/sdk-examples

This is the primary reference for all FDL artifact patterns. Each subdirectory is a standalone app demonstrating one or more artifact types.

### Example projects and what they demonstrate

| Project | Artifact(s) Demonstrated | FDL Files |
|---------|--------------------------|-----------|
| [`flow-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/flow-sample) | Flow, Subflow (all trigger types) | 6 files — see below |
| [`react-ui-page-ts-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/react-ui-page-ts-sample) | UI Page (React 19 + TypeScript) | `ui-pages/incident-manager.now.ts` |
| [`vue-ui-page-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/vue-ui-page-sample) | UI Page (Vue 3) | `ui-pages/incident-manager.now.ts` |
| [`solidjs-ui-page-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/solidjs-ui-page-sample) | UI Page (SolidJS) | `ui-pages/incident-manager.now.ts` |
| [`svelte-ui-page-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/svelte-ui-page-sample) | UI Page (Svelte) | `ui-pages/svelte-hello-world.now.ts` |
| [`uipage-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/uipage-sample) | UI Page (plain HTML) | `ui-page.now.ts` |
| [`table-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/table-sample) | Tables (simple, extends, indexes, custom columns) | 4 files |
| [`businessrule-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/businessrule-sample) | Business Rules (before/after) | 2 files |
| [`script-include-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/script-include-sample) | Script Include | `MyScriptInclude.now.ts` |
| [`clientscript-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/clientscript-sample) | Client Script | `clientscript.now.ts` |
| [`uiaction-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/uiaction-sample) | UI Action | `ui-action.now.ts` |
| [`scriptaction-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/scriptaction-sample) | Script Action | `script-action.now.ts` |
| [`restapi-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/restapi-sample) | REST API (Scripted REST) | `rest-api-simple.now.ts`, `rest-api-module.now.ts` |
| [`service-catalog-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/service-catalog-sample) | Catalog Item, Record Producer, Variable Set | 4 files |
| [`service-portal-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/service-portal-sample) | Service Portal, Widgets, Pages | Multiple files |
| [`applicationmenu-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/applicationmenu-sample) | Application Menu + Categories | 2 files |
| [`acl-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/acl-sample) | ACL (Access Control) | `index.now.ts` |
| [`list-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/list-sample) | List (Reporting widget) | `list.now.ts` |
| [`record-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/record-sample) | Records (Incident, CMDB CI) | 2 files |
| [`hello-world-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/hello-world-sample) | Table + Record together | 2 files |
| [`sys_module-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/sys_module-sample) | Script Include (module/require patterns) | 2 files |
| [`dependencies-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/dependencies-sample) | Cross-artifact dependencies (Catalog, Script Include, UI Action) | 3 files |
| [`test-atf-sample`](https://github.com/ServiceNow/sdk-examples/tree/main/test-atf-sample) | ATF Tests (suites, batching, impersonation, REST) | 6 files |

---

### Flow-sample: detailed file map

All flow files are under [`flow-sample/src/fluent/`](https://github.com/ServiceNow/sdk-examples/tree/main/flow-sample/src/fluent):

| File | Exported artifact | Trigger type | Key patterns |
|------|-------------------|--------------|--------------|
| [`flow-trigger-record.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/flow-trigger-record.now.ts) | `incidentSeverityAlertFlow`, `changeRequestApprovalNotificationFlow`, `changeRiskTaggingFlow` | `trigger.record.created`, `.updated`, `.createdOrUpdated` | if/elseIf/else, forEach, log, sendNotification, updateRecord |
| [`flow-trigger-inbound-email.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/flow-trigger-inbound-email.now.ts) | `emailIncidentTaskFlow` | `trigger.application.inboundEmail` | createTask, createRecord, getAttachmentsOnRecord, copyAttachment, forEach |
| [`flow-trigger-knowledge-management.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/flow-trigger-knowledge-management.now.ts) | `knowledgeArticleQaFlow` | `trigger.application.knowledgeManagement` | endFlow, createRecord (task), updateRecord, sendNotification |
| [`flow-trigger-remote-table-query.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/flow-trigger-remote-table-query.now.ts) | `remoteUserQueryFlow` | `trigger.application.remoteTableQuery` | lookUpRecords (plural), forEach over Records |
| [`flow-trigger-sla-task.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/flow-trigger-sla-task.now.ts) | `slaTaskEscalationFlow` | `trigger.application.slaTask` | slaPercentageTimer, waitForCondition, Duration |
| [`subflow-sample.now.ts`](https://github.com/ServiceNow/sdk-examples/blob/main/flow-sample/src/fluent/subflow-sample.now.ts) | `newUserOnboardingSubflow` | N/A (Subflow) | inputs/outputs/flowVariables, assignSubflowOutputs, ReferenceColumn, BooleanColumn, StringColumn |

---

## Artifact Patterns by Type

### Flow (record trigger)
```typescript
import '@servicenow/sdk/global'
import { Flow, action, wfa, trigger } from '@servicenow/sdk/automation'

export const myFlow = Flow(
    {
        $id: Now.ID['my_flow'],
        name: 'My Flow Name',
        description: 'What this flow does',
    },
    wfa.trigger(
        trigger.record.created,          // or .updated, .createdOrUpdated
        { $id: Now.ID['my_trigger'] },
        {
            table: 'change_request',     // ServiceNow table name
            condition: '',               // encoded query filter, or '' for all
            run_flow_in: 'background',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (params) => {
        // params.trigger.current — the triggering record
        // params.trigger.previous — previous values (for .updated trigger)

        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['my_create_step'] },
            {
                table_name: 'task',
                values: TemplateValue({
                    short_description: 'Created by flow',
                    parent: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                }),
            }
        )
    }
)
```

### Subflow (reusable, with inputs/outputs)
```typescript
import '@servicenow/sdk/global'
import { Subflow, action, wfa } from '@servicenow/sdk/automation'
import { BooleanColumn, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const mySubflow = Subflow(
    {
        $id: Now.ID['my_subflow'],
        name: 'My Subflow',
        description: '...',
        inputs: {
            record_id: ReferenceColumn({ label: 'Record', referenceTable: 'task', mandatory: true }),
        },
        outputs: {
            success: BooleanColumn({ label: 'Success' }),
        },
        flowVariables: {
            temp_flag: BooleanColumn({ label: 'Temp Flag', default: false }),
        },
    },
    (params) => {
        // use params.inputs.record_id, params.outputs.success
        wfa.flowLogic.assignSubflowOutputs(
            { $id: Now.ID['assign_outputs'] },
            params.outputs,
            { success: true }
        )
    }
)
```

### Common flow actions
```typescript
// Look up one record
const rec = wfa.action(action.core.lookUpRecord, { $id: Now.ID['lookup_step'] }, {
    table: 'sys_user',
    conditions: `sys_id=${wfa.dataPill(params.trigger.current.caller_id, 'reference')}`,
    sort_type: 'sort_asc',
    if_multiple_records_are_found_action: 'use_first_record',
})
// Access result: rec.Record.sys_id, rec.Record.name, etc.

// Look up multiple records
const recs = wfa.action(action.core.lookUpRecords, { $id: Now.ID['lookup_many'] }, {
    table: 'incident',
    conditions: 'active=true^priority=1',
    max_results: 100,
    sort_column: 'sys_created_on',
    sort_type: 'sort_desc',
})
// Access result: recs.Records

// Create a record
const created = wfa.action(action.core.createRecord, { $id: Now.ID['create_step'] }, {
    table_name: 'change_task',
    values: TemplateValue({ short_description: 'My Task' }),
})
// Access result: created.record (sys_id of created record)

// Update a record
wfa.action(action.core.updateRecord, { $id: Now.ID['update_step'] }, {
    table_name: 'incident',
    record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
    values: TemplateValue({ state: '2', work_notes: 'Updated by flow' }),
})

// Log a message
wfa.action(action.core.log, { $id: Now.ID['log_step'] }, {
    log_level: 'info',   // 'info' | 'warn' | 'error' | 'debug'
    log_message: `Value: ${wfa.dataPill(params.trigger.current.number, 'string')}`,
})

// Send notification
wfa.action(action.core.sendNotification, { $id: Now.ID['notify_step'] }, {
    table_name: 'incident',
    record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
    notification: 'notification_record_name',
})

// Send email
wfa.action(action.core.sendEmail, { $id: Now.ID['email_step'] }, {
    table_name: 'incident',
    record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
    ah_to: wfa.dataPill(someUser.Record.email, 'string'),
    ah_subject: `Subject text`,
    ah_body: `Body text`,
    watermark_email: true,
})
```

### Flow logic (branching, loops)
```typescript
// If / else-if / else
wfa.flowLogic.if(
    { $id: Now.ID['check_cond'], condition: `${wfa.dataPill(rec.Record.state, 'string')}=1`, annotation: 'State is New' },
    () => { /* then branch */ }
)
wfa.flowLogic.elseIf(
    { $id: Now.ID['check_cond_2'], condition: `${wfa.dataPill(rec.Record.state, 'string')}=2`, annotation: 'State is In Progress' },
    () => { /* else-if branch */ }
)
wfa.flowLogic.else({ $id: Now.ID['else_branch'] }, () => { /* else branch */ })

// For each (iterate over an array data pill)
wfa.flowLogic.forEach(
    wfa.dataPill(recs.Records, 'records'),
    { $id: Now.ID['foreach_step'] },
    () => { /* loop body — current item available via the array data pill */ }
)

// End flow early
wfa.flowLogic.endFlow({ $id: Now.ID['end_early'], annotation: 'Stopping because ...' })
```

### UI Page
```typescript
import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import myPage from '../../client/index.html'    // bundled client asset

UiPage({
    $id: Now.ID['my_page'],
    endpoint: 'x_myapp_mypage.do',
    description: 'My UI Page description',
    category: 'general',
    html: myPage,
    direct: true,
})
```

### Table
```typescript
import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

Table({
    $id: Now.ID['my_table'],
    name: 'x_myapp_my_table',
    label: 'My Table',
    columns: {
        name: StringColumn({ label: 'Name', maxLength: 100, mandatory: true }),
        active: BooleanColumn({ label: 'Active', default: true }),
        count: IntegerColumn({ label: 'Count', default: 0 }),
        parent: ReferenceColumn({ label: 'Parent', referenceTable: 'task' }),
    },
})
```

### Business Rule
```typescript
import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import myScript from './my-rule.server.js'   // server-side JS file

BusinessRule({
    $id: Now.ID['my_business_rule'],
    name: 'My Business Rule',
    table: 'incident',
    when: 'before',                         // 'before' | 'after' | 'async' | 'display'
    insert: true, update: true,
    filter_condition: 'active=true',
    script: myScript,
})
```

### Script Include
```typescript
import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'
import myScript from './MyUtil.server.js'

ScriptInclude({
    $id: Now.ID['my_script_include'],
    name: 'MyUtil',
    api_name: 'MyUtil',
    script: myScript,
    client_callable: false,
    access: 'public',
})
```

---

## MCP Server — Verifying & Testing on Instance

The MCP server is registered in `.mcp.json` at the project root and is available automatically in Claude Code sessions. It provides direct access to the live ServiceNow instance.

### Start every MCP session with a health check
```
mcp__servicenow__check_instance_health
```

### Verify an artifact deployed correctly

**Flow:**
```
mcp__servicenow__query_table
  table: sys_hub_flow
  query: sys_id=<sys_id from keys.ts>
  fields: sys_id,name,active
```

**UI Page:**
```
mcp__servicenow__query_table
  table: sys_ui_page
  query: name=<endpoint_without_.do>^sys_scope.scope=<your_scope>
```

**Any artifact by scope:**
```
mcp__servicenow__query_table
  table: <table_name>
  query: sys_scope.scope=<your_scope>
```

### Publish a Flow after deployment

Flows deploy in an **unpublished (draft) state** — they cannot be executed until published. Use this script:

```
mcp__servicenow__execute_script
  script: |
    var result = sn_fd.FlowAPI.publish('<flow_sys_id>');
    gs.print('Published: ' + JSON.stringify(result));
```

Look for `"isPublished":true` in the output.

### Execute a Flow for testing

Record-triggered flows require a **GlideRecord object** — not a raw sys_id string — as the `current` input. Use a background script to execute:

```
mcp__servicenow__execute_script
  script: |
    var current = new GlideRecord('<table_name>');
    current.get('<record_sys_id>');
    var inputs = { current: current };
    var contextId = sn_fd.FlowAPI.startFlow(
        '<scope>.<flow_internal_name>',
        inputs,
        'background'
    );
    gs.print('Context ID: ' + contextId);
```

Then poll for completion:
```
mcp__servicenow__get_flow_context_status
  context_id: <context_id_from_above>
```

States: `QUEUED` → `IN_PROGRESS` → `COMPLETE` / `ERROR`

If `ERROR`:
```
mcp__servicenow__get_flow_error
  context_id: <context_id>
```

### Run a server-side smoke test
```
mcp__servicenow__execute_script
  script: gs.print(gs.getUserName() + ' on ' + gs.getProperty('instance_name'));
```

### Inspect an update set after deploy
```
mcp__servicenow__inspect_update_set
  (finds the current default update set)

mcp__servicenow__list_update_sets
  (see all update sets)
```

### Useful MCP tools by category

| Category | Tools |
|----------|-------|
| Instance health | `check_instance_health` |
| Scope management | `get_current_scope`, `set_current_scope` |
| Table/record queries | `query_table`, `count_records`, `discover_table_schema`, `lookup_table`, `lookup_columns` |
| Script execution | `execute_script` |
| Update sets | `list_update_sets`, `inspect_update_set`, `get_current_update_set` |
| Flow management | `execute_flow`, `execute_subflow`, `execute_action`, `get_flow_context_status`, `get_flow_error`, `get_flow_outputs` |
| App management | `get_app_details`, `list_scoped_apps` |
| Code search | `code_search` |
| ATF testing | `find_atf_tests`, `run_atf_test`, `run_atf_test_suite` |

---

## Known Gotchas & Workarounds

### 1. Flows deploy as unpublished/draft
**Symptom:** `execute_flow` returns `"has not been published within application scope"`
**Fix:** After every deploy, publish the flow:
```javascript
sn_fd.FlowAPI.publish('<flow_sys_id>');
```
The sys_id is in `src/fluent/generated/keys.ts` after the build.

**Tracking:** Issue open to add a `publish_flow` MCP tool — [sonisoft-cnanda/now-sdk-ext-mcp#24](https://github.com/sonisoft-cnanda/now-sdk-ext-mcp/issues/24)

### 2. execute_flow MCP tool requires GlideRecord, not sys_id string
**Symptom:** `execute_flow` with `inputs: { current: "<sys_id>" }` returns `"Invalid GlideRecord input format found"`
**Fix:** Use `execute_script` to call `sn_fd.FlowAPI.startFlow()` directly, wrapping the record in a `GlideRecord` object (see example above).

**Tracking:** Issue open to fix input wrapping in MCP — [sonisoft-cnanda/now-sdk-ext-mcp#25](https://github.com/sonisoft-cnanda/now-sdk-ext-mcp/issues/25)

### 3. `npm run types` is slow (~2-3 min) and unrelated to keys.ts
`npm run build` regenerates `keys.ts` automatically. `npm run types` fetches Script Include type definitions from the instance — only needed when writing server-side code that calls existing Script Includes. Don't block a build on it.

### 4. `src/fluent/generated/keys.ts` must exist before TypeScript will compile
If this file is missing (e.g. fresh clone), run `npm run build` once. It is gitignored intentionally — never commit it.

### 5. Every FDL step needs a unique `$id`
Every `wfa.action(...)`, `wfa.trigger(...)`, `wfa.flowLogic.if(...)`, etc. must have a `{ $id: Now.ID['unique_key'] }` as its second argument. Duplicate keys across the same flow will cause a build error.

### 6. `@servicenow/sdk/global` must be imported in every `.now.ts` file
This import makes `Now.ID`, `TemplateValue`, and `Duration` available as globals. Without it, TypeScript will not recognize these symbols.

### 7. `TemplateValue` and `Duration` are globals, not imports
Do **not** import these from anywhere. They are injected by `@servicenow/sdk/global`.
```typescript
// Correct:
values: TemplateValue({ field: 'value' })
timeout_duration: Duration({ days: 7 })

// Wrong:
import { TemplateValue } from '@servicenow/sdk/core'  // ← does not exist
```

### 8. Flow condition field accepts encoded ServiceNow query strings
The `condition` field in a trigger uses ServiceNow's encoded query format:
```typescript
condition: 'active=true^priority=1'
condition: 'state=1^ORstate=2'
condition: ''   // no filter — triggers on every record
```

### 9. `change_task` records must set `change_request` to link to the parent
When creating change tasks in a flow, always set the `change_request` reference field. Without it the task is created orphaned and won't appear under the change.

---

## Quick Reference: FDL Imports

```typescript
// Core artifacts
import { UiPage, Table, BusinessRule, ScriptInclude, ClientScript } from '@servicenow/sdk/core'
import { StringColumn, BooleanColumn, IntegerColumn, ReferenceColumn, DateTimeColumn } from '@servicenow/sdk/core'

// Automation artifacts (Flows, Subflows, Actions)
import { Flow, Subflow, action, wfa, trigger } from '@servicenow/sdk/automation'

// Always required in .now.ts files
import '@servicenow/sdk/global'
```

---

*This document should be placed in a project's `docs/` directory and referenced from `CLAUDE.md` to provide agents with the context needed to build ServiceNow artifacts without needing to discover patterns from scratch.*
