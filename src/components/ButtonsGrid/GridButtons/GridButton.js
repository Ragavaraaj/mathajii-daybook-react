import React from 'react'
import { Col , Button} from 'reactstrap'
import * as actionType from '../../../redux-reducer/actiontype'
import { connect } from 'react-redux'

const GridButton = (props) => {
    return (
        <Col xs="6" className="mt-3" key={props.key}>
            <Button 
                color="primary" 
                className="GridButtons"
                outline 
                block 
                onClick={() => props.onChangeFormSelect(props.children , { clicked : !props.clicked , tag : props.form})}
                key={props.key}
            >
            {console.log(props.children)}{props.children}
            </Button>
        </Col>
    );
}

const mapStateToProps = state =>{
    return {
        clicked : state.formselect.clicked,
        tag : state.formselect.tag
    };
}
const mapDispachToProps = dispatch => {
    return {
        onChangeFormSelect : (title,formselect) => dispatch({type : actionType.CHANGE_FORM_SELECT , changed_title : title, changed_formselect : formselect})
    }

}

export default connect(mapStateToProps, mapDispachToProps)(GridButton)