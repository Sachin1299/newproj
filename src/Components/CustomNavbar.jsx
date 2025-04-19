// import React from 'react';
// import { Navbar, Nav, Container} from 'react-bootstrap';
// import '../style/Custom.css';
// import {NavLink} from 'react-router-dom'

// const CustomNavbar = () => {
//   return (
//     <Navbar expand="lg" className="custom-navbar shadow-sm">
//       <Container>
//         <Navbar.Brand href="#" className="navbar-logo">
//           <span className="logo-text">SupportSphere</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="custom-navbar-nav" />
//         <Navbar.Collapse id="custom-navbar-nav">
//           <Nav className="ms-auto nav-links">
//             <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
//             <Nav.Link as={NavLink} to="/About">About</Nav.Link>
//             <Nav.Link as={NavLink} to="/Services" >Services</Nav.Link>
//             <Nav.Link as={NavLink} to="/Enquiry" >Enquiry</Nav.Link>
//             <Nav.Link as={NavLink} to="/ContactUs" >Contact Us</Nav.Link>
//             <Nav.Link as={NavLink} to="/Careers" >Careers</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;




import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../style/Custom.css';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar shadow-sm ${scrolled ? 'scrolled-navbar' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#" className="navbar-logo">
          <span className="logo-text">SupportSphere</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            <div
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            >
            <NavDropdown
              title="Services"
              id="services-dropdown"
              //className={`${hover?'custom-dropdown nav-item show dropdown':'custom-dropdown nav-item'}`}
              className={`custom-dropdown nav-item ${hover ? 'show' : ''}`}
              show={hover}
              menuVariant="light"
            >
              <div className="services-dropdown-wrapper">
                <div className="dropdown-grid">
                  <div className="dropdown-item">Concurrent Call Handling</div>
                  <div className="dropdown-item">Lead Management</div>
                  <div className="dropdown-item">Call Center Solutions</div>
                  <div className="dropdown-item">Cloud Telephony & Virtual Numbers</div>
                  <div className="dropdown-item">Dynamic Broadcasting</div>
                  <div className="dropdown-item">Voicemail & Call History</div>
                  <div className="dropdown-item">Analytics & Performance Reports</div>
                  <div className="dropdown-item">Call Recording & Quality Control</div>
                  <div className="dropdown-item">Intercom & Call Transfer</div>
                  <div className="dropdown-item">Automatic Call Distribution</div>
                  <div className="dropdown-item">CRM Integration</div>
                  <div className="dropdown-item">IVR Customization</div>
                  <div className="dropdown-item">Automatic Dialer</div>
                </div>
              </div>
            </NavDropdown>
            </div>
            <Nav.Link as={NavLink} to="/Enquiry">Enquiry</Nav.Link>
            <Nav.Link as={NavLink} to="/ContactUs">Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/Careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
