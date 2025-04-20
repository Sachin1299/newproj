import React from 'react';
import '../style/Services.css'; // Make sure this CSS file exists
import serviceimg from '../img/service.png';
const services = [
    "Concurrent Call Handling",
    "Lead Management",
    "Call Center Solutions",
    "Cloud Telephony & Virtual Numbers",
    "Dynamic Broadcasting",
    "Voicemail & Call History",
    "Analytics & Performance Reports",
    "Call Recording & Quality Control",
    "Intercom & Call Transfer",
    "Automatic Call Distribution",
    "CRM Integration",
    "IVR Customization",
    "Automatic Dialer"
];

const Services = () => {
    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="hero-content">
                    <h1>Powerful Business Communication Solutions</h1>
                    <p>
                        Explore our comprehensive suite of call and CRM services tailored to boost productivity, streamline customer engagement, and enhance business performance.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={serviceimg} alt="Communication Solutions" />
                </div>
            </div>

            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service}</h3>
                        <p>
                            {service} is one of our key offerings that helps businesses enhance productivity,
                            optimize communication and deliver top-notch customer support.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
