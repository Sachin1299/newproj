import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaComments, FaChartLine, FaHandshake } from "react-icons/fa";
import "../style/about.css";
import supportimg from "../img/who_we_are.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <Container className="about-hero-inner">
          <Row>
            <Col lg={7} className="text-start">
              <h1 className="about-hero-title mb-2">About Bhagirath Solutions</h1>
              <p className="about-hero-subtitle mb-4">
                Outsource Smarter. Operate Better. Grow Faster.
              </p>
              <Link to="/Enquiry" className="about-hero-btn">
                Get in Touch <span>→</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Who We Are Section */}
      <Container className="py-5">
        <Row className="align-items-center mb-5 pb-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title fw-bold mb-3" style={{ color: '#1F293A' }}>Who We Are</h2>
            <p className="section-text text-muted mb-3">
              Bhagirath Solutions is a business outsourcing and technology services company focused on helping organisations manage their day-to-day operations more effectively.
            </p>
            <p className="section-text text-muted mb-3">
              We provide support across IT services, customer service, business administration, back-office operations, virtual assistance, sales support, and digital solutions. Our approach is built around understanding each client's requirements and delivering practical support that fits their existing processes.
            </p>
            <p className="section-text text-muted mb-0">
              We recognise that every business operates differently. That is why we focus on flexible service arrangements, defined responsibilities, consistent communication, and solutions designed around your priorities.
            </p>
          </Col>
          <Col lg={6}>
            <div className="about-image-wrapper text-center">
              <img
                src={supportimg}
                alt="Bhagirath Solutions Team Support"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>

        {/* Mission & Vision Section */}
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-4" style={{ borderLeft: '4px solid #1F293A' }}>
              <Card.Body>
                <h3 className="fw-bold mb-3" style={{ color: '#1F293A' }}>Our Mission</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  To help businesses operate more efficiently by delivering dependable outsourcing, administrative, and technology support that reduces operational pressure and allows teams to focus on growth.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-4" style={{ borderLeft: '4px solid #20998E' }}>
              <Card.Body>
                <h3 className="fw-bold mb-3" style={{ color: '#1F293A' }}>Our Vision</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  To become a trusted outsourcing partner for businesses seeking practical, flexible, and long-term operational support.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Core Values Section */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: '#1F293A' }}>Our Core Values</h2>
            <p className="text-muted">The principles that guide our partnerships and service delivery.</p>
          </div>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <FaShieldAlt size={32} style={{ color: '#20998E' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1F293A' }}>Reliability</h5>
                <p className="small text-muted mb-0">We value consistency, ownership, and completing agreed tasks responsibly.</p>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <FaComments size={32} style={{ color: '#20998E' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1F293A' }}>Clear Communication</h5>
                <p className="small text-muted mb-0">We believe good coordination and timely updates are essential to successful partnerships.</p>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <FaChartLine size={32} style={{ color: '#20998E' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1F293A' }}>Continuous Improvement</h5>
                <p className="small text-muted mb-0">We look for practical ways to improve workflows, service delivery, and productivity.</p>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <FaHandshake size={32} style={{ color: '#20998E' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1F293A' }}>Partnership</h5>
                <p className="small text-muted mb-0">We work to understand your objectives and align our support with your business needs.</p>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Call-to-Action */}
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center p-5 rounded shadow-sm" style={{ backgroundColor: '#F8FAFC' }}>
            <h3 className="fw-bold mb-3" style={{ color: '#1F293A' }}>Ready to Improve Your Operations?</h3>
            <p className="text-muted mb-4">
              Let's discuss how Bhagirath Solutions can support your business with flexible outsourcing and technology services.
            </p>
            <Button as={Link} to="/Enquiry" size="lg" style={{ backgroundColor: '#20998E', borderColor: '#20998E' }}>
              Contact Us Today
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;