import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../style/about.css";
// import supportimg from "../img/Customer Service and Web Development팀.png"
import supportimg from "../img/women-talking-over-phone.png"
const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <Container>
            <Row className="justify-content-center text-center text-white">
              <Col md={8}>
                <h1 className="hero-title">Welcome to Suvian Tech LLP</h1>
                <p className="hero-subtitle">
                  Pioneering communication technology with innovative and tailored solutions.
                </p>
                <Button variant="light" size="lg" className="mt-3">
                  Learn More
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        {/* Company Info */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-text">
              At Suvian Tech LLP, we revolutionize the way businesses communicate by
              offering cutting-edge and cost-efficient solutions.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={supportimg}
              alt="Customer Support"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>

        {/* Features */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="feature-card h-100 text-center">
              <Card.Body>
                <Card.Title>🚀 Innovation at Competitive Costs</Card.Title>
                <Card.Text>
                  Startups like Suvian Tech LLP thrive on innovation. By adopting modern and disruptive technologies, we deliver high-performing and cost-effective communication solutions. SupportSphere, powered by Suvian's startup energy, offers advanced communication tools without breaking the bank.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100 text-center">
              <Card.Body>
                <Card.Title>⚡ Agility & Adaptability</Card.Title>
                <Card.Text>
                  Our startup DNA allows us to stay ahead of market shifts and adapt quickly to your changing needs. Whether it's upgrading technology or customizing features, SupportSphere responds with speed and flexibility to keep you ahead.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100 text-center">
              <Card.Body>
                <Card.Title>💡 Customer-Centric Approach</Card.Title>
                <Card.Text>
                  We don’t just build software — we solve real problems. Our customer-first attitude ensures that every SupportSphere solution is tailored to enhance user experience, simplify workflows, and meet actual business needs affordably.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100 text-center">
              <Card.Body>
                <Card.Title>📈 Productivity through Innovation</Card.Title>
                <Card.Text>
                  We’re constantly innovating to help your teams do more in less time. Our tools streamline communication, automate tasks, and empower your workforce to focus on what matters most — delivering value.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100 text-center">
              <Card.Body>
                <Card.Title>🔧 Flexible & Tailor-Made Solutions</Card.Title>
                <Card.Text>
                  Unlike larger corporations, our flexibility lets us build truly custom solutions. Whether you need specific workflows or integrations, SupportSphere molds its services to fit your unique business environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call-to-Action */}
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <h3>Ready to Revolutionize Communication?</h3>
            <p className="lead text-muted">
              Join us on a journey of innovation and technology.
            </p>
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
