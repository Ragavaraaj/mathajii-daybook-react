import React, { Fragment } from 'react'
import { FormFeedback , Label , Input , FormGroup , } from 'reactstrap'
import FormAP from './FormAP'

class FormPAP extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkvalid : false,
            att : {},
            val : ""
        }
    }

    valHandler = (event) => {
        this.setState({
            val : event.target.value
        })        
    }

    check = () => {
        if(this.state.val)
            this.setState( state => {
                return {
                    att : { valid : true },
                    checkvalid : !state.checkvalid
                }
            })
        else
        this.setState( state => {
            return {
                att : { invalid : true },
                checkvalid : !state.checkvalid
            }
        })
    }

    render() {
        return (
            <Fragment>
                <FormGroup>
                    <Label for="project">Project</Label>
                    <Input 
                        type="select" 
                        name="project" 
                        id="project" 
                        onBlur={this.check} 
                        onChange={this.valHandler} 
                        value={this.state.val} 
                        {...this.state.att} 
                    >
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormFeedback>please select an option</FormFeedback>
                </FormGroup>
                <FormAP noproject={false} pvalid={this.state.checkvalid} pval={this.state.val} />
            </Fragment>
        );

    }
} 

export default FormPAP;