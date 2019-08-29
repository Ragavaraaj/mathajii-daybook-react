import React, { Component } from 'react'
import { Container , Row , Table as BootTable} from 'reactstrap'

export default class DayBookContainer extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <BootTable>
                        <thead>
                        <tr>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        </tbody>
                    </BootTable>
                </Row>
            </Container>
        )
    }
}
