import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/pages/navbar.css";
import LogoImage from "../../assets/img/logo.png";
const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light " variant="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img height="50" src={LogoImage} alt="logo"/>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto my-2">
              <Link to="/SignUp" className="btn btn-dark m-2">
                SignUp
              </Link>
              <Link to="/login" className="btn btn-info m-2">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
