import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaCogs,
  FaChartBar,
  FaHandshake,
} from "react-icons/fa";
import "../style/homepage1.css";

const highlights = [
  {
    icon: <FaUsers />,
    color: "teal",
    title: "People & Talent",
    text: "Access skilled professionals who integrate seamlessly with your existing workforce and processes.",
  },
  {
    icon: <FaCogs />,
    color: "blue",
    title: "Technology & Tools",
    text: "Leverage modern systems, platforms, and automation tools to streamline workflows and reduce manual effort.",
  },
  {
    icon: <FaChartBar />,
    color: "amber",
    title: "Process Management",
    text: "Implement well-defined processes, quality benchmarks, and continuous improvement frameworks.",
  },
  {
    icon: <FaHandshake />,
    color: "purple",
    title: "Strategic Partnership",
    text: "We don't just execute tasks — we understand your goals and align our support to help you achieve them.",
  },
];

const FeaturesSection = () => (
  <section className="partner-section homepage-section" id="partner">
    <Container>
      <Row className="align-items-center g-5">
        {/* Left: Text Content */}
        <Col lg={6}>
          <p className="section-label">Why Bhagirath Solution</p>
          <h2 className="section-title">
            Your Trusted Business Support Partner
          </h2>
          <div className="section-accent-line left" />

          <p className="section-text">
            Running a successful business requires the right balance of time,
            people, technology, and well-managed processes. Bhagirath Solution
            brings these essential elements together through practical,
            results-driven outsourcing solutions that are carefully tailored to
            your unique business needs and growth objectives.
          </p>
          <p className="section-text">
            Whether you need support with daily administration, technical
            operations, customer enquiries, sales development activities, or
            complex digital projects, our dedicated team works as a natural
            extension of your organisation — helping you operate more
            efficiently, respond faster, and maintain consistency across every
            aspect of your business.
          </p>
          <p className="section-text">
            We pride ourselves on building long-term relationships with our
            clients, understanding that every business is different and
            deserves a support model that truly fits. From startups looking
            to scale quickly to established enterprises seeking operational
            optimisation, Bhagirath Solution is the partner you can count on.
          </p>
        </Col>

        {/* Right: Highlight Cards */}
        <Col lg={6}>
          <div className="partner-highlights">
            {highlights.map((item, idx) => (
              <div className="partner-highlight-card" key={idx}>
                <div className={`partner-highlight-icon ${item.color}`}>
                  {item.icon}
                </div>
                <div className="partner-highlight-title">{item.title}</div>
                <p className="partner-highlight-text">{item.text}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeaturesSection;
