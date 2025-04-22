import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
 
const testimonials = [
  {
    text: "SupportSphere transformed the way we communicate. Truly groundbreaking technology!",
    author: "John Doe, CEO, Example Inc.",
  },
  {
    text: "Their agile approach and customer-first mindset made all the difference.",
    author: "Jane Smith, Founder, TechStart",
  },
  {
    text: "Reliable, efficient, and innovative. I highly recommend SupportSphere.",
    author: "Alex Johnson, Director, Innovate LLC",
  },
];

const TestimonialsSection = () => (
  <section className="home-testimonials-section">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="home-section-title">Testimonials</h2>
          <p className="home-section-subtitle">Hear from our satisfied clients.</p>
        </Col>
      </Row>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Container className=".home-testimonial-item text-center">
              <p className="home-testimonial-text">"{testimonial.text}"</p>
              <h5 className="home-testimonial-author">{testimonial.author}</h5>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section>
);

export default TestimonialsSection;
