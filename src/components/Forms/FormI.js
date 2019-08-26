import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { FormGroup , Input , Label , Button } from 'reactstrap'
import ShowVal from './ShowVal'
import * as actionType from '../../redux-reducer/actiontype'

class FormI extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkval : false,
            att : {}
        }
    }

    textBoxValHandler = (event) => {
        this.props.onChangeMoreData(event.target.value)
    }

    checkValStateHandler = (check) => {
        this.setState(state => {
            return {
                att : check ? { valid : true } : { invalid : true },
                checkval : check ? !state.checkval : state.checkval
            }
        })
    }

    sendfun = () => {
        this.setState(state => {
            return {
                checkval : !state.checkval
            }
        })
    }

    checkValHandler = () => { 
        if(this.props.data !== "")
            this.checkValStateHandler(true);
        else   
            this.checkValStateHandler(false)  
    }

    render() {
        return (
            <Fragment>
                <FormGroup>
                        <Label for="more">Enter more details</Label>
                        <Input 
                            type="textarea" 
                            name="more" 
                            id="more" 
                            onChange={this.textBoxValHandler} 
                            value={this.state.val} 
                            {...this.state.att}
                        />
                </FormGroup>
                <FormGroup>
                    <Button color="success" outline block onClick={this.checkValHandler}>Submit</Button>
                </FormGroup>
                {this.state.checkval ? <ShowVal toggle={ this.sendfun } show={true} /> :  <ShowVal show={false} />}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        data : state.data.moredata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeMoreData: (value) => dispatch({type : actionType.CHANGE_DATA , payload: { moredata : value }})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormI);
