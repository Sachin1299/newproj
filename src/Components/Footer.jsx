import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style/footer.css'

const Footer = () => (
  <footer className="footer-section bg-dark text-light pt-5 pb-3">
    <Container>
      <Row className="mb-4">
        <Col md={4} className="mb-4 mb-md-0">
          <h5 className="fw-bold text-uppercase">BHAGIRATH SOLUTION</h5>
          <p>Outsource Smarter. Operate Better. Grow Faster.</p>
        </Col>

        <Col md={4} className="mb-4 mb-md-0">
          <h6 className="fw-semibold text-uppercase mb-2">Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#/" className="footer-link">Home</a></li>
            <li><a href="#/About" className="footer-link">About Us</a></li>
            <li><a href="#/Services" className="footer-link">Services</a></li>
            <li><a href="#/Enquiry" className="footer-link">Enquiry</a></li>
          </ul>
        </Col>

        <Col md={4}>
          <h6 className="fw-semibold text-uppercase mb-2">Our Address</h6>
          <address className="mb-0">
            BHAGIRATH SOLUTION<br />
            Bhopal, Madhya Pradesh - 462023<br />
            India<br />
            <a href="mailto:support@bhagirathitsolutions.co.in" className="footer-link">support@bhagirathitsolutions.co.in</a>
          </address>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <small>&copy; {new Date().getFullYear()} BHAGIRATH SOLUTION. All Rights Reserved.</small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
