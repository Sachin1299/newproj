import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import "../style/homepage1.css";

const HeroSection = () => (
  <section className="hero-carousel-section">
    <Carousel 
    controls={false}
    indicators={false}
    fade
    interval={8000}
    pause={false}
    touch={false}
    keyboard={false}
    slide>
      <Carousel.Item>
        <div className="hero-slide bg1">
          <div className="hero-overlay" />
          <Container className="home-hero-content text-center">
            <h1 className="home-hero-title">Empowering Your Communication</h1>
            <p className="home-hero-subtitle ">Reliable, scalable, and tailored for your business.</p>
            <div className="home-hero-buttons">
              <Button variant="primary" size="lg" href="#/About">Learn More</Button>
              <Button variant="outline-light" size="lg" href="#/Services">Our Services</Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-slide bg2">
          <div className="hero-overlay" />
          <Container className="home-hero-content text-center">
            <h1 className="home-hero-title">Advanced Call Solutions</h1>
            <p className="home-hero-subtitle ">Seamless connections. Smarter business outcomes.</p>
            <div className="home-hero-buttons">
              <Button variant="primary" size="lg" href="#/About">Explore Features</Button>
              <Button variant="outline-light" size="lg" href="#/Services">View Services</Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default HeroSection;
