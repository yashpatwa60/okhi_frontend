import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../utils";
import {useToasts} from 'react-toast-notifications'
import '../../assets/css/pages/navbar.css'
import LogoImage from '../../assets/img/logo.png'

const NavbarPrivate = () => {
  const {addToast} = useToasts()
  const history = useHistory()
  const logoutFunc = () => {
    logout()
    addToast('Logout successfully', { appearance: "success" });
    history.push('/login')
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img height="50" src={LogoImage} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto my-2">
              <Button onClick={() => logoutFunc()} variant="dark">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPrivate;
