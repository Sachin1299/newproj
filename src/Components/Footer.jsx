import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import "../style/footer.css";

// Change the name here and it updates everywhere in the footer
const companyName = "Bhagirath IT Solutions";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/About" },
  { label: "Services", to: "/Services" },
  { label: "Facilities", to: "/Facilities" },
  // These two jump to sections on the Home page (ids: "why-choose" and "industries")
  { label: "Why Choose Us", to: "/", scrollTo: "why-choose" },
  { label: "Industries We Serve", to: "/", scrollTo: "industries" },
  { label: "Enquiry", to: "/Enquiry" },
  { label: "Careers", to: "/Careers" },
];

// scrollTo ids match the cards on the Services page
const serviceLinks = [
  { label: "IT Support", scrollTo: "it-support" },
  { label: "Customer Service", scrollTo: "customer-service" },
  { label: "Business Administration", scrollTo: "business-admin" },
  { label: "BPO", scrollTo: "bpo" },
  { label: "Virtual Assistant", scrollTo: "virtual-assistant" },
  { label: "Software and Web Solutions", scrollTo: "software-dev" },
  { label: "Sales and Lead Generation", scrollTo: "sales-support" },
  { label: "Digital Marketing", scrollTo: "digital-marketing" },
  { label: "Remote Staffing", scrollTo: "remote-teams" },
];

const Footer = () => (
  <footer className="footer-section text-light">
    <Container>
      <Row className="g-4 mb-4 align-items-start">
        {/* Brand */}
        <Col lg={3} md={6}>
          <img src={logoImg} alt={`${companyName} logo`} className="footer-logo-img mb-3" />
          <p className="footer-desc">
            Helping businesses improve efficiency through outsourcing, business administration,
            technology support, and flexible remote services.
          </p>
        </Col>

        {/* Quick links */}
        <Col lg={2} md={6}>
          <h6 className="footer-heading">Quick Links</h6>
          <ul className="list-unstyled footer-links-list">
            {quickLinks.map(({ label, to, scrollTo }) => (
              <li key={label}>
                <Link
                  to={to}
                  state={scrollTo ? { scrollTo } : undefined}
                  className="footer-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Services */}
        <Col lg={3} md={6}>
          <h6 className="footer-heading">Our Services</h6>
          <ul className="list-unstyled footer-links-list">
            {serviceLinks.map(({ label, scrollTo }) => (
              <li key={label}>
                <Link to="/Services" state={{ scrollTo }} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Address */}
        <Col lg={4} md={6}>
          <h6 className="footer-heading">Our Address</h6>
          <address className="footer-address">
            <strong>{companyName}</strong>
            <br />
            Bhopal, Madhya Pradesh - 462023
            <br />
            India
            <br />
            <a href="mailto:support@bhagirathitsolutions.co.in" className="footer-email-link">
              support@bhagirathitsolutions.co.in
            </a>
          </address>
        </Col>
      </Row>

      <hr className="footer-divider" />

      <div className="text-center">
        <small className="footer-copy">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </small>
      </div>
    </Container>
  </footer>
);

export default Footer;