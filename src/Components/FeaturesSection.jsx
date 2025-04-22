import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturesSection = () => (
  <section className="home-features-section">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="home-section-title">Why Choose Us?</h2>
          <p className="home-section-subtitle">Innovation | Agility | Customer-Centric Solutions</p>
        </Col>
      </Row> 
      <Row>
        {[
          { title: "Innovative Technology", text: "Cutting-edge solutions leveraging the latest advancements to drive efficiency." },
          { title: "Agile & Adaptive", text: "Rapid response to market demands ensuring your business stays ahead." },
          { title: "Customer Centric", text: "Solutions designed with you in mind, ensuring personalized service." },
        ].map((feature, idx) => (
          <Col md={4} key={idx}>
            <Card className="home-feature-card">
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default FeaturesSection;
