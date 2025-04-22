import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGlobe, FaHeadset, FaUsers, FaShippingFast } from "react-icons/fa";
import "../style/homepage1.css"; // Assuming your CSS is here

const FeaturesHighlight = () => {
  return (
    <section className="home-features-highlight-section">
      <Container>
        <h2 className="home-highlight-title">Get Your Free Consulting</h2>
        <div className="home-highlight-underline"></div>
        <p className="home-highlight-subtitle">
          We have the best experts to elevate your business to the next level. Try us and you will see!
        </p>
        <Row className="home-icon-features mt-5 text-center">
          <Col md={3} sm={6} className="home-feature-item">
            <div className="home-feature-icon-wrapper">
              <FaGlobe className="home-feature-icon" />
            </div>
            <h5 className="fw-bold">World Wide Customers</h5>
          </Col>
          <Col md={3} sm={6} className="home-feature-item">
            <div className="home-feature-icon-wrapper position-relative" >
              <FaHeadset className="home-feature-icon" />
             
            </div>
            <h5 className="fw-bold">24/7 Support</h5>
          </Col>
          <Col md={3} sm={6} className="home-feature-item">
            <div className="home-feature-icon-wrapper">
              <FaUsers className="home-feature-icon" />
            </div>
            <h5 className="fw-bold">Awesome Team</h5>
          </Col>
          <Col md={3} sm={6} className="home-feature-item">
            <div className="home-feature-icon-wrapper">
              <FaShippingFast className="home-feature-icon" />
            </div>
            <h5 className="fw-bold">Deliveries & Collection</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesHighlight;
