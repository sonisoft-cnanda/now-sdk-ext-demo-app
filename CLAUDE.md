# CLAUDE.md — mcp-flow-app

## Project Overview

A ServiceNow application built with the **Fluent Domain Language (FDL)** and the **ServiceNow SDK**. The current feature is an **Incident Response Manager** — a React 19 SPA embedded as a ServiceNow UI Page that performs CRUD operations on the `incident` table via the REST API.

- **App name**: My Awesome App
- **Scope**: `x_502054_maa`
- **Scope ID**: `4a5a6115402946939ee48e3fe80f60f8`
- **UI Page endpoint**: `x_502054_maa_incident_manager.do`

---

## Commands

```bash
npm run build      # Compile via now-sdk build (includes pre-build step)
npm run deploy     # Deploy to ServiceNow instance via now-sdk install
npm run transform  # now-sdk transform
npm run types      # Regenerate ServiceNow type definitions (now-sdk dependencies)
```

The pre-build step (`now.prebuild.mjs`) runs Rollup to bundle the React client before the SDK build kicks in.

---

## Architecture

```
src/
├── client/          # React 19 front-end (TypeScript + JSX)
│   ├── components/  # IncidentForm, IncidentList
│   └── services/    # IncidentService — REST calls to /api/now/table/incident
├── fluent/          # Fluent Domain Language definitions (*.now.ts files)
│   ├── ui-pages/    # UI Page registrations (incident-manager.now.ts)
│   └── generated/   # Auto-generated keys.ts — DO NOT edit manually
└── server/          # Server-side TypeScript (placeholder, not yet implemented)
```

**Build output** goes to `dist/` (gitignored). ServiceNow XML update sets land in `dist/app/update/`.

---

## Fluent Domain Language (FDL)

- FDL files use the `.now.ts` extension and import from `@servicenow/sdk/*`.
- Register ServiceNow artifacts (UI Pages, etc.) by calling their constructor functions (e.g. `UiPage({...})`).
- `Now.ID[...]` references are generated keys — run `npm run types` to regenerate if keys are missing.
- The `src/fluent/generated/keys.ts` file is auto-generated; never edit it directly.
- FDL tsconfigs: `src/fluent/tsconfig.json` (composite), `.client.json`, `.server.json`.

---

## Reference & Examples

- **Agent Reference Guide**: `docs/agent-reference.md` — comprehensive guide covering FDL patterns, all artifact types, SDK examples index, MCP workflows, and known gotchas. **Read this before creating any new artifact.**
- **SDK Examples**: https://github.com/ServiceNow/sdk-examples — canonical reference for FDL artifacts and ServiceNow SDK usage patterns. Consult this when creating new artifacts (UI Pages, Script Includes, Flows, etc.).

---

## ServiceNow SDK

- SDK version: `@servicenow/sdk@4.3.0`
- Config file: `now.config.json` (scope, scopeId, name, tsconfigPath)
- The SDK CLI commands are `now-sdk build`, `now-sdk install`, `now-sdk transform`, `now-sdk dependencies`.
- Glide type definitions: `@servicenow/glide@27.0.4`
- Import alias `#now:*` → `./@types/servicenow/fluent/*/index.js`

---

## Client-Side Conventions

- React 19, TypeScript, bundled by `@servicenow/isomorphic-rollup`.
- Authentication uses `window.g_ck` (ServiceNow's CSRF token) — do not replace with other auth mechanisms.
- REST calls target `/api/now/table/` endpoints relative to the ServiceNow instance.
- CSS modules declared in `src/client/global.d.ts`.
- Client tsconfig: `src/client/tsconfig.json` (target ES2022, moduleResolution: bundler, JSX: preserve).

---

## Key Files

| File | Purpose |
|------|---------|
| `now.config.json` | App scope, ID, and tsconfig path |
| `now.prebuild.mjs` | Rollup pre-build for client assets |
| `src/fluent/ui-pages/incident-manager.now.ts` | UI Page FDL registration |
| `src/fluent/generated/keys.ts` | Auto-generated resource keys |
| `src/client/services/IncidentService.ts` | REST API client for incident CRUD |
| `src/client/app.tsx` | React root component |

---

## MCP Server — ServiceNow Integration

The project has a `.mcp.json` at the repo root that registers a `servicenow` MCP server. It is available in every Claude Code session automatically.

**Instance**: `https://dev224436.service-now.com`
**Auth alias**: `dev224436` (configured in `.mcp.json` via `SN_AUTH_ALIAS`)
**MCP server source**: `/home/cnanda/git/now-sdk-ext-mcp/dist/index.js`

### Typical dev loop

```
1. Edit src/ code
2. npm run build       # compile + bundle
3. npm run deploy      # push update set to instance
4. (MCP) verify deployment, run scripts, inspect tables
```

### Key MCP tools by category

**Instance health & scope**
- `mcp__servicenow__check_instance_health` — verify the instance is reachable before doing anything
- `mcp__servicenow__get_current_scope` / `mcp__servicenow__set_current_scope` — scope is `x_502054_maa`
- `mcp__servicenow__get_current_update_set` / `mcp__servicenow__set_current_update_set`

**Table / record operations**
- `mcp__servicenow__query_table` — query any table (e.g. `incident`, `sys_ui_page`)
- `mcp__servicenow__count_records` — count rows matching a query
- `mcp__servicenow__discover_table_schema` — inspect a table's fields
- `mcp__servicenow__lookup_table` / `mcp__servicenow__lookup_columns` — explore schema

**Script execution (server-side)**
- `mcp__servicenow__execute_script` — run arbitrary Glide JS server-side; use to test logic, inspect records, or debug

**Update sets (after deploy)**
- `mcp__servicenow__list_update_sets` — see all update sets
- `mcp__servicenow__inspect_update_set` — see what records are in an update set
- `mcp__servicenow__get_current_update_set` — confirm which update set is active

**App management**
- `mcp__servicenow__get_app_details` — details for our installed app
- `mcp__servicenow__list_scoped_apps` — list all scoped apps on the instance
- `mcp__servicenow__get_current_scope` — confirm active scope

**Code search**
- `mcp__servicenow__code_search` — full-text search across server-side scripts on the instance

**Flows / subflows / actions**
- `mcp__servicenow__execute_flow` / `mcp__servicenow__execute_subflow` / `mcp__servicenow__execute_action`
- `mcp__servicenow__get_flow_context_status` / `mcp__servicenow__get_flow_error` / `mcp__servicenow__get_flow_outputs`

**ATF testing**
- `mcp__servicenow__find_atf_tests` / `mcp__servicenow__run_atf_test` / `mcp__servicenow__run_atf_test_suite`

### Verifying a deployment via MCP

After `npm run deploy`, confirm the UI Page landed on the instance:
```
mcp__servicenow__query_table
  table: sys_ui_page
  query: name=x_502054_maa_incident_manager^sys_scope.scope=x_502054_maa
```

Run a quick server-side smoke test:
```
mcp__servicenow__execute_script
  script: gs.info(gs.getUserName());  // should return a valid user
```

---

## Gotchas

- `src/fluent/generated/` is untracked in git — it is regenerated by the SDK.
- `.now/` and `dist/` are gitignored build artifacts; never commit them.
- The server-side layer (`src/server/`) is a placeholder — no server logic has been implemented yet.
- ESLint uses `@servicenow/eslint-plugin-sdk-app-plugin` — follow its rules for FDL files.
- The recommended VS Code extension is `servicenow.fluent-language-extension`.
- Always call `mcp__servicenow__check_instance_health` at the start of any MCP-heavy session to confirm connectivity.
- MCP tools operate directly on the live instance — destructive operations (delete, update) take effect immediately.
