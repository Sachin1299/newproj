import React from "react";
import "../style/homepage1.css";

const HeroSection = () => (
  <section className="hero-section homepage-section" id="hero">
    {/* Animated background elements */}
    <div className="hero-bg-grid" />
    <div className="hero-orb hero-orb--1" />
    <div className="hero-orb hero-orb--2" />
    <div className="hero-orb hero-orb--3" />

    <div className="hero-content">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Trusted Business Outsourcing Partner
      </div>

      <h1 className="hero-title">
        Outsource <span className="highlight">Smarter.</span>{" "}
        Operate <span className="highlight">Better.</span>{" "}
        Grow <span className="highlight">Faster.</span>
      </h1>

      <p className="hero-subtitle">
        At Bhagirath Solution, we help businesses simplify operations, improve
        productivity, and build capacity through reliable outsourcing and
        technology services — from IT support and customer service to business
        administration, virtual assistance, and lead generation.
      </p>

      <div className="hero-buttons">
        <a href="#/Enquiry" className="btn-hero-primary">
          Get Started Today
          <span>→</span>
        </a>
        <a href="#/Services" className="btn-hero-secondary">
          Explore Our Services
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-number">50+</span>
          <span className="hero-stat-label">Clients Served</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">98%</span>
          <span className="hero-stat-label">Client Satisfaction</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">24/7</span>
          <span className="hero-stat-label">Support Available</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">5+</span>
          <span className="hero-stat-label">Years Experience</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
