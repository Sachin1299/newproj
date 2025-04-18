// import React, { useEffect } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const HomePage = () => {
//   // Inject custom CSS and keyframes for animations
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       /* Global Styles */
//       body {
//         margin: 0;
//         font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//       }
      
//       /* HERO SECTION */
//       .hero-section {
//         position: relative;
//         background: url('https://source.unsplash.com/1600x900/?technology,office') no-repeat center center/cover;
//         height: 100vh;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//       }
      
//       .hero-overlay {
//         position: absolute;
//         top: 0; left: 0; right: 0; bottom: 0;
//         background-color: rgba(0, 0, 0, 0.5);
//         z-index: 1;
//       }
      
//       .hero-content {
//         position: relative;
//         z-index: 2;
//         text-align: center;
//         color: #fff;
//         padding: 0 1rem;
//       }
      
//       .hero-title {
//         font-size: 4rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//         animation: slideIn 1.2s ease-out forwards;
//         opacity: 0;
//       }
      
//       .hero-subtitle {
//         font-size: 1.8rem;
//         margin-bottom: 2rem;
//         animation: fadeIn 1.8s ease-out forwards;
//         opacity: 0;
//       }
      
//       .hero-btn {
//         animation: bounce 2s infinite;
//       }
      
//       /* FEATURES SECTION */
//       .features-section {
//         padding: 4rem 0;
//         background: #f9f9f9;
//       }
      
//       .feature-card {
//         border: none;
//         border-radius: 8px;
//         transition: transform 0.3s ease, box-shadow 0.3s ease;
//         background: #fff;
//         margin-bottom: 2rem;
//         animation: fadeUp 1.2s ease forwards;
//         opacity: 0;
//       }
      
//       .feature-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
//       }
      
//       /* FOOTER SECTION */
//       .footer-section {
//         background: #343a40;
//         color: #fff;
//         padding: 1.5rem 0;
//       }

//       /* ANIMATION KEYFRAMES */
//       @keyframes slideIn {
//         0% { opacity: 0; transform: translateY(-50px); }
//         100% { opacity: 1; transform: translateY(0); }
//       }
      
//       @keyframes fadeIn {
//         0% { opacity: 0; }
//         100% { opacity: 1; }
//       }
      
//       @keyframes bounce {
//         0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//         40% { transform: translateY(-10px); }
//         60% { transform: translateY(-5px); }
//       }
      
//       @keyframes fadeUp {
//         0% { opacity: 0; transform: translateY(20px); }
//         100% { opacity: 1; transform: translateY(0); }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="hero-overlay"></div>
//         <Container className="hero-content">
//           <h1 className="hero-title">Welcome to SupportSphere</h1>
//           <p className="hero-subtitle">
//             Innovative communication solutions for a dynamic future.
//           </p>
//           <Button variant="primary" size="lg" className="hero-btn" href="/about">
//             Discover More
//           </Button>
//         </Container>
//       </section>

//       {/* FEATURES (WHY CHOOSE US?) SECTION */}
//       <section className="features-section">
//         <Container>
//           <Row className="text-center mb-5">
//             <Col>
//               <h2>Why Choose Us?</h2>
//               <p>
//                 We provide agile, innovative, and customer-centric communication solutions that empower your business.
//               </p>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <Card className="feature-card">
//                 <Card.Body>
//                   <Card.Title>Innovative Technology</Card.Title>
//                   <Card.Text>
//                     Cutting-edge solutions leveraging the latest advancements to drive efficiency.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="feature-card">
//                 <Card.Body>
//                   <Card.Title>Agile & Adaptive</Card.Title>
//                   <Card.Text>
//                     Rapid response to market demands ensuring your business stays ahead.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="feature-card">
//                 <Card.Body>
//                   <Card.Title>Customer First</Card.Title>
//                   <Card.Text>
//                     Tailored solutions centered around exceptional service and support.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* FOOTER SECTION */}
//       <footer className="footer-section">
//         <Container>
//           <Row>
//             <Col className="text-center">
//               &copy; {new Date().getFullYear()} SupportSphere. All Rights Reserved.
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </>
//   );
// };

// export default HomePage;
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
} from "react-bootstrap";
import "../style/homepage1.css"; // Import the custom CSS file
import wilhelmImage from "../img/wilhelm-gunkel-igyzxP_eiDI-unsplash.jpg";
const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="hero-title">Welcome to SupportSphere</h1>
          <p className="hero-subtitle">
            Innovative communication solutions for a dynamic future.
          </p>
          <div className="hero-buttons">
            <Button className="hero-buttons" variant="primary" size="lg" href="#/About">
              Discover More
            </Button>
            <Button className="hero-buttons" variant="outline-light" size="lg" href="#/Services">
              Our Services
            </Button>
          </div>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="section-subtitle">
                Innovation | Agility | Customer-Centric Solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Innovative Technology</Card.Title>
                  <Card.Text>
                    Cutting-edge solutions leveraging the latest advancements to
                    drive efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Agile & Adaptive</Card.Title>
                  <Card.Text>
                    Rapid response to market demands ensuring your business stays
                    ahead.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Customer Centric</Card.Title>
                  <Card.Text>
                    Solutions designed with you in mind, ensuring personalized
                    service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Explore our suite of innovative communication solutions.
              </p>
            </Col>
          </Row>
          <Row>
            {[1, 2, 3, 4].map((service, index) => (
              <Col md={3} sm={6} key={index}>
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src={wilhelmImage}
                  />
                  <Card.Body>
                    <Card.Title>Service {index + 1}</Card.Title>
                    <Card.Text>
                      Brief description of service {index + 1}. Innovative, efficient,
                      and tailored to your needs.
                    </Card.Text>
                    <Button variant="primary" size="sm" href="/services">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Testimonials</h2>
              <p className="section-subtitle">
                Hear from our satisfied clients.
              </p>
            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <Container className="testimonial-item text-center">
                <p className="testimonial-text">
                  "SupportSphere transformed the way we communicate. Truly groundbreaking
                  technology!"
                </p>
                <h5 className="testimonial-author">
                  John Doe, CEO, Example Inc.
                </h5>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className="testimonial-item text-center">
                <p className="testimonial-text">
                  "Their agile approach and customer-first mindset made all the
                  difference."
                </p>
                <h5 className="testimonial-author">
                  Jane Smith, Founder, TechStart
                </h5>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className="testimonial-item text-center">
                <p className="testimonial-text">
                  "Reliable, efficient, and innovative. I highly recommend SupportSphere."
                </p>
                <h5 className="testimonial-author">
                  Alex Johnson, Director, Innovate LLC
                </h5>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <Container>
          <Row>
            <Col md={6} className="footer-about">
              <h5>SupportSphere</h5>
              <p>Innovative communication solutions for a dynamic future.</p>
            </Col>
            <Col md={6} className="footer-links text-md-end">
              <a href="/about">About Us</a> |{" "}
              <a href="/services">Services</a> |{" "}
              <a href="/contact">Contact</a>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              &copy; {new Date().getFullYear()} SupportSphere. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
