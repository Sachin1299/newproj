import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="footer-section">
    <Container>
      <Row>
        <Col md={6} className="footer-about">
          <h5>SupportSphere</h5>
          <p>Innovative communication solutions for a dynamic future.</p>
        </Col>
        <Col md={6} className="footer-links text-md-end">
          <a href="/about">About Us</a> |{" "}
          <a href="/services">Services</a> |{" "}
          <a href="/contact">Contact</a>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          &copy; {new Date().getFullYear()} SupportSphere. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
