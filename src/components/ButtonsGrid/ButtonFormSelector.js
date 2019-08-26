import React, { Fragment } from 'react'
import { Row } from 'reactstrap'
import { connect } from 'react-redux'
import GridButtons from './GridButtons'
import FormSelector from './FormSelector'


class ButtonFormSelector extends React.Component {
    render() {
        return (
            <Fragment>
                <Row className="mt-4">
                    { this.props.clicked ? <FormSelector tag={this.props.tag} /> : <GridButtons /> }
                </Row>
            </Fragment>
        )
    }
}


const mapStateToProps = state =>{
    return {
        clicked : state.formselect.clicked,
        tag : state.formselect.tag
    };
}

export default  connect(mapStateToProps)(ButtonFormSelector)

