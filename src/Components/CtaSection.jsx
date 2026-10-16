import React from "react";
import { Container } from "react-bootstrap";
import "../style/homepage1.css";

const CtaSection = () => (
  <section className="cta-section homepage-section" id="cta">
    <Container>
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to Focus on What Matters Most?
        </h2>
        <p className="cta-text">
          Let us help you spend less time managing routine work and more time
          growing your business. Whether you need support today or want to plan
          for the future, we're here to help you build a stronger, more
          efficient operation.
        </p>
        <div className="cta-buttons">
          <a href="#/Enquiry" className="btn-cta-primary">
            Start a Conversation
            <span>→</span>
          </a>
          <a href="#/Services" className="btn-cta-secondary">
            Explore All Services
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default CtaSection;
