import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['34a843d583a77210fdb8f7b6feaad304'],
        name: 'Change - Emergency - Review',
        description: 'Process a Change Request that uses the Emergency Change Model, which is in the state of Review.',
        runAs: 'user',
    },
    wfa.trigger(
        trigger.record.createdOrUpdated,
        {
            $id: Now.ID['7ca843d583a77210fdb8f7b6feaad342'],
        },
        {
            table: 'change_request',
            condition: 'chg_model=62d10fa1c303101035ae3f52c1d3aec1^state=0',
            run_on_extended: 'true',
            run_flow_in: 'foreground',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'always',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['bca843d583a77210fdb8f7b6feaad331'],
                uuid: '9468df31-363c-4ed0-81a9-e24c95e65ee9',
            },
            {
                table: 'cmdb_ci_outage',
                conditions: `task_number=${wfa.dataPill(_params.trigger.current.sys_id, 'reference')}^type!=planned`,
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                __snc_dont_fail_on_error: true,
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Unplanned Outage',
                condition: `${wfa.dataPill(actionInstance_1.status, 'choice')}=0`,
                annotation: '',
                $id: Now.ID['34a843d583a77210fdb8f7b6feaad32f'],
            },
            () => {
                wfa.action(
                    action.core.createTask,
                    {
                        $id: Now.ID['b0a843d583a77210fdb8f7b6feaad340'],
                        annotation: 'Create Post Implementation Review Task',
                        uuid: '89855a59-fdb5-4338-9b2a-c2206932a21a',
                    },
                    {
                        task_table: 'change_task',
                        field_values: TemplateValue({
                            change_request: wfa.dataPill(_params.trigger.current, 'reference'),
                            created_from: 'flow',
                            change_task_type: 'review',
                            cmdb_ci: wfa.dataPill(_params.trigger.current.cmdb_ci, 'reference'),
                            short_description: 'New Post implementation review',
                            description: 'fd-scripted',
                        }),
                        wait: true,
                    }
                )
            }
        )
    }
)
