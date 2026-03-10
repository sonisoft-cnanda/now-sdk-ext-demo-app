import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d5a843d583a77210fdb8f7b6feaad3dc'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: false,
        attributes: 'timeFromCreateToActivate=51000',
        authored_on_release_version: 28100,
        callable_by_client_api: false,
        copied_from: 'e2c87e9a731310108ef62d2b04f6a762',
        copied_from_name: 'Change - Emergency - Implement',
        description:
            'Process a Change Request that uses the Emergency Change Model, which is in the state of Implement.',
        internal_name: 'change__emergency__implement',
        label_cache:
            '[{"name":"Created or Updated_1.current","label":"Trigger➛Change Request Record","reference":"change_request","reference_display":"Change Request","type":"reference","base_type":"reference","attributes":{}},{"name":"f68d02e8-0c99-4b69-8fc4-9dffd0cb363d.state","label":"2➛3➛State","reference_display":"State","type":"choice","base_type":"choice","attributes":{"uiType":"choice","uiTypeLabel":"Choice","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"2e334039-7a20-4ead-9148-909988f1a7e4"}},{"name":"0909b196-5cb0-4580-9ba6-56a3bfa10baf.context","label":"7➛8➛Context","reference":"sys_flow_context","reference_display":"Flow engine context","type":"reference","base_type":"reference","attributes":{}}]',
        name: 'Change - Emergency - Implement',
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
    $id: Now.ID['25a883d583a77210fdb8f7b6feaad33e'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        name: 'Created or Updated',
        trigger_definition: 'a45d9180c32222002841b63b12d3aea7',
        trigger_inputs:
            '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',
        trigger_type: 'record_create_or_update',
    },
})
Record({
    $id: Now.ID['25a883d583a77210fdb8f7b6feaad33a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '83a1f363735310108ef62d2b04f6a74c',
        action_type_parent: 'd301bb23735310108ef62d2b04f6a7dd',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '83a1f363735310108ef62d2b04f6a74c',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        order: '5',
        parent_ui_id: '9f0b5793-7641-4b32-8e63-0130e7e15aef',
        ui_id: 'c912c2d9-720c-491d-ba9d-b82b15fef4b8',
        values: 'H4sIAAAAAAAA/4VTXWvjMBD8K0HPjklix73LW0kJFO6u0Fz7UopZS6tEIMuuPtL6Qv77rWI3FzhD3+zZ0e7MrPRyZMC9asy9cR4Mx23n7gVbMVEgygqqm2yZzWfz2TeUxUIsqlkuC7jJZixhKvL4HswOS4tvAZ0n1ECNY/gBdIiF43FtETyKSWMnT62In+U85cFaNP50IqpQrtXQPQ8nCGnBUluPlq2O1FppQWS2enn9VFHBXGZFNq42l9RCQ4WaqOuzsMnjl4J910bcokQaxnGAfgx9Hq/wxooobZ4w/PBoBJImCdphwmowZLGxHVt5Gwgg8+LB6O7C2Cvje5c1fDj1h4Zmi+Rq7oi2S7EcshozJu/Aw5amch/sECTfN4qj66MTKCFov77GesJDG+9Ef8RDpUdF8EaH2vzq42OXdldrC44EYhsTiR4Hw3K7b94v8W2UOYc3FHXDQV9RESzfbxTquGYT6oq4CQPvraqCj6qPLKjf/++qB8e2hRpr0lPW0LbK7MrWNgd11kCW6nSn6SeVunkn7U7tTNq/kJT2COmG8Lsz/AxWxWh+UpuzqKCejKJw+vcjllUFGUzpWhbTfLnMp5AvxDTPZMYLDt/FLGOnhLnOrTU49y9GMlG+hRhCH+oQX9nvIx7hVrX+lkQdcEjq9PoXwggFu8kDAAA=',
    },
})
Record({
    $id: Now.ID['65a883d583a77210fdb8f7b6feaad338'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'df249927734310108ef62d2b04f6a794',
        action_type_parent: '13335de3734310108ef62d2b04f6a7e9',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: 'df249927734310108ef62d2b04f6a794',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        order: '4',
        parent_ui_id: '9f0b5793-7641-4b32-8e63-0130e7e15aef',
        ui_id: '61ae9156-af0d-4918-9bbd-5e9eb92536ab',
        values: 'H4sIAAAAAAAA/4WT3W6bQBCFXyXaa4wAO8b4rnJkKVLbSHGTmyhCw+5gr7QsZH+cUMvv3llArqVa6h2cnZ35zhl4OzHgTrb6UVsHmuOut4+CrVmNfJVjAfk8nadJmqywXmYiq5JFvYS8KljEZKjjB9B7LA1+eLSOVA0N3tKPoHw4OJ02BsGhuGvN3UsnwmOZxtwbg9qdz1QqpO0U9K/TDVI6MNTWoWHrE7WWSlAxW7+9TxTFPFsURZbn88UN2mJJLRRUqKh0M4DdPf8X2PVd0A3WSMM4TtL3qc/zld4aEdDSiOGXQy2QmGpQFiPWgCaLrenZ2hlPApkXT1r1l4qD1G502cCXlb9p6DyLrubeYLscllNWt4zVD+BgR1O582YKkh9aydGO0QmswSu3udbGgqcufBPjFQeVugnBW+Ub/XOMj13aXa3NWwLELiQSPE6G692h/bzEt5V6CG86VC0HdVWKYPhhK1GFNWvfVFQbMXDOyMq7QH1iXv76d1ejeGtbqLAhnrKBrpN6X3amPcqBgSw18V7RS1yr9pPYrdzrePxDYtojxFvSHwb5FYwM0fygNgOUly9aUjjD/yPyuk6SKp+l6X01WyS4mFXA+WwlMKmqSvCsvmfniNnebhRY+zdGMlF++BDCGOoUXznuI1zhRnbuG0EdcUrq/P4HrhjOWckDAAA=',
    },
})
Record({
    $id: Now.ID['69a883d583a77210fdb8f7b6feaad33b'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '83a1f363735310108ef62d2b04f6a74c',
        action_type_parent: 'd301bb23735310108ef62d2b04f6a7dd',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '83a1f363735310108ef62d2b04f6a74c',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        order: '9',
        parent_ui_id: '68dd6260-b0cc-4c4e-abcc-17568dcb8580',
        ui_id: 'feab9ec5-85db-4bde-8eb8-67fdd1d70a65',
        values: 'H4sIAAAAAAAA/4WTX2vbMBTFv0rRs2Pi2Em3vI2UQGFboVn7Uoq5lq4SgSy7+pPWC/nuu7LdLDDD3uyjo6vfPVd6OTHgXjXm3jgPhuOuc/eCrVmGiLKC6jZf5tk8m39BuVqIRTUv5Apul5IlTEUfP4DZY2nxLaDzpBqocUo/gg5x4XTaWASP4qaxN0+tiJ9llvJgLRp/PpNVKNdq6J7HHaS0YKmsR8vWJyqttCAzW7+8flJUkMl8lU/TFpFWQ4WarJse7Obxv8C+a6NuUSIdxnGUvo91Hq/0xoqIliUMPzwagcQkQTtMWA2GWmxsx9beBhKoefFgdHdxHJTxQ5c1fDj1mw7NF8nVuRNsl8VyzGqqMXkHHnZ0KvfBjkHyQ6M4uiE6gRKC9ptrbTA8tPFODFs8VHoSgjc61ObnEB+7lLsaW3AEiG1MJPY4Nix3h+b9Et9WmT68cVE3HPSVFcHyw1ahjmM2oa7ImzDw3qoq+Eh9YkH9+ndWgzg1LdRYE09ZQ9sqsy9b2xxVz0At1ele008qdfNO7E7tTTq8kJTmCOmW9LtefgarYjQ/qEwPFdSTURRO/36EWFYV5DCja7maFctlMYNiIWZFLnO+4vBVzHN2Tpjr3EaDc39jpCbKtxBDGEId4yuHecQt3KrWfyOoI45JnV//AAVduaDJAwAA',
    },
})
Record({
    $id: Now.ID['a5a883d583a77210fdb8f7b6feaad336'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '89ce8a4187120010663ca1bb36cb0be3',
        action_type_parent: '8bb9a8160b10030085c083eb37673aec',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '89ce8a4187120010663ca1bb36cb0be3',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        order: '2➛3',
        parent_ui_id: '9f0b5793-7641-4b32-8e63-0130e7e15aef',
        ui_id: 'f68d02e8-0c99-4b69-8fc4-9dffd0cb363d',
        values: 'H4sIAAAAAAAA/+2XbW+bOhTHv0rE6zoXgwHTd1PS6lbqXaUk232xOyFjHyeWCGQ8dMuN+t1nwEmgSdNt7apW2rv42D78z8MvBz5tLMZLlaVXaVGylMN0XVwJ69zyfU4DCFngYhfb2KYgfUc4sU2kz4IYW2eWqs/lwLNc6FXKltBd37Kkqg2bzSgHVoIYZPngw0rUPyM85FWeQ1re3emjQhWrhK0/mhvasmK5dldCbp1vLL5QidCHrfNPn81TSciBMoJpgB1bq/N9lzMcx67PYzsGol0kLIZEH508JLBcr+q1yHi11EoitTVem5tjszO4GusdfamWg88s+FZCKkDrkCwp4MxaslSHleVr67zMK23QAYubNFnvTixUWraRLdm3Qv2vH+w69TkJOjBuot4tI5OR1izHrGRT7ZmXVW6O8kWmOBRtSgRIViXlqGtrD9ys6tq2V0oWJ9vbWVIt0/dtQqydg04BqkKLgFUdZ628DUtOF9nXyVbkpUqbjJgQk4yzZLdiZZmruCprORurUrNjyW7Nx9MtVaLLHzWioyKr8iZJk4vRzWQc/ftuNvr7YhJNLqazydVodlHfgAQa10u2Wql0Hq3y7FY1CnW8y+E80YuhTLKvOrBCzdNh2/hDXTo2vNT2cWP+yHJVP/Qf7UZfrlV+SNWXChosiJSaB99HGNsuIjj2UUjBQzZ4jHgO8T3fse7OrGJdjBJWFPsc6+JGX6o6RW3GTW6jpjxtmE2H1pd5rlblOy3vFkxG786eCmrnETsWerYtsHzB0jlEOeiYi/IQz1GzP5js9h+F1TsJK+vAOmt69Lg+w+uB7bp7d/C+3TC0OqdpNZY9rm2fH6GV2m+IVhPW03Ht5bpPay/bqojanjWiG68vhaSDaUhJ7CI3Jh4ioZSI2pQgAszmniMCgvkvIPnbQORZKlTtoNg3es+2BVG7L+G/yrZdYR9ieG/3iRNTdiAcPSbQkHhguz7mwJDoPtfcJLb9llh8rsnZS3YfxV66XwQ5ENSPPZsikJQi4gYUhdhxkO8zgTHhQtqvdQqqJWRVGcmEzTtzpm/dAniEuu0/22O42eIUbrL7gnqRNn+lRsODogx0cZYlwNL7s0932V+XRpshjvzk7DuF3BsC7tmG3z7T9yZfN9cvghvnjOpRxlDockDEjzmikkvkQuxJ14tpHNivacJtO1dUOWuKetDTnZ3bfSV//juQn8Ys7GA2/hExBrKmbPft14eODGneH9KeRNpBuu99GO43fhduC31vzNZF3RUa70MAAbPAi+tvPYaIE2LEQuKg0IcAiKS+y8LXCGDBFyCq3hfV4c6TAKT4JIDd18rpj4gxAO4Z6LM36dgNfP6zwUcP3iz5Mu2KO4ZiJ6o3iaScAsv54lJBUtfTfOs9AGq3LH1Gu4V5mZnoONgVwBEW+j2UOL6DqEsCFIRU46BbL3bhGZH8/B1fiiVVKRUAAA==',
    },
})
Record({
    $id: Now.ID['11a843d583a77210fdb8f7b6feaad3dd'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'd5a843d583a77210fdb8f7b6feaad3dc',
        name: 'Change - Emergency - Implement',
    },
})
Record({
    $id: Now.ID['55a883d583a77210fdb8f7b6feaad309'],
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
        model: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_id: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d5a843d583a77210fdb8f7b6feaad3dc',
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
    $id: Now.ID['99a843d583a77210fdb8f7b6feaad3e6'],
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
        model: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_id: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d5a843d583a77210fdb8f7b6feaad3dc',
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
    $id: Now.ID['dda843d583a77210fdb8f7b6feaad3eb'],
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
        model: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_id: 'd5a843d583a77210fdb8f7b6feaad3dc',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d5a843d583a77210fdb8f7b6feaad3dc',
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
    $id: Now.ID['55a883d583a77210fdb8f7b6feaad331'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'dda883d583a77210fdb8f7b6feaad330',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        logic_definition: 'a1168de173311300b61e66476bf6a7d0',
        order: '2',
        parent_ui_id: '30b7e792-9d0a-4f9e-a47f-fa33f22a58db',
        ui_id: '9f0b5793-7641-4b32-8e63-0130e7e15aef',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['59a883d583a77210fdb8f7b6feaad333'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: 'd1a883d583a77210fdb8f7b6feaad333',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        logic_definition: 'a1168de173311300b61e66476bf6a7d0',
        order: '7',
        parent_ui_id: '30b7e792-9d0a-4f9e-a47f-fa33f22a58db',
        ui_id: '68dd6260-b0cc-4c4e-abcc-17568dcb8580',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d5a883d583a77210fdb8f7b6feaad332'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '51a883d583a77210fdb8f7b6feaad332',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '6',
        parent_ui_id: '9f0b5793-7641-4b32-8e63-0130e7e15aef',
        ui_id: '63bafb57-ae77-47d3-b5a4-bb1b959c0e06',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d9a883d583a77210fdb8f7b6feaad334'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '55a883d583a77210fdb8f7b6feaad334',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '10',
        parent_ui_id: '68dd6260-b0cc-4c4e-abcc-17568dcb8580',
        ui_id: 'd30d1eb8-2eb7-4514-a828-de35070286bb',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['dda883d583a77210fdb8f7b6feaad32f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        block: '59a883d583a77210fdb8f7b6feaad32f',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        logic_definition: '5d31e5dedfe50300b61ecae83df26326',
        order: '1',
        ui_id: '30b7e792-9d0a-4f9e-a47f-fa33f22a58db',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['65a883d583a77210fdb8f7b6feaad33f'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        attributes: 'timeFromCreateToActivate=51000',
        flow: 'd5a843d583a77210fdb8f7b6feaad3dc',
        order: '7➛8',
        parent_ui_id: '68dd6260-b0cc-4c4e-abcc-17568dcb8580',
        show_stages: 'false',
        subflow: 'a63faad2731310108ef62d2b04f6a7cf',
        subflow_inputs:
            'H4sIAAAAAAAA/4WT3WrjMBCFXyXo2jF2nDpx7paUQGF3C+22N6WYsTROBLLs6idtNuTdd2SbbGANe2cfHc2c+Qa9nZn11U61nw/aOtAcHwTbsDrn6xUWsMrSLE3SZI11vhCLKlnWOax4wSImg48fQO+xNPjh0TpSNTQ4pR9B+XBwPm8NgkMxa83spRPhs0xj7o1B7S4XsgppOwWn1/EGKR0YKuvQsM2ZSkslyMw2b+9jijzPagCxmE4rUiqhoEJF1m0fbPb038Du1AXdYI3UjOMofR/rPN3orREhWhox/HKoBVKmGpTFiDWgacTWnNjGGU8CDS8etTpdHQep3TBlA19W/qam2SK66TuR7XpYjqymBqvvwcEzdeXOmxEkP7SSox3QCazBK7e91QbDY+dkq4crDio1GYK3yjf654CPXcvdrM1bCohdIBJmHAeunw/t5xXfTuoe3nioWg7qxopg+GEnUYU1a99U5I0YOGdk5V1IfWZe/vp3V4M4tS1U2FCesoGuk3pfdqY9yj4DjdTEe0U/cU0PgrJbudcx8EAjpj1CHB7KfS+/gpEBzQ8q04fy8kVLgtO/n3WyzgvkyTy/43y+zBZiDsuinmd3GRbJerUqIGOXiNmT3Sqw9i9GGqL88AHCAHXEVw77CFe4kZ37RqGOOJK6vP8BAAjpgscDAAA=',
        ui_id: '0909b196-5cb0-4580-9ba6-56a3bfa10baf',
        wait_for_completion: 'true',
    },
})
