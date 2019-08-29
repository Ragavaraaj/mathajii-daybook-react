import React from 'react'
import { Form , Col } from 'reactstrap'
import FormAP from '../Forms/FormAP'
import FormPAP from '../Forms/FormPAP'
import FormI from '../Forms/FormI'

const FormSelector = (props) => {
    console.log(props)
    switch(props.match.params.tag){
        case 'AP' :
            return (
                <Col xs="12">
                    <Form>
                        <FormAP noproject={true} />
                    </Form>
                </Col>
            )

        case 'PAP': 
            return (
                <Col xs="12">
                    <Form>
                        <FormPAP />
                    </Form>
                </Col>
            )

        case 'I':
            return (
                <Col xs="12">
                    <Form>
                        <FormI />
                    </Form>
                </Col>
            )
            
        default :
            return null
    }
}

export default FormSelector;