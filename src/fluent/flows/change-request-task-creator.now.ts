import '@servicenow/sdk/global'
import { Flow, action, wfa, trigger } from '@servicenow/sdk/automation'

export const changeRequestTaskCreatorFlow = Flow(
    {
        $id: Now.ID['change_request_task_creator_flow'],
        name: 'Change Request Task Creator Flow',
        description: 'Creates a new change task when a change request is created',
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['change_request_created_trigger'] },
        {
            table: 'change_request',
            condition: '',
            run_flow_in: 'background',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (params) => {
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_change_task'] },
            {
                table_name: 'change_task',
                values: TemplateValue({
                    short_description: 'New Task',
                    description: 'New Task',
                    change_request: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                }),
            }
        )
    }
)
