import React from 'react'
import { Col , Row , Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  } from 'reactstrap';
import { connect } from 'react-redux'
import * as actionType from '../../redux-reducer/actiontype'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed : false
        }
    }

    toggleNavbar = () => {
        this.setState((state) => {
            return {
                collapsed : !state.collapsed,
            }
        })
    };

    render() {
            return(
                <Row>
                    <Col>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">{this.props.title}</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={this.state.collapsed} navbar style={{ zIndex : 1}}>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="" onClick={this.props.onChangeTitle.bind(this,"Buttons")}>ADD MORE DATA</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="" onClick={this.props.onChangeTitle.bind(this,"Daybook")}>DAYBOOK TABLE</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            );
    }
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

export default connect(mapStateToProps,mapDispachToProps)(Menu);
