import React from 'react'
import { Row , Container } from 'reactstrap'
import { Switch , Route } from 'react-router-dom'
import GridButtons from '../../components/ButtonsGrid/GridButtons/GridButtons'
import FormSelector from '../../components/Forms/FormSelector'
import Fade from 'react-reveal/Fade'

class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked : ""
        }
    }

    render() {
        return (
                <Fade>
                    <Container className="mt-2">{console.log(this.props)}
                        <Row>
                            <Switch>
                                <Route path="/buttons/:tag" component={FormSelector} />
                                <Route path="/buttons" component={GridButtons} />
                            </Switch>
                        </Row>
                    </Container>
                </Fade>
        )
    }
}
export default FormContainer;
