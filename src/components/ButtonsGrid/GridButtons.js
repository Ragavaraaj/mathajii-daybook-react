import React from 'react';
import { Button , Col } from 'reactstrap';
import * as actionType from "../../redux-reducer/actiontype"
import * as appConst from '../../AppConst'
import { connect } from 'react-redux'

const GridButtons = (props) => {
    return (
        appConst.BUTTON_DATA.map((el , index) => {
            return <GridButton form={el.tag} key={index}>{el}</GridButton>
        })
    )
}

const GridButton = (props) => {
    return (
        <Col xs="6" className="mt-3" keys={props.key}>
            <Button 
                color="primary" 
                className="GridButtons"
                outline 
                block 
            >
            {props.children}
            </Button>
        </Col>
    );
}

const mapStateToProps = state =>{
    return {
        title : state.title,
        clicked : state.formselect.clicked,
        tag : state.formselect.tag
    };
}
const mapDispachToProps = dispatch => {
    return {
        onChangeFormSelect : (title,formselect) => dispatch({type : actionType.CHANGE_TITLE , changed_title : title, changed_formselect : formselect})
    }

}
connect(mapStateToProps, mapDispachToProps)(GridButton)

export default GridButtons