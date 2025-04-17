import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Homepage.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1 className="display-4">
            Welcome to <span className="fw-bold">SupportSphere</span>
          </h1>
          <p className="lead">
            Revolutionizing Communication Technology with Innovation, Agility, and
            Affordability
          </p>
        </div>
      </header>

      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">Innovative & Cost-Effective</h3>
              <p>
                Backed by Suvian Tech LLP, SupportSphere brings state-of-the-art
                communication solutions at startup-friendly prices.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">Agile & Adaptive</h3>
              <p>
                Our startup DNA lets us pivot quickly, implement feedback fast,
                and deliver exactly what you need.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">Customer-Centric</h3>
              <p>
                We don't just offer products — we solve pain points with
                tailor-made solutions that scale with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">High Productivity</h3>
              <p>
                By streamlining workflows and integrating modern tech, SupportSphere
                helps your team do more with less.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">Flexible & Customizable</h3>
              <p>
                We adapt our solutions to you, not the other way around. No red
                tape. Just rapid, responsive service.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card p-4">
              <h3 className="section-title">Government-Recognized</h3>
              <p>
                We’re a registered startup under the Govt. of India, ensuring
                credibility and access to top-tier support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center bg-light py-3">
        <p>&copy; 2025 SupportSphere - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
