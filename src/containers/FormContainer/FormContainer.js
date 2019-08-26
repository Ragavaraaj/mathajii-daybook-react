import React from 'react'
import ButtonFormSelector from '../../components/ButtonsGrid/ButtonFormSelector'
import { Col , Row , Container , Button} from 'reactstrap'


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
                <ButtonFormSelector />
            </Container>
        )
    }
}
export default FormContainer;
