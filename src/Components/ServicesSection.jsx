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
          <Col md={3} sm={6}>
            <Card className="home-service-card">
              <Card.Img variant="top" src={wilhelmImage} />
              <Card.Body>
                <Card.Title>Concurrent Call Handling</Card.Title>
                <Card.Text>
                Concurrent Call Handling is one of our key offerings that helps businesses enhance productivity, optimize communication and deliver top-notch customer support.
                </Card.Text>
                <Button variant="primary" size="sm" href="#/Services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="home-service-card">
              <Card.Img variant="top" src={wilhelmImage} />
              <Card.Body>
                <Card.Title>Intercom & Call Transfer</Card.Title>
                <Card.Text>
                Intercom & Call Transfer is one of our key offerings that helps businesses enhance productivity, optimize communication and deliver top-notch customer support.
                </Card.Text>
                <Button variant="primary" size="sm" href="#/Services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="home-service-card">
              <Card.Img variant="top" src={wilhelmImage} />
              <Card.Body>
                <Card.Title>Call Center Solutions</Card.Title>
                <Card.Text>
                Call Center Solutions is one of our key offerings that helps businesses enhance productivity, optimize communication and deliver top-notch customer support.
                </Card.Text>
                <Button variant="primary" size="sm" href="#/Services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="home-service-card">
              <Card.Img variant="top" src={wilhelmImage} />
              <Card.Body>
                <Card.Title>Voicemail & Call History</Card.Title>
                <Card.Text>
                Voicemail & Call History is one of our key offerings that helps businesses enhance productivity, optimize communication and deliver top-notch customer support.
                </Card.Text>
                <Button variant="primary" size="sm" href="#/Services">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  </section>
);

export default ServicesSection;
