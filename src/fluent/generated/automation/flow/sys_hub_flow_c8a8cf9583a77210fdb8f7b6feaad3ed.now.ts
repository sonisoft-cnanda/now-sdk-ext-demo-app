import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c8a8cf9583a77210fdb8f7b6feaad3ed'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: false,
        attributes: 'timeFromCreateToActivate=51000',
        authored_on_release_version: 28100,
        callable_by_client_api: false,
        compiler_build: 'latest',
        copied_from: '7467365a731310108ef62d2b04f6a72a',
        copied_from_name: 'Change - Emergency - Authorize',
        description:
            'Process a Change Request that uses the Emergency Change Model, which is in the state of Authorize and is not on hold.',
        internal_name: 'change__emergency__authorize',
        label_cache:
            '[{"name":"c3b4fad0-6e37-4cf7-abe4-1ffb9b31233e.table_name","label":"5➛Change Request Table","reference":"change_request","reference_display":"Change Request","type":"table_name","base_type":"table_name","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"c3b4fad0-6e37-4cf7-abe4-1ffb9b31233e.record","label":"5➛Change Request Record","reference":"change_request","reference_display":"Change Request","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created or Updated_1.current.assignment_group.manager.name","label":"Trigger➛Change Request Record➛Assignment group➛Manager➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"name"},{"name":"Created or Updated_1.current.reason","label":"Trigger➛Change Request Record➛Reason","reference":"","reference_display":"Reason","type":"choice","base_type":"choice","parent_table_name":"change_request","column_name":"reason"},{"name":"Created or Updated_1.current","label":"Trigger➛Change Request Record","reference":"change_request","reference_display":"Change Request","type":"reference","base_type":"reference","attributes":{}},{"name":"58f8e86b-fdb0-47fc-991d-868b96bfc9f5.decisions","label":"2➛3➛Decisions","reference_display":"Decisions","type":"string_full_utf8","base_type":"string_full_utf8","attributes":{"uiType":"string_full_utf8","visible_in_fd":"false","uiTypeLabel":"String (Full UTF-8)","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"ceae4573-7f3f-46d0-a26e-13923ca0252b"}},{"name":"58f8e86b-fdb0-47fc-991d-868b96bfc9f5.state","label":"2➛3➛State","reference_display":"State","type":"choice","base_type":"choice","attributes":{"uiType":"choice","uiTypeLabel":"Choice","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"ffef9f46-2397-4435-939c-3bb37b7a39a7"}},{"name":"7e6868b1-8d75-4475-a261-2ad514c6b204.email","label":"8➛email","reference":"sys_email","reference_display":"Email","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created or Updated_1.current.requested_by","label":"Trigger➛Change Request Record➛Requested by","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"change_request","column_name":"requested_by"},{"name":"Created or Updated_1.current.number","label":"Trigger➛Change Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"change_request","column_name":"number"},{"name":"Created or Updated_1.current.short_description","label":"Trigger➛Change Request Record➛Short description","reference":"","reference_display":"Short description","type":"string","base_type":"string","parent_table_name":"change_request","column_name":"short_description"},{"name":"76a54e8b-5189-4775-898d-554fdb92e02d.state","label":"10➛11➛State","reference_display":"State","type":"choice","base_type":"choice","attributes":{"uiType":"choice","uiTypeLabel":"Choice","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"2e334039-7a20-4ead-9148-909988f1a7e4"}}]',
        name: 'Change - Emergency - Authorize',
        pre_compiled: false,
        run_as: 'user',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'draft',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
    },
})
Record({
    $id: Now.ID['2ca803d583a77210fdb8f7b6feaad379'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        name: 'Created or Updated',
        trigger_definition: 'a45d9180c32222002841b63b12d3aea7',
        trigger_inputs:
            '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',
        trigger_type: 'record_create_or_update',
    },
})
Record({
    $id: Now.ID['20a803d583a77210fdb8f7b6feaad359'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '8',
        parent_ui_id: '35c9a795-1332-484b-a34c-d855baacc518',
        ui_id: '7e6868b1-8d75-4475-a261-2ad514c6b204',
        values: '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',
    },
})
Record({
    $id: Now.ID['58a803d583a77210fdb8f7b6feaad354'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '83a1f363735310108ef62d2b04f6a74c',
        action_type_parent: 'd301bb23735310108ef62d2b04f6a7dd',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '83a1f363735310108ef62d2b04f6a74c',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '6',
        parent_ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        ui_id: '71f710ac-b99a-4ef9-9515-0ee5fd3fbe00',
        values: 'H4sIAAAAAAAA/4VTXWvjMBD8K0HPjoljx73LW0kJFO6u0Fz7UopZS+tEIMuuPtL6Qv77rWw3FzhD3+zZ0e7MrPRyYsCdbPS9tg40x11n7wVbs2VSYplCeZOu0mSRLL5hlS/FslxkVQ43+YpFTAYeP4DeY2HwzaN1hGqocQo/gvKhcDptDIJDMWvM7KkV4bNIYu6NQe3OZ6IKaVsF3fN4gpAWDLV1aNj6RK2lEkRm65fXTxUlJFWap9Nqs4paKChREXXTC5s9finYdW3ADVZIwziO0I+xz+MV3hgRpCURww+HWiBpqkBZjFgNmiw2pmNrZzwBZF48aNVdGAep3eCyhg8r/9DQdBldzZ3QdikWY1ZTxqo7cLCjqdx5MwbJD43kaIfoBFbgldtcYwPhoQ13YjjioFSTInijfK1/DfGxS7urtXlLArENiQSPo+Fqd2jeL/Ftpe7DG4uq4aCuqAiGH7YSVViz9nVJ3IiBc0aW3gXVJ+bl7/93NYBT20KFNekpamhbqfdFa5qj7DWQpTreK/qJK9W8k3Yr9zoeXkhMe4R4S/hdDz+DkSGan9SmF+Xlk5YUTv9+hFiVJaQwp2uZz7PVKptDthTzLK1SnnP4LhYpO0fMdnajwNp/MZKJ4s2HEIZQx/iKYR/hCDeydbck6ohjUufXv81yuGbJAwAA',
    },
})
Record({
    $id: Now.ID['5ca803d583a77210fdb8f7b6feaad350'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'cd04ac7573011010791f94596bf6a716',
        action_type_parent: '74b5372973011010791f94596bf6a70b',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: 'cd04ac7573011010791f94596bf6a716',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '2➛3',
        parent_ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        ui_id: '58f8e86b-fdb0-47fc-991d-868b96bfc9f5',
        values: 'H4sIAAAAAAAA/+WXWW/bOBDHv4qhZ8tL6lbesskGyKK7LeK2L3UhDA/FBGRJ1ZHWa/i7d6jD8hW73Wa9Bfpm/jUkhzPz49AfVgbwSmXpfVpWkHI5XZb3wrgygtDzbc8F36Y2JZQEMvYsYTHixB74PjHGhtJ27ewoASYT1FJYyEP1CZJayzfXv4+u87zIUEBZqDJPYPn++NccClyskoVxtTL4XCWikKlx9eFjtzNjMRBmO8y3qPbQD2kccD+QklIIJeAS7f5XxnXjzujVSSerZa7VsipU+tiNX3ULTHsxK4R2iI4N+aWSqZDoSQxJKcfGAlIBVVYsN0ohQbxOk0GYq7TC1Qxt/KVU/+B+lFiOtowlno7L9utmGHUhauX4FipAV2pe1UVnyueZ4rJs4yJkDHVS3WxrrcHrXJ+1nVIBS/rZWVIv0r/beBibBfqMoFKX6ITM9VG1791B4uk8+/zQe3mn0iYq3cck45jAfgQVxo7VlfZnZdTq7V6YW+Ug0DKRC9wxWkCeoxLpslDNLuj0YvKY4GASJ9ln9K5Uj+mkzeYEUwCTO9RvG/k9FEof9y9cBifr7d6l6lMt2yK3nJhwxzNdnwnT8V3XDLHATTd2fcqlKyEkxnpslMvyJoGyHAKFGYo+1fqYbdi6AEVtjPUUXqi80oX3JLtYrMc/ClueJYovhwrejHvAbO44ngM+8wm1bEJsR1ABlt0yEdqH0P2xkMUjJnE5uplD+ihHb/o1z/HnUOIA913fJhv+QscNPaadpsEWf2+e87tjbij/XewetvSOPOs0eQjHN4JnW7vY8TkWWeNXBMMldIzELlD9VTVE7IX5PO7RBZCNpxIKPr9TMtGJbpL2LMjbudtleTt7GD19qkgUWY6fdJouBTljlhNYNDADwn3Tce3AZFZMTfBcR3qCcQrnIYcG5FmNSInO+UtBz5tyiwqJByqrAaIDvb8EVqsbBKCSYpQVo3e50D8jOuF1gdmo1uvDS+Bbuq1/qtvG7hbtHR8PZx3+fvrt/47+Pd9OgD8c7MWB33Pif2C9XrAGoR+i/TLNGwQLPTs0PeJK5NrjJrNxGIqYiYAELjbCn695RyrN66rc74WDvKF4ZrTaTJfNEWgPDc4xLE52bIsedOzR/Rlnv+fN7LzYmzkghPxyb+aDsF62paryzzJLu803ux0+5+EpU0KL0zrPs6K6UwkW5M6kWPQpivpya869D7gtLdfF6jRD8BBwFmALt5hleoFtx3FIbEnozwS4qDEZ2GwHXLaULazbXZDamZFmqZwZ45mhrSJNTyOjBXq/+dBoq9V63Sp1Ad0CdGs4zBawLBvLks+lqJNW3VHawHf6v3sQcBLa1A3xQWAfeRAA37pMbms5un0uMP0V0nvWRkIt9l8D086gWem3t61Bd7W4L3a1OL/exfJc8PeunWPhr9Xwz+Syj3oOPg8RPpMHVmw6IpYmC6Vn+iS0uANuAO5LNv+PXwEKzDOJKBMAAA==',
    },
})
Record({
    $id: Now.ID['98a803d583a77210fdb8f7b6feaad352'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        attributes: 'timeFromCreateToActivate=51000',
        comment: 'Mark approved',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '5',
        parent_ui_id: '8b4a3bc0-74ed-4b02-9a15-adb518cb6bf6',
        ui_id: 'c3b4fad0-6e37-4cf7-abe4-1ffb9b31233e',
        values: 'H4sIAAAAAAAA/+VVS0/bQBD+K9Geo8iPECC3KhESEgUJWi4UWePdcbLSem1210Aa5b931t4Yt7wOpQfUnDLv7xvPp73ZMuBOVvpUWwea49XGngo2ZweYptMiTw/TJI2jODrCYpaIJI+mxQwOZ8jGTPo8g7wygiwNJQ7te1CNd2y3C4PgUIwqM/peC/83iye8MQa12+0oVUhbK9hchwry1GConUPD5lvG11IJSmbzm9swdYoiio/jGU/jNE2iKDmaxvkszeNEpIAYUwsFOSpKvXwNoNvU3hYVb0pCksm98yxULkNkdLqkCBV5OHE0ZvjoUAskIAUoi2NWgiZeldmwuTMNOYixuNBq02espXYdtRIerfxJk6eRzyuQmPFAuzezsJLOXSzBwRV15q4xIZWvK8nRdjsRWECj3GLo6xIuav9xuxIHudpXV6op9Xm3EdY3GHyBxhIIrD1Pj7yjVVytq4fLPcgTqduVBIqq4qB6C5wzMm+ch7NlqLDdcQl1LfUqq011L9tiglJOVoqMSaGqB5pp5UpPuqOc0FZhckL+Zeu+BiM9ia/Uhop3Y2Y3dqHA2icqtMPsrvFIOmKBQtZuoV1B1l6CL+ZG1u4LjbrHAHw3/ltBDEb0N/ebby8Mvga9wszgXYPWPZfBoo2PLvv4e6LID94SBT8eiOJbewov4wu6eOY7G9aOzrtAUMXBh6ni6DOpItD49LL4Z2Job90+HVpv70VAiIkzqB9NFKWis1A8F8Oree+JIkrefClwIIoTiUq8BHavCCwJksOsA/+HKkJwdB2C/XvxYdKIZ1H7+0QC+W+ejdtfmKAFJEkJAAA=',
    },
})
Record({
    $id: Now.ID['aca803d583a77210fdb8f7b6feaad35c'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '280065eb734310108ef62d2b04f6a751',
        action_type_parent: '81afddab734310108ef62d2b04f6a7be',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '280065eb734310108ef62d2b04f6a751',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '12',
        parent_ui_id: '07cf34d5-3173-45e8-b685-f5145a5a3dfc',
        ui_id: '9f4868f6-8b59-403f-b2a1-97ae245de483',
        values: 'H4sIAAAAAAAA/4WT3W6bQBCFXyXaa4wAG3B8VzmyFKltpLjJTRShYXewV1oWsj9OqOV376xBrqVa6h2cnZ35zhl4OzLgTnb6UVsHmuN2sI+CrdhSFOW8yKGcp/M0SZMlNkUmsjpZNAWUS2ARk6GO70HvsDL44dE6UjW0eEs/gPLh4HhcGwSH4q4zdy+9CI9VGnNvDGp3OlGpkLZXMLxON0jpwVBbh4atjtRaKkHFbPX2PlEUPEmKHOtyvrhBm2fUQkGNikrXZ7C75/8Cu6EPusEGaRjHSfo+9Xm+0jsjAloaMfxyqAUSUwPKYsRa0GSxMwNbOeNJIPPiSavhUrGX2o0uW/iy8jcNnWfR1dwbbJfDasrqlrHmARxsaSp33kxB8n0nOdoxOoENeOXW19pY8NSHb2K84qBWNyF4p3yrf47xsUu7q7V5S4DYh0SCx8lws913n5f4NlKfw5sOVcdBXZUiGL7fSFRhzdq3NdVGDJwzsvYuUB+Zl7/+3dUo3toWKmyJp2qh76XeVb3pDvLMQJbaeKfoJW5U90nsVu50PP4hMe0R4g3pD2f5FYwM0fygNmcoL1+0pHDO/0/RpGVWpstZmmf5bJEkixnMs3JWNiKpGxD5PdyzU8TsYNcKrP0bI5moPnwIYQx1iq8a9xGucCN7942gDjgldXr/AyM3ghrJAwAA',
    },
})
Record({
    $id: Now.ID['e0a803d583a77210fdb8f7b6feaad35e'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '83a1f363735310108ef62d2b04f6a74c',
        action_type_parent: 'd301bb23735310108ef62d2b04f6a7dd',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '83a1f363735310108ef62d2b04f6a74c',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '13',
        parent_ui_id: '07cf34d5-3173-45e8-b685-f5145a5a3dfc',
        ui_id: '838d9ec3-ba29-40f9-970b-55a2c68b2f77',
        values: 'H4sIAAAAAAAA/4VTXWvbQBD8K+aeZWFbkt36rTgYAm0DcZOXEMTqbmUfnE7KfThRjf979yTFFVTQN2l2bndm9u7lwoA7Wet7bR1ojofW3gu2ZZuswCKBYpNkyXKxXHzBcr0Sq2KRlmvYbDIWMRl4/AT6iLnBN4/WEaqhwin8DMqHwuWyMwgOxaw2s6dGhM98GXNvDGp3vRJVSNsoaJ+HE4Q0YKitQ8O2F2otlSAy2768fqooYFkm62RabVpSCwUFKqLuOmGzx/8Kdm0TcIMl0jCOA/R96PM4wmsjgrRlxPDDoRZImkpQFiNWgSaLtWnZ1hlPAJkXD1q1N8ZJate7rODDyt80NFlFo7kT2m7FfMhqylh5Bw4ONJU7b4Yg+amWHG0fncASvHK7MdYTHppwJ/ojDgo1KYLXylf6Zx8fu7Ubrc1bEohNSCR4HAyXh1P9fotvL3UX3lBUNQc1oiIYftpLVGHN2lcFcSMGzhlZeBdUX5iXv/7dVQ9ObQsVVqQnr6BppD7mjanPstNAlqr4qOgnLlX9TtqtPOq4fyEx7RHiPeF3HfwMRoZoflCbTpSXT1pSON37ESIrCkhgTtdyPU+zLJ1DuhLzNCkTvubwVSwSdo2Ybe1OgbV/YyQT+ZsPIfShDvHl/T7CEW5k476RqDMOSV1f/wD68z4EyQMAAA==',
    },
})
Record({
    $id: Now.ID['eca803d583a77210fdb8f7b6feaad35a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '89ce8a4187120010663ca1bb36cb0be3',
        action_type_parent: '8bb9a8160b10030085c083eb37673aec',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '89ce8a4187120010663ca1bb36cb0be3',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '10➛11',
        parent_ui_id: '07cf34d5-3173-45e8-b685-f5145a5a3dfc',
        ui_id: '76a54e8b-5189-4775-898d-554fdb92e02d',
        values: 'H4sIAAAAAAAA/+2XW2+bSBTHv0rEc8bLwABD3irb0UbKNpKddh+6XXSYSzwSBpdLWm+U794BxjYEx2kbN0qkffOcmTn8z+XnA5/uLGClytKLtCghZWK+Li64dWbZnh+4vgeBi11sY5sK6TvciW0ifQioY51aqj6XC5blXK9SWIru+haSqjbc3Y1zAaXgJ1l+8mHF658RHrEqz0Va3t/ro1wVqwTWH80NbVlBrt2VIrfO7iy2UAnXh62zT5/NU0nIBAWCaYAdW6vzfZcBjmPXZ7EdC6JdJBCLRB+dPSawXK/qNc9YtdRKIrUxXpqbE7NzcjHRO/pSLQefWuJbKVIutA4JSSFOrSWkOqwsX1tnZV5pgw6YX6XJentiodKyjWwJ3wr1n36w69TnpNCBMRP1dhmZjLRmOYES5tozK6vcHGWLTDFRtCnhQkKVlOOurT1wtapr214pIU42t7OkWqbv24RYWwedAlSFFiFWdZy18jYsOV9kX2cbkecqbTJiQkwyBsl2BWWZq7gqazl3VqWu9yW7Ne9Pt1SJLn/UiI6KrMqbJM2m46vZJPr73fX4z+ksmk3n17OL8fW0viES0bhewmql0ptolWe3qlGo412ObhK9GMkk+6oDK9RNOmobf6RLB6NzbZ805o+Qq/qhf2k3+nKt8kOqvlSiwYJIqXnwfYSx7SKCYx+FVHjIFh4QzyG+5zvW/alVrItxAkWxy7EubvSlqlPUZtzkNmrK04bZdGh9meVqVb7T8m6Fyej96XNB7Txiy0LPtgGWLSC9EVEudMxFOcRz3OyfzLb7T8LqHYQVOrBeNz26X5/hdWC77N49ed9uGFqdw7Qayw7Xts/30ErtN0SrCev5uPZy3ae1l21VRG3PGtGN15dC0sE0pCR2kRsTD5FQSkRtShARYDPP4QHB7BeQ/G0gsizlqnZQ7Bq9Z9uAmKXRIkv4P5Vtu7zuzH+vZtBoaU2NHm3TMkpjQt6Q119188wZLDtYj58K2bA9sF3uc2DYdo81iYltvyW6jzWLe8nuw91L94tALDj1Y8+mSEhKEXEDikLsOMj3gWNMGJf2a52raimyqoxkAjedydW3bpC2h3hu/iufws3mh3CT3Vfeadr8ORsNj4oy0MVZlghIH05T3WV/nBtthjjyk9P0EHJvCLijjdNdph/M0m6uXwQ3xoDq4QgodJlAxI8ZopJJ5IrYk64X0ziwX9PM3HQur3Joijro6c7O7a6SP/9lyQ5jFnYwm/yIGANZU7aH9suhI0Oa9z9pzyJtkO4Hn5q7jd+F20Lfm8C6qLtC4z0EUGAIvLj+egREnBAjCImDQl8EgkjquxC+RgALthC86n2jDXeeBSDFBwHsvlbOf0SMAXDHQJ+9Wcdu4POPBh8dvFmyZdoVtw/FTlRvEkk5F5CzxbkSSV1P8/X4CKjdsvQZ7RbmZWai42CXC4Yw1++hxPEdRF0SoCCkGgfderErjojk5+/XJtuOexUAAA==',
    },
})
Record({
    $id: Now.ID['84a8cf9583a77210fdb8f7b6feaad3ee'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        name: 'Change - Emergency - Authorize',
    },
})
Record({
    $id: Now.ID['00a803d583a77210fdb8f7b6feaad302'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'child_label=FDChangeDetails,child_name=FDChangeDetails,child_type=object,child_type_label=Object,co_type_name=FDCollection,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,pwd2droppable=true,uiType=array.object,uiTypeLabel=Array.Object',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'changed_fields',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Changed Fields',
        mandatory: 'false',
        max_length: '4000',
        model: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_id: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['08a8cf9583a77210fdb8f7b6feaad3fd'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,timeFromCreateToActivate=51000,uiType=document_id',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        dependent: 'table_name',
        dependent_on_field: 'table_name',
        display: 'false',
        dynamic_creation: 'false',
        element: 'current',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'document_id',
        label: 'Record',
        mandatory: 'true',
        max_length: '200',
        model: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_id: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['80a8cf9583a77210fdb8f7b6feaad3f8'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,test_input_hidden=true,uiType=table_name',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'table_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'table_name',
        label: 'Table Name',
        mandatory: 'false',
        max_length: '200',
        model: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_id: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '101',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['58a803d583a77210fdb8f7b6feaad348'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'd0a803d583a77210fdb8f7b6feaad348',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'a1168de173311300b61e66476bf6a7d0',
        order: '2',
        parent_ui_id: '57da30ea-c72e-4e7c-8a23-14e3ce1aef61',
        ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['58a803d583a77210fdb8f7b6feaad34c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'd0a803d583a77210fdb8f7b6feaad34c',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '9',
        parent_ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        ui_id: '69233bb8-a83c-4d4c-9d3e-b00972b2ba50',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['5ca803d583a77210fdb8f7b6feaad34e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'd4a803d583a77210fdb8f7b6feaad34e',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '14',
        parent_ui_id: '07cf34d5-3173-45e8-b685-f5145a5a3dfc',
        ui_id: '4fd590a4-c493-46d2-83bf-067b163368ee',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8ca803d583a77210fdb8f7b6feaad339'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'c8a803d583a77210fdb8f7b6feaad338',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: '5d31e5dedfe50300b61ecae83df26326',
        order: '1',
        ui_id: '57da30ea-c72e-4e7c-8a23-14e3ce1aef61',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d4a803d583a77210fdb8f7b6feaad34b'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '50a803d583a77210fdb8f7b6feaad34b',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        parent_ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        ui_id: '35c9a795-1332-484b-a34c-d855baacc518',
        values: 'H4sIAAAAAAAA/+1VW2/aMBj9K5OfATkJCYG3iqpSpW6V2qovWxV98QW8GTuLnbYM8d/3OReoNKpuah/3BD7+LuccfMSO2MZXjXd39sw5tTJk8fVhRJQJGH7fEant05VdKXZpnAfDxO3WXXKyICzKZkmWwiyJkohGNBcyi3lc0qnMYJYmBMe0ddZw5ZU1hYGNQLT9OIE/gm7CxY34LpgXHCGuXKVhe//nTQU1dnlRk8WOsLXSvBYD+bBVUpDRnEUsibMkpjTOp1GZJWUU8wQEBHYaSqGxdDkQ+XTVIq8z9Nsq4M7Xyqz681U/5XYAbc0Dq4iOiHj2wnDku5CgnRiRDRgO3tbbA1IL4NdGH4G1Mh7HkVD87NQvXBinaSiUAiUy0V0ejkXvUQfLc/CAVBrmm7ovZWurmHCdOVxIaLRfvsS6gusqSO1aPJR66La62ZgvnSPkMGD4SRBpHJIQVVAaqPc65O3aPt0MLC+UaV3pL7VloA8n8Ohd2fjAZ0eEFhscVGygqtDRoqrto2qbkctmstJ4mIRXiUvDi50AC8QnaCxMLhA/b+F7qFVQ8RnHYHNHswSnWNG+bhyHNgmyHxG3dUsNzh1ForvFzyZQ7CT34orOn9DCalX5M9z8KHod+9FHhuXEK3wRkd0uzWUu8qwcS17S8XQm2Xg+j/g4z/JynpWSzWU6QQ5e7PffGkoTzMdrsXrntLeiOIdUphFNT0dxmp2K4mn5/5K/+I38hR//L+NHKf2fv3fnT7miS02vrV3+gfF7CPHodh68ZsohtbuAXQ5/aeFii48rhPQIPdn6RxB1xPa/AXyQIsAcBwAA',
    },
})
Record({
    $id: Now.ID['d8a803d583a77210fdb8f7b6feaad349'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '54a803d583a77210fdb8f7b6feaad349',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '7a1a6816-f0e3-41f2-a868-3db09e9f52b1',
        ui_id: '8b4a3bc0-74ed-4b02-9a15-adb518cb6bf6',
        values: 'H4sIAAAAAAAA/+1VW2/aMBj9K5OfATkJSQNvFVWlSt0qjaovWxV98QWsGjuLnbYM8d/3OReoVKpuah/3BD7+LuccfMSO2MZXjXe39tw5tTJk/uN+RJQJGH7fEant07VdKXZlnAfDxHLrrjiZkzROkqksk7MkTiIa0VzILOZxSacyg7MsJzgm1DFruPLKmsLARiDafpzAH0E34WL5oKpKcES4cpWG7d2riwpq7PGiJvMdYWuleS0G6mGnpCCjGYtYEmdJTGmcT6MyS8oo5gkISHCEhlJoLF0MNL5ct8jb/Py2CrjztTKr/nzdT1kOoK15YBXRERHPXhiOfOcStBMjsgHDwdt6e0BqAfzG6COwVsbjOBKKn536jQvjNA2FUqBEJrrLw7HoLepgeQEekErDfFP3pWxtFROuM4cLCY32i5dYV3BTBaldi4dSD91WNxvzrXOEHAYMvwgijUMSogpKA/Veh1yu7dP3geWlMq0r/aW2DPThBB69Kxsf+OyI0GKDg4oNVBU6WlS1fVRtM3LZTFYaD5PwJnFpeK8TYIH4BI2FySXiFy18B7UKKr7iGGzuaJbgFCvat43j0CZB9iPitm6hwbmjSHS3+NUEip3kXlzR+RNaWK0qf46bH0WvYz/6zKiceIUvArLbpbnMRZ6VY8lLOp6eSTaezSI+zrO8nGWlZDOZTpCDF/v9z4bShLu3QvWxYe8FcQapTCOang7iNDsVxNPi/yV98TvpCz/9X4aPUvo/fR9On3JFl5leW7v8E8N3H8LR7Tx4zZRDarcBuxr+zsLFFh9XiOgRerL1QxB1xPZ/ACMK2tEYBwAA',
    },
})
Record({
    $id: Now.ID['d8a803d583a77210fdb8f7b6feaad34d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '54a803d583a77210fdb8f7b6feaad34d',
        flow: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        logic_definition: 'a1168de173311300b61e66476bf6a7d0',
        order: '10',
        parent_ui_id: '57da30ea-c72e-4e7c-8a23-14e3ce1aef61',
        ui_id: '07cf34d5-3173-45e8-b685-f5145a5a3dfc',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['20a803d583a77210fdb8f7b6feaad394'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '0',
        prescription: '{{Created or Updated_1.current.number}}',
        transform_compositions: '[]',
        ui_id: '0a639c61-0798-4bc6-b23f-521f30e9fa81',
    },
})
Record({
    $id: Now.ID['28a803d583a77210fdb8f7b6feaad395'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '0',
        prescription: '{{Created or Updated_1.current.number}}',
        transform_compositions: '[]',
        ui_id: '30e8aa5e-6922-4519-97fc-905d90748005',
    },
})
Record({
    $id: Now.ID['64a803d583a77210fdb8f7b6feaad395'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '0',
        prescription: '{{Created or Updated_1.current.short_description}}',
        transform_compositions: '[]',
        ui_id: '8694f787-6f9a-4fcb-8892-950cf6b69ab8',
    },
})
Record({
    $id: Now.ID['a0a803d583a77210fdb8f7b6feaad395'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '0',
        prescription: '{{Created or Updated_1.current.reason}}',
        transform_compositions: '[]',
        ui_id: '7b8fdf59-496c-4336-bf6a-30a6b8a8d850',
    },
})
Record({
    $id: Now.ID['eca803d583a77210fdb8f7b6feaad394'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c8a8cf9583a77210fdb8f7b6feaad3ed',
        order: '0',
        prescription: '{{Created or Updated_1.current.assignment_group.manager.name}}',
        transform_compositions: '[]',
        ui_id: '974e7401-c300-4111-ba7b-1e473dcb55e9',
    },
})
