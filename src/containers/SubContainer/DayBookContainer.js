import React from 'react'
import { Container , Row , Table } from 'reactstrap'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
class DayBookContainer extends React.Component {

    componentDidMount() {
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => console.log(res))
    }

    render() {
        return (
                <Fade>
                    <Container className="mt-3" fluid>
                        <Row>
                            <Table size="sm">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Particulates</th>
                                    <th>Credite</th>
                                    <th>Debite</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody className="mt-3">
                                <tr>
                                    <td>24-12-2019</td>
                                    <td>123456789012</td>
                                    <td>300.00</td>
                                    <td>0.00</td>
                                    <td>12000</td>
                                </tr>
                                <tr>
                                    <td>25-12-2019</td>
                                    <td>1234567890</td>
                                    <td>0.00</td>
                                    <td>300.00</td>
                                    <td>140000</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Container>
                </Fade>
        )
    }
}

export default DayBookContainer
