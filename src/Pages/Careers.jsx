import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaClipboard,
  FaCheckCircle,
  FaShieldAlt,
  FaComments,
  FaChartLine,
  FaHandshake,
  FaCode,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "../style/career.css";

// Current openings. Edit the details to match the real roles,
// or set this to an empty array [] to hide the whole section.
const openings = [
  {
    id: "java-developer",
    title: "Java Developer",
    type: "Full-time",
    location: "Bhopal, Madhya Pradesh",
    experience: "1–3 years",
    summary:
      "Build and maintain Java-based web applications and integrations that support our clients’ business workflows.",
    responsibilities: [
      "Develop, test, and maintain Java applications and REST APIs.",
      "Work with Spring Boot and relational databases such as MySQL or PostgreSQL.",
      "Fix bugs, support third-party integrations, and keep technical documentation up to date.",
      "Coordinate with the team to deliver tasks on agreed timelines.",
    ],
    requirements: [
      "Solid knowledge of Core Java, object-oriented programming, and collections.",
      "Hands-on experience with Spring or Spring Boot and SQL.",
      "Familiarity with Git and basic testing and debugging practices.",
      "Clear communication and a willingness to learn.",
    ],
  },
  {
    id: "senior-java-developer",
    title: "Senior Java Developer",
    type: "Full-time",
    location: "Bhopal, Madhya Pradesh",
    experience: "3+ years",
    summary:
      "Lead the design and delivery of Java solutions, review code, and guide junior developers on client projects.",
    responsibilities: [
      "Design and build scalable Java and Spring Boot services and integrations.",
      "Review code and mentor junior developers.",
      "Plan work with clients and the team, and estimate tasks.",
      "Troubleshoot production issues and improve performance and reliability.",
    ],
    requirements: [
      "3+ years of professional Java development experience.",
      "Strong knowledge of Spring Boot, REST APIs, SQL, and database design.",
      "Experience with Git, basic CI/CD, and automated testing.",
      "Ability to communicate clearly with clients and team members.",
    ],
  },
];

// Areas taken from the services described on the About page
const areas = [
  "IT Support & Digital Solutions",
  "Customer Service",
  "Business Administration & Back Office",
  "Virtual Assistance",
  "Sales Support & Lead Generation",
];

// Values taken from the About page, so the two pages say the same thing
const values = [
  {
    title: "Reliability",
    text: "We value consistency, ownership, and completing agreed tasks responsibly.",
    icon: FaShieldAlt,
  },
  {
    title: "Clear Communication",
    text: "Good coordination and timely updates are essential to successful partnerships.",
    icon: FaComments,
  },
  {
    title: "Continuous Improvement",
    text: "We look for practical ways to improve workflows, service delivery, and productivity.",
    icon: FaChartLine,
  },
  {
    title: "Partnership",
    text: "We work to understand objectives and align our support with business needs.",
    icon: FaHandshake,
  },
];

const Career = () => {
  const [state, handleSubmit] = useForm("xrbpnwpo");
  const [position, setPosition] = useState("");
  const formRef = useRef(null);

  // "Apply Now" pre-selects the role and scrolls to the form
  const applyFor = (title) => {
    setPosition(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="career-page">
      <Helmet>
        <title>Careers & Openings | Bhagirath IT Solutions</title>
        <meta
          name="description"
          content="Explore career opportunities and job openings at Bhagirath IT Solutions. Join our growing team in software development, IT support, and business operations."
        />
        <link rel="canonical" href="https://bhagirathitsolutions.co.in/#/Careers" />
      </Helmet>

      {/* Hero banner */}
      <section className="career-hero">
        <Container className="career-hero-inner">
          <span className="career-badge">
            <span className="career-badge-dot" />
            Careers
          </span>
          <h1 className="career-hero-title">Join Our Growing Team</h1>
          <p className="career-hero-subtitle">
            Be part of a dynamic team dedicated to delivering dependable outsourcing and
            technology services that help organisations operate smarter and grow faster.
          </p>
        </Container>
      </section>

      <Container className="career-body">
        {/* Current openings */}
        {openings.length > 0 && (
          <div className="mb-5">
            <div className="text-center mb-4">
              <h3 className="fw-bold career-card-title">Current Openings</h3>
              <p className="text-muted small">
                Apply for a role below, or send a general application using the form.
              </p>
            </div>

            <Row className="g-4">
              {openings.map((job) => (
                <Col lg={6} key={job.id}>
                  <Card className="career-job-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div className="career-job-icon">
                          <FaCode size={22} />
                        </div>
                        <div>
                          <h4 className="career-job-title">{job.title}</h4>
                          <div className="career-job-meta">
                            <span><FaClock size={11} /> {job.type}</span>
                            <span><FaMapMarkerAlt size={11} /> {job.location}</span>
                            <span><FaBriefcase size={11} /> {job.experience}</span>
                          </div>
                        </div>
                      </div>

                      <p className="career-job-summary">{job.summary}</p>

                      <h6 className="career-job-subtitle">Key Responsibilities</h6>
                      <ul className="career-job-list">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <h6 className="career-job-subtitle">Requirements</h6>
                      <ul className="career-job-list">
                        {job.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="career-apply-btn"
                        onClick={() => applyFor(job.title)}
                      >
                        Apply Now <FaArrowRight size={13} />
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* General info + Application form */}
        <Row className="g-4 g-lg-5 mb-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="career-notice bg-white rounded-4 shadow-sm p-4 mb-4">
                <div className="career-notice-icon mb-3">
                  <FaClipboard size={22} />
                </div>
                <h3 className="fw-bold mb-2 career-card-title">Don’t See a Fit?</h3>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                  We are always keen to hear from capable people. Send us your details
                  and we’ll keep your profile on file for future roles.
                </p>
              </div>

              <div className="career-areas bg-white rounded-4 shadow-sm p-4">
                <h5 className="fw-bold mb-3 career-card-title">Areas We Work In</h5>
                <ul className="career-area-list">
                  {areas.map((area) => (
                    <li key={area}>
                      <FaCheckCircle className="career-area-check" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <div ref={formRef} className="career-form-anchor">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-sm p-4 p-md-5 career-card-main">
                  <h3 className="fw-bold mb-4 career-card-title">Apply Now</h3>
                  {state.succeeded ? (
                    <div className="alert alert-success text-center py-4 rounded-3">
                      <h5 className="fw-bold mb-1">🎉 Thank you for applying!</h5>
                      <p className="mb-0 small">
                        We have received your details and will get in touch if your profile matches our requirements.
                      </p>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit} className="career-form">
                      {/* Tells you which page the submission came from (Enquiry uses the same Formspree form) */}
                      <input type="hidden" name="form_type" value="Career application" />
                      <input type="hidden" name="_subject" value="New career application – Bhagirath IT Solutions" />

                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="small fw-semibold">Full Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your full name" required className="py-2" />
                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-danger small mt-1" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="small fw-semibold">Email Address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="you@example.com" required className="py-2" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-danger small mt-1" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="small fw-semibold">Position / Area of Interest</Form.Label>
                            <Form.Select
                              name="position"
                              value={position}
                              onChange={(e) => setPosition(e.target.value)}
                              className="py-2"
                            >
                              <option value="">General application (no preference)</option>
                              {openings.length > 0 && (
                                <optgroup label="Current openings">
                                  {openings.map((job) => (
                                    <option key={job.id} value={job.title}>
                                      {job.title}
                                    </option>
                                  ))}
                                </optgroup>
                              )}
                              <optgroup label="Area of interest">
                                {areas.map((area) => (
                                  <option key={area} value={area}>
                                    {area}
                                  </option>
                                ))}
                              </optgroup>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="small fw-semibold">Resume / Portfolio Link</Form.Label>
                            <Form.Control type="url" name="resume_link" placeholder="https:// (optional)" className="py-2" />
                            <ValidationError prefix="Link" field="resume_link" errors={state.errors} className="text-danger small mt-1" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label className="small fw-semibold">Tell us about your skills & background</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Share your experience, preferred role, and anything else we should know..."
                          required
                          className="py-2"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-danger small mt-1" />
                      </Form.Group>

                      <Button type="submit" className="w-100 py-3 fw-bold career-submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting Application..." : "Submit Application"}
                      </Button>
                    </Form>
                  )}
                </Card>
              </motion.div>
            </div>
          </Col>
        </Row>

        {/* What we value */}
        <div className="text-center mb-4">
          <h3 className="fw-bold career-card-title">What We Value</h3>
          <p className="text-muted small">The principles behind how we work.</p>
        </div>
        <Row className="g-4">
          {values.map(({ title, text, icon: Icon }) => (
            <Col md={3} sm={6} key={title}>
              <Card className="h-100 border-0 shadow-sm p-4 rounded-4 career-culture-card">
                <Card.Body className="p-0">
                  <div className="career-value-icon mb-3">
                    <Icon size={24} />
                  </div>
                  <h4 className="fw-bold mb-2 career-card-title" style={{ fontSize: "1.1rem" }}>{title}</h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>{text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Career;