import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLaptopCode,
  FaClipboardList,
  FaHeadset,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import "../style/homepage1.css";

const services = [
  {
    icon: <FaLaptopCode />,
    color: "teal",
    title: "Technology Support",
    text: "Practical, responsive IT assistance designed to keep your business systems, applications, and digital infrastructure running smoothly around the clock. We handle everything from helpdesk queries and system monitoring to software configuration and troubleshooting.",
    features: [
      "IT Helpdesk & Technical Support",
      "System Monitoring & Maintenance",
      "Software Configuration & Updates",
      "Infrastructure Management",
    ],
  },
  {
    icon: <FaClipboardList />,
    color: "blue",
    title: "Business Administration",
    text: "Dependable, detail-oriented back-office support for the everyday tasks and workflows that keep your business running. From data entry and document management to scheduling and reporting, we take the admin burden off your shoulders.",
    features: [
      "Data Entry & Management",
      "Document Processing & Filing",
      "Scheduling & Calendar Management",
      "Reporting & Analytics Support",
    ],
  },
  {
    icon: <FaHeadset />,
    color: "amber",
    title: "Customer & Helpdesk Support",
    text: "Professional, empathetic assistance for customer enquiries, service requests, complaint resolution, and follow-ups. Our trained support agents represent your brand with care, ensuring every interaction builds trust and satisfaction.",
    features: [
      "Multi-Channel Customer Support",
      "Service Request Management",
      "Complaint Resolution & Escalation",
      "Follow-up & Satisfaction Tracking",
    ],
  },
  {
    icon: <FaChartLine />,
    color: "purple",
    title: "Sales & Lead Generation",
    text: "Strengthen and accelerate your sales pipeline with dedicated research, prospect identification, lead qualification, and strategic follow-up activities. We help your sales team focus on closing deals while we build and nurture the pipeline.",
    features: [
      "Prospect Research & Identification",
      "Lead Qualification & Scoring",
      "Outreach & Follow-up Campaigns",
      "CRM Data Management",
    ],
  },
];

const ServicesSection = () => (
  <section className="services-section homepage-section" id="services">
    <Container>
      <Row className="text-center mb-2">
        <Col>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Core Services</h2>
          <div className="section-accent-line" />
          <p className="section-subtitle">
            We provide flexible, end-to-end outsourcing solutions that help your
            business focus on what matters most — growth, innovation, and
            customer value.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {services.map((svc, idx) => (
          <Col lg={3} md={6} key={idx}>
            <div className={`service-card ${svc.color}`}>
              <div className={`service-icon-wrap ${svc.color}`}>
                {svc.icon}
              </div>
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-text">{svc.text}</p>
              <ul className="service-card-features">
                {svc.features.map((f, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default ServicesSection;
