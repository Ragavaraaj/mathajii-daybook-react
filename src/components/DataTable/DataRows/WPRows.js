import React, { Component } from 'react'

const data = [{"date":"02-Sep-19","info":"imps-02sep","debit":"1500.00","credit":"0.00","balance":"900.00"},{"date":"01-Sep-19","info":"wtd-rc-30aug-ibv-allied","debit":"1200.00","credit":"1200.00","balance":"-600.00"},{"date":"01-Sep-19","info":"SAL-ADV-AOD 178080.00","debit":"0.00","credit":"0.00","balance":"600.00"},{"date":"29-Aug-19","info":"29aug-imps-recd","debit":"1000.00","credit":"1000.00","balance":"600.00"}]


class Row extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tot : parseFloat(this.props.data.credit) ? parseFloat(this.props.prvtot-this.props.data.credit) : 
                                                       parseFloat(this.props.prvtot+this.props.data.debit)
        }
    }
    
    render() {
        return <tr key={this.props.index}>
                    <td>{this.props.data.date}</td>
                    <td>{this.props.data.info}</td>
                    <td>{this.props.data.debit}</td>
                    <td>{this.props.data.credit}</td>
                    <td>{this.state.tot}</td>
                    {console.log(this.state.tot)}
                </tr>
    }

    componentDidMount(){
        this.props.handler(this.state.tot)
    }
}

class WPRows extends Component {
    constructor(props){
        super(props)
        this.state={
            prvtot : 0
        }
    }

    prvtotHandler = (val) => {
        this.setState({
            prvtot : val
        })
    }

    render() {
        return (
            <tbody className="mt-3">
            {data.map((el,index) => 
                <Row data={el} prvtot={this.state.prvtot} handler={this.prvtotHandler} index={index}/>
            )}
            </tbody>
        )
    }
}


export default WPRows
