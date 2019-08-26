import React from 'react'
import { Col , Row , Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  } from 'reactstrap';
import { connect } from 'react-redux'
import { NavLink as LinkNav } from 'react-router-dom'
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

    doBoth = (name) => {
        this.props.onChangeTitle(name)
        this.toggleNavbar()
    }

    render() {
            return(
                <Row>
                    <Col>
                        <Navbar color="faded" light>
                            <NavbarBrand className="mr-auto">{this.props.title}</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={this.state.collapsed} navbar style={{ zIndex : 1}}>
                                <Nav navbar>
                                    <LinkNav to="/buttons" activeClassName={{ textDecoration : "none" }}>
                                        <NavItem>
                                            <NavLink onClick={this.doBoth.bind(this,"Forms")}>FORMS</NavLink>
                                        </NavItem>
                                    </LinkNav>
                                    <LinkNav to="/daybook" activeClassName={{ textDecoration: "none" }}>
                                        <NavItem>
                                            <NavLink onClick={this.doBoth.bind(this,"DayBook")}>DAYBOOK TABLE</NavLink>
                                        </NavItem>
                                    </LinkNav>
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
