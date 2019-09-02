import React from 'react'
import { Col , Row , Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux'
import { NavLink as LinkNav } from 'react-router-dom'
import { LINK_DATA } from '../../AppConst'
import * as actionType from '../../redux-reducer/actiontype'

const NavLinks = (props) => {
    return (
        LINK_DATA.map((el,index) => {
            return (
                <LinkNav to={el.link} style={{ textDecoration : "none" }} key={index}>
                    <NavItem>
                        <div className="nav-link" onClick={props.clickfun.bind(this,el.name,index)}>{el.name}</div>
                    </NavItem>
                </LinkNav>
            )
        })
    )
}

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

    doBoth = (name,index) => {
        this.props.changepage(index)
        this.props.onChangeTitle(name)
        this.props.onChangeAccess()
        this.toggleNavbar()
    }

    render() {
            return(
                <Row>
                    <Col>
                        <Navbar color="faded" light>
                            <NavbarBrand className="mr-auto">{this.props.title}</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={this.state.collapsed} navbar >
                                <Nav navbar>
                                    <NavLinks clickfun = {this.doBoth}/>
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
        onChangeTitle : (value) => dispatch({type : actionType.CHANGE_TITLE , change_title : value}),
        onChangeAccess : () => dispatch({type : actionType.CHANGE_ACCESSBYNAV , val : true})
    }

}

export default connect(mapStateToProps,mapDispachToProps)(Menu);
