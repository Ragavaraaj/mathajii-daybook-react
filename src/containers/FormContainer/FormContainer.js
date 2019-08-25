import React from 'react'
import FormAP from '../../components/Forms/FormAP';
import FormPAP from '../../components/Forms/FormPAP';
import FormI from '../../components/Forms/FormI'
import ButtonGrid from '../../components/ButtonsGrid/ButtonsGrid'
import { Form , Col , Row , Container , Button} from 'reactstrap'


class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked : ""
        }
    }

    render() {
        return (
            <Container className="mt-3">
                <Row className="justify-content-start">
                    <Col xs="1" style={{ marginLeft : "0px" , padding : 0}}>
                        <Button color="success" outline>>></Button>
                    </Col>
                </Row>
                <ButtonGrid />
                <FormSelector tag="" />
            </Container>
        )
    }
}

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


export default FormContainer;
