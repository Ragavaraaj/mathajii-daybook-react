import React, { Component } from 'react'
import { Table } from 'reactstrap'
import WPRows from './DataRows/WPRows'

class WPTable extends Component {
    render() {
        return (
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
                <WPRows />
            </Table>
        )
    }
}

export default WPTable