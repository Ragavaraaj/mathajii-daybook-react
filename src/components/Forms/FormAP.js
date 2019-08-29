import React, { Fragment } from 'react'
import { FormFeedback , Label , Input , FormGroup , Button  } from 'reactstrap'
import * as acitonType from '../../redux-reducer/actiontype'
import { connect } from 'react-redux'
import ShowVal from './ShowVal'

class FormAP extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            moredetail : {
                show : false,
                val : "No"
            },
            data : "",
            checkval : false,
            particulars : {att : {} , val : "" },
            amount : {att : {} , val : "" }
        }

    }

    parHandler = (event) => {
        if(event.target.value === "")
        {
            this.setState({
                particulars : { att : { } , val : event.target.value }
            });
            return
        }
        if(event.target.value.length > 10)
            this.setState({
                particulars : { att : { invalid : true } , val : event.target.value }
            });
        else
            this.setState({
                particulars :{ att : { valid : true } , val : event.target.value }
            });
    } 

    amtHandler =  (event) => {
        if(event.target.value === "")
        {
            this.setState({
                amount : { att : { } , val : event.target.value }
            });
            return
        }
        if(event.target.value > 50000)
            this.setState({
                amount : { att : { invalid : true } , val : event.target.value }
            });
        else
            this.setState({
                amount :{ att : { valid : true } , val : event.target.value }
            });
        
    }

    textBoxHandler = () => {
        this.setState( state => {
            return{
                moredetail : {
                    show : !state.moredetail.show,
                    val : state.moredetail.show ? "No" : "Yes"
                },
                data : ""
            }
        })
    }

    textBoxValHandler = (event) =>{
        this.setState({
            data : event.target.value
        })
    }

    modelShow = () => {
        this.setState( prestate => {
            return {
                checkval : !prestate.checkval
            }
        })
    }

    checkValHandler = () => {
        if(this.state.particulars.att.valid && this.state.amount.att.valid)
        {
            this.props.dataStateHandler(this.state.particulars.val ,this.state.amount.val,this.state.data)
            this.modelShow()
        }  
    } 

    checkFullValHandler = () => {
        if(this.state.particulars.att.valid && this.state.amount.att.valid && this.props.pvalid)
        {
            this.props.dataFullStateHandler(this.state.particulars.val ,this.state.amount.val,this.state.data,this.props.pval)
            this.modelShow()
        }
    }

    render() {

        let textbox = null;

        if(this.state.moredetail.show)
            textbox = (
                <FormGroup>
                    <Label for="more">Enter more details</Label>
                    <Input type="textarea" name="more" id="more" onChange={this.textBoxValHandler} value={this.state.data}/>
                </FormGroup>
            );

        return (
            <Fragment>
                <FormGroup>
                    <Label for="par" className="Custom-Label-Size">Particulars</Label>
                    <Input 
                        type="text" 
                        name="par" 
                        id="par" 
                        placeholder="" 
                        onChange={this.parHandler}
                        value = {this.state.particulars.val}
                        {...this.state.particulars.att}                        
                    />
                    <FormFeedback>not more than 10 characters</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="amount" className="Custom-Label-Size">Amount</Label>
                    <Input 
                        type="number"  
                        name = "amount" 
                        id="amount" 
                        placeholder="Amount in Rs." 
                        step="any" 
                        onChange={this.amtHandler}
                        value = {this.state.amount.val}
                        {...this.state.amount.att}
                    />
                    <FormFeedback>not more than 50000</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" outline onClick={this.textBoxHandler} block>Do want to add more details : {this.state.moredetail.val}</Button>
                </FormGroup>
                {textbox}
                <FormGroup>
                    <Button color="success" outline block onClick={ this.props.noproject ? this.checkValHandler : this.checkFullValHandler }>Submit</Button>
                </FormGroup>
                {this.state.checkval ? <ShowVal toggle={ this.modelShow } show={true} /> :  <ShowVal show={false} />}
            </Fragment>
        );

    }
} 

// const mapStateToProps = state => {
//     return {
//         data : state.data
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        dataStateHandler : (par,amt,moredata) => dispatch(
            {
                type : acitonType.CHANGE_DATA , 
                payload : {
                    particulars : par , 
                    amount : amt , 
                    moredata : moredata
                }
            }
        ),
        dataFullStateHandler : (par,amt,moredata,project) => dispatch(
            {
                type : acitonType.CHANGE_DATA, 
                payload : {
                    particulars : par , 
                    amount : amt , 
                    moredata : moredata , 
                    project : project
                }
            }
        )
    }
}

export default connect(null,mapDispatchToProps)(FormAP);