/**
 * Created by alond9990 on 10/09/2018.
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderNavbar extends Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Todo App</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Login / Register
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
export default HeaderNavbar;