import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import wilhelmImage from "../img/wilhelm-gunkel-igyzxP_eiDI-unsplash.jpg";
 
const ServicesSection = () => (
  <section className="home-services-section">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="home-section-title">Our Services</h2>
          <p className="home-section-subtitle">Explore our suite of innovative communication solutions.</p>
        </Col>
      </Row>
      <Row>
        {[1, 2, 3, 4].map((service, index) => (
          <Col md={3} sm={6} key={index}>
            <Card className="home-service-card">
              <Card.Img variant="top" src={wilhelmImage} />
              <Card.Body>
                <Card.Title>Service {index + 1}</Card.Title>
                <Card.Text>
                  Brief description of service {index + 1}. Innovative, efficient, and tailored to your needs.
                </Card.Text>
                <Button variant="primary" size="sm" href="/services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default ServicesSection;
