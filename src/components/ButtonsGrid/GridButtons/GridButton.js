import React from 'react'
import { Col , Button} from 'reactstrap'
import * as actionType from '../../../redux-reducer/actiontype'
import { connect } from 'react-redux'

class GridButton extends React.Component {

    onClickHandler = (title) =>{
        this.props.push({pathname : this.props.url + '/' + this.props.form})
        this.props.onChangeTitle(title)
    }

    render() {
        return (
            <Col xs="6" className="mt-3" key={this.props.key}>
                <Button 
                    color="primary" 
                    className="GridButtons"
                    outline 
                    block 
                    onClick={this.onClickHandler.bind(this,this.props.children)}
                    key={this.props.key}
                >
                {console.log(this.props)}{this.props.children}
                </Button>
            </Col>
        );
    }
}

const mapDispachToProps = dispatch => {
    return {
        onChangeTitle : (title) => dispatch({type : actionType.CHANGE_TITLE , change_title : title})
    }

}

export default connect(null, mapDispachToProps)(GridButton)