import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGlobe, FaHeadset, FaUsers, FaShippingFast } from "react-icons/fa";
import "../style/homepage1.css"; // Assuming your CSS is here

const FeaturesHighlight = () => {
  return (
    <section className="features-highlight-section">
      <Container>
        <h2 className="highlight-title">Get Your Free Consulting</h2>
        <div className="highlight-underline"></div>
        <p className="highlight-subtitle">
          We have the best experts to elevate your business to the next level. Try us and you will see!
        </p>
        <Row className="icon-features mt-5 text-center">
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon-wrapper">
              <FaGlobe className="feature-icon" />
            </div>
            <h5 className="fw-bold">World Wide Customers</h5>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon-wrapper position-relative">
              <FaHeadset className="feature-icon" />
              <span className="badge-text">24</span>
            </div>
            <h5 className="fw-bold">24/7 Support</h5>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon-wrapper">
              <FaUsers className="feature-icon" />
            </div>
            <h5 className="fw-bold">Awesome Team</h5>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon-wrapper">
              <FaShippingFast className="feature-icon" />
            </div>
            <h5 className="fw-bold">Deliveries & Collection</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesHighlight;
