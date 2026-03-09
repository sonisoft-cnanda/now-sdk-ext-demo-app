import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '9fa6137679a241e491fffc755ca0e6bd'
                    }
                    change_request_created_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '376b20484c594546a16c1e3d85f768be'
                    }
                    change_request_task_creator_flow: {
                        table: 'sys_hub_flow'
                        id: '36a564dbd0ea4d1f8b4fb6d40bd3f6a3'
                    }
                    create_change_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e6ccadaa84e549b7aa0b5a27e4535ce7'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '52d6ef4d4e8e43a98dc7f1c33784bb82'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b50f52dfa2e1414d8e122bd9622268e2'
                    }
                    'x_502054_maa/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'f25e4a4c69014ee9b000f17a196bcc3c'
                    }
                    'x_502054_maa/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'd03b9fd367694c7a99a9143c28a8d98e'
                    }
                }
            }
        }
    }
}
