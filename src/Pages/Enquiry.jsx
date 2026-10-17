import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "../style/enquiry.css";
import EnquiryImg from "../img/FocusedOffice.png";

// Same nine services as the Services page, plus a general option
const serviceOptions = [
  "IT Support and Infrastructure Management",
  "Customer Service and Helpdesk",
  "Business Administration Services",
  "Business Process Outsourcing (BPO)",
  "Virtual Assistant Services",
  "Software Development and Web Solutions",
  "Sales Support and Lead Generation",
  "Digital Marketing Support",
  "Dedicated Remote Teams and Staff Outsourcing",
  "General Enquiry",
];

const faqs = [
  {
    q: "What services does Bhagirath Solutions provide?",
    a: "We offer IT support, customer service, business administration, BPO, virtual assistance, software and web solutions, sales support, digital marketing assistance, and dedicated remote staffing.",
  },
  {
    q: "Can I outsource only one specific task or service?",
    a: "Yes. The scope can be discussed around an individual task, a defined business function, or a broader ongoing support requirement.",
  },
  {
    q: "Can services be tailored to my business processes?",
    a: "We can discuss your existing workflows, tools, reporting needs, and responsibilities to determine a suitable service arrangement.",
  },
  {
    q: "Can you provide ongoing remote support?",
    a: "Remote support arrangements can be discussed based on the service required, agreed working hours, communication processes, and business needs.",
  },
  {
    q: "How do we get started?",
    a: "Contact us with a brief description of your requirements. We can then discuss the scope of work, priorities, expected outcomes, and suitable next steps.",
  },
];

const contactItems = [
  { icon: FaPhoneAlt, title: "Phone", text: "+91 (Business Support)" },
  { icon: FaClock, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM" },
  { icon: FaMapMarkerAlt, title: "Office Address", text: "Bhopal, Madhya Pradesh - 462023, India" },
  { icon: FaEnvelope, title: "Email", text: "support@bhagirathitsolutions.co.in", breakText: true },
];

const socialLinks = [
  { icon: FaFacebook, href: "#facebook", label: "Facebook" },
  { icon: FaTwitter, href: "#twitter", label: "Twitter" },
  { icon: FaLinkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: FaInstagram, href: "#instagram", label: "Instagram" },
];

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbpnwpo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Error submitting form!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="enquiry-page">
      {/* Hero banner */}
      <section className="enquiry-hero">
        <Container className="enquiry-hero-inner">
          <span className="enquiry-badge">
            <span className="enquiry-badge-dot" />
            Contact Us
          </span>
          <h1 className="enquiry-hero-title">Let’s Discuss How We Can Support Your Business</h1>
          <p className="enquiry-hero-subtitle">
            Looking to improve your business operations, reduce administrative workloads, strengthen IT support, or build a remote team? Bhagirath Solutions is ready to discuss your requirements and explore a suitable outsourcing arrangement.
          </p>
        </Container>
      </section>

      <Container className="enquiry-body">
        {/* Image + Form (same height, top-aligned) */}
        <Row className="g-4 g-lg-5 mb-5">
          <Col lg={5} className="d-flex">
            <motion.div
              className="enquiry-img-wrap w-100"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={EnquiryImg}
                alt="Bhagirath Solutions Support Team"
                className="enquiry-img"
              />
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-sm p-4 p-md-5 enquiry-card-main">
                <h3 className="fw-bold mb-2 enquiry-card-title">Enquiry Form</h3>
                <p className="small text-muted mb-4">
                  Tell us a little about your business and the support you need. We will use this information to understand your requirements and discuss the next steps.
                </p>

                {isSubmitted ? (
                  <div className="alert alert-success text-center py-4 rounded-3">
                    <h5 className="fw-bold mb-2">🎉 Thank you for contacting Bhagirath Solution.</h5>
                    <p className="mb-0 small">
                      We have received your enquiry and will respond using the contact details provided.
                    </p>
                  </div>
                ) : (
                  <Form onSubmit={handleFormSubmit} className="enquiry-form">
                    {/* Tells you which page the submission came from (Career uses the same Formspree form) */}
                    <input type="hidden" name="form_type" value="Website enquiry" />
                    <input type="hidden" name="_subject" value="New website enquiry – Bhagirath IT Solutions" />

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-semibold">Full Name *</Form.Label>
                          <Form.Control type="text" name="name" placeholder="John Doe" required className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-semibold">Company Name *</Form.Label>
                          <Form.Control type="text" name="company_name" placeholder="Your Business Ltd." required className="py-2" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-semibold">Business Email *</Form.Label>
                          <Form.Control type="email" name="email" placeholder="john@company.com" required className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-semibold">Contact Number *</Form.Label>
                          <Form.Control type="tel" name="phone" placeholder="+91 98765 43210" required className="py-2" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold">Service Required *</Form.Label>
                      <Form.Select name="service_required" required defaultValue="" className="py-2">
                        <option value="">Select a service...</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-semibold">Brief Description of Your Requirements *</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your operational needs, timeline, or current challenges..."
                        required
                        className="py-2"
                      />
                    </Form.Group>

                    <Button type="submit" className="w-100 py-3 fw-bold enquiry-submit" disabled={isLoading}>
                      {isLoading ? "Submitting Enquiry..." : "Submit Enquiry"}
                    </Button>
                  </Form>
                )}
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* FAQ */}
        <div className="enquiry-faq mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold enquiry-card-title">Frequently Asked Questions</h3>
          </div>
          <Row className="justify-content-center">
            <Col lg={9}>
              <Accordion defaultActiveKey="0">
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={String(index)} key={faq.q}>
                    <Accordion.Header>{faq.q}</Accordion.Header>
                    <Accordion.Body>{faq.a}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </div>

        {/* Contact Details Grid */}
        <Row className="g-4 text-center">
          {contactItems.map(({ icon: Icon, title, text, breakText }) => (
            <Col md={3} sm={6} key={title}>
              <div className="contact-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="contact-icon mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                  <Icon size={20} />
                </div>
                <h6 className="fw-bold mb-1 contact-card-title">{title}</h6>
                <p className={`small text-muted mb-0${breakText ? " text-break" : ""}`}>{text}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Social Media Links */}
        <Row className="text-center mt-5">
          <Col>
            <div className="social-icons d-flex justify-content-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-icon-link rounded-circle d-flex align-items-center justify-content-center"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enquiry;