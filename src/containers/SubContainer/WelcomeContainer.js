import React, { Component } from 'react'
import { Card , CardText , CardTitle , Container , Row , Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'

const CustomCard = () =>{
    return (
        <Col xs="6" className="mt-4">
            <Card body outline color="info">
                <CardTitle>Total Salary Booked</CardTitle>
                <CardText><span style={{ fontSize : "1.5em" }}>{1000}</span></CardText>
            </Card>
         </Col>
    )
}

class WelcomeContainer extends Component {
    render() {
        return (
                <Fade>
                    <Container className="mt-3">{ console.log(this.props)}
                            <Row >
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            </Row>
                    </Container>
                </Fade>
        )
    }
}

export default WelcomeContainer
