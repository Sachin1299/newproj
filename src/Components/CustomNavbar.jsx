import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import '../Custom.css';
import {NavLink} from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="navbar-logo">
          <span className="logo-text">SupportSphere</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            <Nav.Link as={NavLink} to="/Services" >Services</Nav.Link>
            <Nav.Link as={NavLink} to="/Enquiry" >Enquiry</Nav.Link>
            <Nav.Link as={NavLink} to="/ContactUs" >Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/Careers" >Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
