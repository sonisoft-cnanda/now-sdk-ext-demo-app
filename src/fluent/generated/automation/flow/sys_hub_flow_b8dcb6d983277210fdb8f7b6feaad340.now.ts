import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b8dcb6d983277210fdb8f7b6feaad340'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: false,
        attributes: 'timeFromCreateToActivate=51000',
        authored_on_release_version: 28100,
        callable_by_client_api: false,
        copied_from: 'e89e3ade731310108ef62d2b04f6a744',
        copied_from_name: 'Change - Standard',
        description: 'Process a Change Request that uses the Standard Change Model, which has just been created.',
        internal_name: 'copy_of_change__standard_integration_test',
        label_cache:
            '[{"name":"Created_1.current","label":"Trigger➛Change Request Record","reference":"change_request","reference_display":"Change Request","type":"reference","base_type":"reference","attributes":{}},{"name":"6cb27da1-85bb-4043-b50e-2eb07b904d07.table_name","label":"1➛Change Request Table","reference":"change_request","reference_display":"Change Request","type":"table_name","base_type":"table_name","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"6cb27da1-85bb-4043-b50e-2eb07b904d07.record","label":"1➛Change Request Record","reference":"change_request","reference_display":"Change Request","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}}]',
        name: 'Copy of Change - Standard (integration test)',
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
    $id: Now.ID['89dcb6d983277210fdb8f7b6feaad381'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'b8dcb6d983277210fdb8f7b6feaad340',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VY227jNhD9FUFPLZACutiWnbetnUUDpEnheNuHNBAocWgLK1NeiVLWDfzvHepmWZYcX5J2nbwYMElRcw7nnBnx4VkVoTedQnjNI0G4C/fL6Jqql6rRB3AIBcvUTV3TtT6wnkENR+uwHrGYpV6oPnHAx6UT4viA/z0uIOTEnywXgMNCDtuczOXcnHBKRBAu1UsRxnChsjCYT2C+8InAxYz4EQ4GIYVQvdQv1PSxfA98PCF+LP+7M8KnYIfwLYZI4AT1Itxi+Wc+P0znlXE5vyAh7iTkrs9lgDce/4qLcdqdeT4NgauXD48IQAJ3mUsGBmguAjcMTTP6Hd3pmY5uUJOApjUArwUrGvDLsZvqY8ptNrGGDN8FcAq0ZGOLsxAIveP+slwxQ0QZkDn5Hnn/4Gv7mlzHAEG5kM2Vf+2crWyYjYgg97izK+IQCj4Cz4Uoo4MCI7EvhtWxbMHdQngBzx7JUGdPB34857cZG2q5QXE4OBJHGAQsJE4ZeQ6D3c+Cp3ER5WePp5Tkk37gEr/8RwTmqxMLGc+zyjwfT9TOmI6COEwhj6+Gd+OR/denyfC3q7E9vrqfjK+Hk6uRurpQo2U09EkUraNEeuxvsXxHFnMenZ0BXJU59tkDXyYIj+cOxodbuaG3EJ9c4SVFCq8uXkNQw4BTL2V4S1RuMRVVY60kXyVpCnZ3KU3TyvR1K29d621qzwMK/t+xppkUul2qOQxcs5NiMLsETNY1XF1qozPYFuThGxyu2F6PIK+kRbEOa2G2AbZoILmq3GF1okrhLu3mI/uIt6Np5yTf3MmPVW+aF6NqDmfKsT2+iIWk+IlwEdkisAmlduVU5FKM6XA5Z2hXb6jdMOb4KrtMiG0Fp0dQHtaNh3Xq8gG9rOA5DUYecJF145grAWYO/ihuHCLNQinkzq7nZJojZ38U0knpzfM7IaFtz20kyp7Fjr3BsW0N+gO91yYdy91gMDUFmUiq+riS5w4+uKKS9OxLVP33uxdFHp9W6C0xpse3BbFEh+JRCgYzqNF5YX08xYi3UyjZpK3msXuRd7it6jpjDjBDsyRb6NUO0zVL6xJGTU1zjZ1J3wpF1FSwYa/F4JtY6+sY63MJepcsk5qWC0BSBP4hOV87+XwfY9Xk7z9OaLUyYx5UZ4rA8uFRU7I3Q3vl7pLQRBYBeny5efNKw/zgCe3tiCrjEPfrNAxiTus+LPdUPK6sVyg/5Wfx83m5cLXisCCE3Xg3V5wPypNrzTqJkiayGqpNI2WHVxiT6c4AOqBhYTGxpjjdwcBxicGY1bPA0FuTvTH491VZXlBh0iTjNitvPK7Gsz6gvvz/AZ5UZQhfttaYbO7jVZOnGXAbYYe276W3Z7WiMvU9CsXcaZ6z9apk/ZVZM5yjrIX1B25XtyzXQvNFa2EdJELvGF0ysHpmv/sS8l2higY2qmZzkw39J/cDsvzI2FpM50s29QPcFXwU+UQghCzOh3dkHD+U0mdIFl6lTZF5oaRGGYTKbcB/uV6vU+4B24H0+uqMmpZqa7YPaJnIyrtC7QRittWKItJfcXwDqfz6ajnzj3YrUlNYskllU6N6BKFH3JRAp98dMLO52LDBbp9ox/d+Oto9DSxptcKmznFfg0gafabsJOu96BEpU0vEfGvzhS7645JyUudeqL31euiYYD9ot5K2tae0LDJasANWrWSjQMEJBV+ieEzJowWqOEtFzACPx8fPPXyhIt9+ZiWsWsG3kZfie9e4s8/jrcYFh5X8U+SMgL1OT1LTUbJ5ydBsURW+Dm85gFqk2zVbvm8H9auzpiBfwPB+mo+D/Shpsredxfawfet7NpbbSnpsptOe3cU7Rv1mF38NUZxNY/D4L8S+Ag/MJwAA',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['01dcb6d983277210fdb8f7b6feaad37f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '83a1f363735310108ef62d2b04f6a74c',
        action_type_parent: 'd301bb23735310108ef62d2b04f6a7dd',
        attributes: 'timeFromCreateToActivate=51000',
        compiled_snapshot: '83a1f363735310108ef62d2b04f6a74c',
        flow: 'b8dcb6d983277210fdb8f7b6feaad340',
        order: '2',
        ui_id: '22827d38-70a4-488a-9ca1-f6436c11357b',
        values: 'H4sIAAAAAAAA/4VTXWvbMBT9K0PPjkkiJ+3yNlIChW2FdutLKeZaukoEsuzqI60X8t93ZXtZYIY96tyje885V3o5MRBBN/be+gBW4FPn7yXbsDm/VZwv1Q1f8cV8Mb9FtV7KZTUv1BpuBLKM6cQTB7B7LB2+RfSBUAs1TuFHMDEVTqetQwgoy0UuonNow/lMdal9a6B7HmmEtOCoV0DHNifqp40kMtu8vP4ZXcFC8TWfllgoamGgQkPUba/m0+N/VYauTbhDhTSst5mgr2Ofxyu8cTJJW2QMPwJaiaRJgfGYsRqshNC4jm2CiwSQY/lgTXdhHLQNg8saPrz+RUP5MruaO6HtUizHrKaMqTsI8ERTRYhuDFIcGi3QD9FJVBBN2F5jA+GhTQ9huBKgMpMiRGNibb8P8bFLu6u1RU8CsU2JJI+jYfV0aN4v8e207cMbi6YRYK6oCE4cdhpNWrONdUXcjEEITlcxJNUnFvWPf3c1gFPbQoM16SlraFtt92XrmqPuNZClOt8bOuTKNO+k3eu9zYdvkdMeId8RftfDz+B0iuYbtelFRf3Tagqn/zRSrqoKOMzoWa5nxWpVzKBYylnBFRdrAZ/lnLNzxnzntwa8/xsjmSjfYgphCHWMrxz2ka4Ip9vwhUQdcUzq/PobU2hveb4DAAA=',
    },
})
Record({
    $id: Now.ID['41dcb6d983277210fdb8f7b6feaad37d'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        attributes: 'timeFromCreateToActivate=51000',
        comment: 'Approve Change',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b8dcb6d983277210fdb8f7b6feaad340',
        order: '1',
        ui_id: '6cb27da1-85bb-4043-b50e-2eb07b904d07',
        values: 'H4sIAAAAAAAA/+VVTU/jMBD9K5XPVeW0pUBvqBUSEgsSrLiwKJrYk9aS4wTbAbpV//uOEzdkl6/Dsge0uc33e5N58u2WgfCqNGfGeTACrzfuTLI5Q46YgcTDSTJJeMKPMJ+N5Tjj03wGh7lkQ6ZCnkVR2mAZKLBvP4Cug2O7XVgEjzJNRqK2Fo3f7Sgulas0bG5iGnkqsNTDo2XzLRNrpSUls/ntXRw1RcmT42QmCNJkzPn4aJpks0mWjOUEEBNqoSFDTalXb6HymyrYshR1QUhStXeex8pljAzOlhShogAn4UOGTx6NRAKSg3Y4ZAUYCb60Gzb3tiYH0ZSXRm+6jLUyvqVWwJNTP2nylIe8HImZiLQ7M40rad35EjxcU2fhaxtTxbpUAl27E4k51Nov+r424bIKf7Qt8ZDpfXWp68JctBthXYPeH6gdgcAq8AzIW1r59bp8vNqDPFWmWUmkqEsBurPAe6uy2gc4W4Yamx0XUFXKrNLKlg+qKSYoxWilyRjlunykmU6tzKi9xBFtFUan5F827huwKpD4Rm2oeDdkbuMWGpx7pkI7TO/rgKQlFimkzRaaFaTNJYRiYVXlT2jUA0bgu+HfqqA3oru533x7NYg1mBWmFu9rdP6lDBZNfHDVxT8SRXbwnijEcU8U35tTeB1f1MUL33m/dnDRBqIqDj5NFUdfSRWRxpeXxT8TQ3Pr7vnQOnsvAkJMnEH/qDmfyNZC+VIMb+Z9JAo+fvelwJ4oThVq+RrYvSKwIEge0xb8H6qIwcFNDHbvxadJI5nx5vtCAvlvno27XzG9tfY+CQAA',
    },
})
Record({
    $id: Now.ID['f0dcb6d983277210fdb8f7b6feaad341'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'b8dcb6d983277210fdb8f7b6feaad340',
        name: 'Copy of Change - Standard (integration test)',
    },
})
Record({
    $id: Now.ID['70dcb6d983277210fdb8f7b6feaad34b'],
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
        model: 'b8dcb6d983277210fdb8f7b6feaad340',
        model_id: 'b8dcb6d983277210fdb8f7b6feaad340',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_b8dcb6d983277210fdb8f7b6feaad340',
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
    $id: Now.ID['f4dcb6d983277210fdb8f7b6feaad350'],
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
        model: 'b8dcb6d983277210fdb8f7b6feaad340',
        model_id: 'b8dcb6d983277210fdb8f7b6feaad340',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_b8dcb6d983277210fdb8f7b6feaad340',
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
