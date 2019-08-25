import React, { Fragment } from 'react'
import { Col , Row , Button } from 'reactstrap'
import { connect } from 'react-redux'
import * as actionType from '../../redux-reducer/actiontype'
import * as appConst from '../../AppConst'

class ButtonsGrid extends React.Component {
    render() {
        return (
            <Fragment>
                <Row className="mt-4">
                    <GridButtons />
                </Row>
            </Fragment>
        )
    }
}

const GridButtons = () => {
    return (
        appConst.BUTTON_TEXT.map((el) => {
            return <GridButton>{el}</GridButton>
        })
    )
}

const GridButton = (props) => {
    return (
        <Col xs="6" className="mt-3">
            <Button color="primary" outline block className="GridButtons" onClick={props.onChangeTitle.bind(props.children)}>{props.children}</Button>
        </Col>
    );
}

const mapStateToProps = state =>{
    return {
        title : state.title
    };
}

const mapDispachToProps = dispatch => {
    return {
        onChangeTitle : (value) => dispatch({type : actionType.CHANGE_TITLE , change_title : value})
    }

}

connect(mapStateToProps, mapDispachToProps)(GridButton)

export default ButtonsGrid
