import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../img/hero-tech-support.png";
import "../style/homepage1.css";

const HeroSection = () => (
  <section className="hero-section homepage-section" id="hero">
    {/* Background layers */}
    <div className="hero-bg-grid" />
    <div className="hero-orb hero-orb--1" />
    <div className="hero-orb hero-orb--2" />
    <div className="hero-orb hero-orb--3" />

    {/* Image that blends into the background */}
    <div className="hero-visual">
      <img
        src={heroImg}
        alt="Bhagirath IT Solutions Dashboard & Support"
        className="hero-tech-img"
      />
    </div>

    <Container fluid className="px-lg-5" style={{ position: "relative", zIndex: 2 }}>
      <Row className="align-items-center">
        <Col lg={6} className="text-start ps-lg-4">
          <div className="hero-badge mb-3">
            <span className="hero-badge-dot" />
            Trusted Business Outsourcing Partner
          </div>

          <h1 className="hero-title mb-3">
            Outsource <span className="highlight">Smarter.</span>{" "}
            Operate <span className="highlight">Better.</span>{" "}
            Grow <span className="highlight">Faster.</span>
          </h1>

          <p className="hero-subtitle mb-4">
            At Bhagirath Solutions, we help businesses simplify operations, improve
            productivity, and build capacity through reliable outsourcing and
            technology services — from IT support and customer service to business
            administration, virtual assistance, and lead generation.
          </p>

          <div className="hero-buttons">
            <a href="#/Enquiry" className="btn-hero-primary">
              Get Started Today <span>→</span>
            </a>
            <a href="#/Services" className="btn-hero-secondary">
              Explore Our Services
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;