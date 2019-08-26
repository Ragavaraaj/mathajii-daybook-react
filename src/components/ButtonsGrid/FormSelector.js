import React from 'react';
import { Form } from 'reactstrap';
import FormAP from '../Forms/FormAP';
import FormPAP from '../Forms/FormPAP';
import FormI from '../Forms/FormI'

const FormSelector = (props) => {
    switch(props.tag){
        case 'AP' :
            return (
                <Form>
                    <FormAP noproject={true} />
                </Form>
            )

        case 'PAP': 
            return (
                <Form>
                    <FormPAP />
                </Form>
            )

        case 'I':
            return (
                <Form>
                    <FormI />
                </Form>
            )
            
        default :
            return null
    }
}

export default FormSelector;