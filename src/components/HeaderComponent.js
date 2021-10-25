import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <a href="/"><img src="assets/images/logo.png" alt="dance studio logo" className="img-fluid" /></a>
                            </div>
                            <div className="col ml-5 pl-5">
                                <h1>Step-By-Step</h1>
                                <hr />
                                <h2 className="header-h2">Creating art on the dance floor</h2>
                            </div>
                            <div className="col-md-4 col-xl-2 mt-5">
                                <Button>
                                    Sign-up for a class
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="sm">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" width="30" alt="StepByStep Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/instructorbio">
                                        <i className="fa fa-list fa-lg" /> Dance Instructors
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;