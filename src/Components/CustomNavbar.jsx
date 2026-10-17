import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../style/Custom.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../img/logo.png';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [navexpanded, setNavExpanded] = useState(false);

  const navref = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setNavExpanded((prev) => !prev);
  };

  const clickOutsideNav = (event) => {
    if (navref.current && !navref.current.contains(event.target)) {
      setNavExpanded(false);
    }
  };

  useEffect(() => {
    if (navexpanded) {
      document.addEventListener('mousedown', clickOutsideNav);
    } else {
      document.removeEventListener('mousedown', clickOutsideNav);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutsideNav);
    };
  }, [navexpanded]);

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
      onToggle={handleToggle}
      expanded={navexpanded}
      ref={navref}
      className={`custom-navbar shadow-sm ${scrolled ? 'scrolled-navbar' : ''}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-logo d-flex align-items-center">
          <img
            src={logoImg}
            alt="Bhagirath Solutions"
            className="brand-logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <NavDropdown
                title={
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/Services');
                      setNavExpanded(false);
                      setHover(false);
                    }}
                  >
                    Services
                  </span>
                }
                id="services-dropdown"
                className={`custom-dropdown nav-item ${hover ? 'show' : ''}`}
                show={hover}
                menuVariant="light"
              >
                <div className="services-dropdown-wrapper">
                  <div className="dropdown-grid">
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'it-support' } }); setNavExpanded(false); setHover(false); }}>IT Support & Infrastructure Management</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'customer-service' } }); setNavExpanded(false); setHover(false); }}>Customer Service & Helpdesk</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'business-admin' } }); setNavExpanded(false); setHover(false); }}>Business Administration Services</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'bpo' } }); setNavExpanded(false); setHover(false); }}>Business Process Outsourcing (BPO)</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'virtual-assistant' } }); setNavExpanded(false); setHover(false); }}>Virtual Assistant Services</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'software-dev' } }); setNavExpanded(false); setHover(false); }}>Software Development & Web Solutions</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'sales-support' } }); setNavExpanded(false); setHover(false); }}>Sales Support & Lead Generation</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'digital-marketing' } }); setNavExpanded(false); setHover(false); }}>Digital Marketing Support</div>
                    <div className="dropdown-item" onClick={() => { navigate('/Services', { state: { scrollTo: 'remote-teams' } }); setNavExpanded(false); setHover(false); }}>Dedicated Remote Teams & Staff Outsourcing</div>
                  </div>
                </div>
              </NavDropdown>
            </div>
            <Nav.Link as={NavLink} to="/Facilities">Facilities</Nav.Link>
            <Nav.Link as={NavLink} to="/Enquiry">Enquiry</Nav.Link>
            <Nav.Link as={NavLink} to="/Careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;