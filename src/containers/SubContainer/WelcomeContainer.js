import React, { Component } from 'react'
import { Card , CardText , CardTitle , Container , Row , Col } from 'reactstrap'

const CustomCard = () =>{
    return (
        <Col xs="6" className="mt-4">
            <Card body outline color="info">
                <CardTitle>Total Salary Booked</CardTitle>
                <CardText><div style={{ fontSize : "1.5em" }}>{1000}</div></CardText>
            </Card>
         </Col>
    )
}

export default class WelcomeContainer extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row >
                   <CustomCard/>
                   <CustomCard/>
                   <CustomCard/>
                   <CustomCard/>
                </Row>
            </Container>
        )
    }
}
