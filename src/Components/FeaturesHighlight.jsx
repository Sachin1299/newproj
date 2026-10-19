import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaSlidersH,
  FaClipboardCheck,
  FaComments,
  FaSeedling,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import "../style/homepage1.css";

const benefits = [
  {
    icon: <FaSlidersH />,
    title: "Flexible Outsourcing Solutions",
    text: "Customised support models designed around your specific operational requirements, business size, and budget — with the ability to adjust as your priorities evolve.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Dedicated Ongoing Support",
    text: "Reliable, consistent assistance for routine tasks and ongoing business activities, so your internal team can focus on high-value strategic initiatives.",
  },
  {
    icon: <FaComments />,
    title: "Clear Communication & Reporting",
    text: "Transparent task coordination, regular progress updates, and detailed performance reporting to keep you informed and in control at all times.",
  },
  {
    icon: <FaSeedling />,
    title: "Productivity & Efficiency",
    text: "A practical, proven approach to improving productivity, reducing overhead costs, and managing workloads intelligently across teams and departments.",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Scalable As You Grow",
    text: "The ability to seamlessly scale your support up or down as your business requirements change — whether you're launching, growing, or restructuring.",
  },
];

const FeaturesHighlight = () => (
  <section className="benefits-section homepage-section" id="benefits">
    <div className="benefits-bg-pattern" />
    <Container style={{ position: "relative", zIndex: 2 }}>
      <Row className="text-center mb-2">
        <Col>
          <p className="section-label">The Bhagirath Advantage</p>
          <h2 className="section-title">What We Bring to Your Business</h2>
          <div className="section-accent-line" />
          <p className="section-subtitle">
            We don't just provide services — we build partnerships that drive
            measurable results, operational resilience, and sustainable growth
            for your business.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {benefits.map((item, idx) => (
          <Col lg={4} md={6} key={idx}>
            <div className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h4 className="benefit-title">{item.title}</h4>
              <p className="benefit-text">{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default FeaturesHighlight;
