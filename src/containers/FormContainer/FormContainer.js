import React from 'react'
import { Col , Row , Container , Button} from 'reactstrap'
import GridButtons from '../../components/ButtonsGrid/GridButtons/GridButtons';
import { Switch , Route } from 'react-router-dom'
import FormSelector from '../../components/Forms/FormSelector';


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
                <Row className="mt-4">
                    <Switch>
                        <Route path="/buttons/:tag" component={FormSelector} />
                        <Route path="/buttons" component={GridButtons} />
                    </Switch>
                </Row>
            </Container>
        )
    }
}
export default FormContainer;
