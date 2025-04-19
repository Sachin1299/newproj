import React from "react";
import { Container, Button } from "react-bootstrap";
import "../style/homepage1.css"
const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-overlay"></div>
    <Container className="hero-content">
      <h1 className="hero-title">Welcome to SupportSphere</h1>
      <p className="hero-subtitle">Innovative communication solutions for a dynamic future.</p>
      <div className="hero-buttons">
        <Button className="hero-buttons"variant="primary" size="lg" href="#/About">Discover More</Button>
        <Button className="hero-buttons"variant="outline-light" size="lg" href="#/Services">Our Services</Button>
      </div>
    </Container>
  </section>
);

export default HeroSection;
