import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import {
    FaLaptopCode,
    FaHeadset,
    FaTasks,
    FaCogs,
    FaUserTie,
    FaCode,
    FaChartLine,
    FaBullhorn,
    FaUsers,
    FaCheckCircle,
    FaArrowRight
} from 'react-icons/fa';
import '../style/Services.css';
import serviceimg from '../img/service.png';

// Services, titles and scope lists are unchanged.
// "short" is only the label used by the jump-to chips.
const servicesList = [
    {
        id: "it-support",
        short: "IT Support",
        icon: <FaLaptopCode size={30} />,
        title: "IT Support and Infrastructure Management",
        description: "We provide technical support to help businesses manage their IT environments, resolve common issues, and maintain reliable day-to-day operations.",
        features: [
            "Level 1 and Level 2 technical support.",
            "Windows and Linux troubleshooting.",
            "Network, VPN, firewall, and connectivity support.",
            "DNS, hosting, and server administration assistance.",
            "Backup monitoring and escalation coordination.",
            "VoIP, SIP, and cloud PBX support.",
            "Remote troubleshooting and technical documentation.",
            "IT service desk and ticket management."
        ]
    },
    {
        id: "customer-service",
        short: "Customer Service",
        icon: <FaHeadset size={30} />,
        title: "Customer Service and Helpdesk",
        description: "Deliver a more consistent customer experience with support for customer enquiries, service requests, and everyday communication.",
        features: [
            "Inbound and outbound customer calls.",
            "Email and ticket-based support.",
            "Customer enquiry handling.",
            "First-level troubleshooting and information gathering.",
            "Follow-ups and service request coordination.",
            "Escalation of complex issues to the appropriate team.",
            "Customer record updates and interaction documentation."
        ]
    },
    {
        id: "business-admin",
        short: "Business Admin",
        icon: <FaTasks size={30} />,
        title: "Business Administration Services",
        description: "Keep your business organised and focused on its priorities. We take on routine office and back-office tasks, working with your existing procedures and tools so everyday work keeps moving.",
        features: [
            "General office and administrative assistance.",
            "Data entry and database maintenance.",
            "Document preparation, formatting, and management.",
            "Invoice preparation and billing administration support.",
            "Email management and business correspondence.",
            "CRM updates and customer record maintenance.",
            "Order processing and workflow coordination.",
            "Supplier and customer follow-ups.",
            "Spreadsheet preparation and routine reporting.",
            "Appointment scheduling and meeting coordination.",
            "Record keeping and file organisation.",
            "Back-office support for daily business operations."
        ],
        benefitsTitle: "How your business benefits",
        benefits: [
            "Reduce time spent on repetitive administrative tasks.",
            "Improve the organisation of documents and business records.",
            "Support more consistent workflows and follow-up processes.",
            "Free internal teams to focus on customer service, decision-making, and growth.",
            "Access flexible assistance based on your workload and requirements."
        ]
    },
    {
        id: "bpo",
        short: "BPO",
        icon: <FaCogs size={30} />,
        title: "Business Process Outsourcing (BPO)",
        description: "We help businesses delegate selected operational processes so their internal teams can concentrate on core activities.",
        features: [
            "Data processing and data entry.",
            "Back-office administration.",
            "Document and information processing.",
            "Database updates and record maintenance.",
            "Order and service request processing.",
            "Routine operational coordination.",
            "Process documentation and status reporting."
        ]
    },
    {
        id: "virtual-assistant",
        short: "Virtual Assistant",
        icon: <FaUserTie size={30} />,
        title: "Virtual Assistant Services",
        description: "Get practical day-to-day assistance without adding every administrative responsibility to your internal team.",
        features: [
            "Calendar and appointment management.",
            "Inbox organisation and email follow-ups.",
            "Online research and information gathering.",
            "Meeting coordination and preparation.",
            "Document formatting and spreadsheet updates.",
            "CRM maintenance and contact management.",
            "Task tracking and routine business coordination.",
            "General remote administrative assistance."
        ]
    },
    {
        id: "software-dev",
        short: "Software & Web",
        icon: <FaCode size={30} />,
        title: "Software Development and Web Solutions",
        description: "We support businesses with digital projects that improve their online presence and streamline business processes.",
        features: [
            "Business website design and development.",
            "Website updates and maintenance.",
            "Web application development.",
            "Software testing and troubleshooting.",
            "Third-party integrations.",
            "Workflow automation solutions.",
            "Technical documentation and ongoing support."
        ]
    },
    {
        id: "sales-support",
        short: "Sales Support",
        icon: <FaChartLine size={30} />,
        title: "Sales Support and Lead Generation",
        description: "Support your sales team with structured prospecting, lead research, and follow-up activities.",
        features: [
            "Business and prospect research.",
            "Lead list building and database updates.",
            "Lead qualification based on agreed criteria.",
            "CRM data entry and pipeline updates.",
            "Discovery call scheduling.",
            "Appointment setting and follow-up coordination.",
            "Sales administration and reporting.",
            "Outreach support using client-approved processes."
        ]
    },
    {
        id: "digital-marketing",
        short: "Digital Marketing",
        icon: <FaBullhorn size={30} />,
        title: "Digital Marketing Support",
        description: "We assist businesses with digital marketing tasks that support their online visibility, campaign coordination, and marketing operations.",
        features: [
            "Search engine optimisation support.",
            "Social media scheduling and management assistance.",
            "Content preparation and publishing coordination.",
            "Digital campaign administration.",
            "Market and competitor research.",
            "Website content updates.",
            "Marketing data collection and reporting."
        ]
    },
    {
        id: "remote-teams",
        short: "Remote Teams",
        icon: <FaUsers size={30} />,
        title: "Dedicated Remote Teams and Staff Outsourcing",
        description: "Build additional capacity with remote professionals supporting specific functions within your business.",
        features: [
            "Role and responsibility definition.",
            "Support aligned with agreed business hours.",
            "Task allocation and progress tracking.",
            "Regular communication and reporting.",
            "Coordination with your existing team.",
            "Flexible resourcing based on business requirements."
        ]
    }
];

const Services = () => {
    const location = useLocation();
    const serviceRefs = useRef({});

    const scrollToService = (id) => {
        const element = serviceRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            setTimeout(() => scrollToService(targetId), 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-visual">
                    <img src={serviceimg} alt="Bhagirath Solutions Services" className="services-hero-img" />
                </div>

                <Container className="services-hero-inner">
                    <Row>
                        <Col lg={6} className="text-start">
                            <span className="services-badge">
                                <span className="services-badge-dot" />
                                Professional Outsourcing
                            </span>
                            <h1 className="services-hero-title">
                                Flexible Outsourcing Solutions for Modern Businesses
                            </h1>
                            <p className="services-hero-subtitle">
                                Bhagirath Solutions offers a range of business support and technology services designed to help organisations manage workloads, improve efficiency, and access the support they need.
                            </p>
                            <Link to="/Enquiry" className="services-hero-btn">
                                Enquire About Our Services <FaArrowRight size={14} />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Detailed List Section */}
            <Container className="services-div">
                <div className="text-center mb-4">
                    <h2 className="services-title">Our Core Services</h2>
                    <p className="services-subtitle">
                        Comprehensive operational support tailored precisely to your company workflows.
                    </p>
                </div>

                {/* Jump-to chips */}
                <div className="service-chips">
                    {servicesList.map((svc) => (
                        <button
                            type="button"
                            key={svc.id}
                            className="service-chip"
                            onClick={() => scrollToService(svc.id)}
                        >
                            {svc.short}
                        </button>
                    ))}
                </div>

                <Row className="g-4">
                    {servicesList.map((svc) => (
                        <Col
                            lg={12}
                            key={svc.id}
                            className="service-col"
                            ref={(el) => (serviceRefs.current[svc.id] = el)}
                        >
                            <Card className="service-detail-card border-0 shadow-sm p-4 p-md-4 p-lg-5">
                                <Row className="align-items-start">
                                    <Col lg={4} className="mb-4 mb-lg-0">
                                        <div className="icon-wrapper mb-3">{svc.icon}</div>
                                        <h3 className="service-card-title">{svc.title}</h3>
                                        <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                                            {svc.description}
                                        </p>
                                        <Link to="/Enquiry" className="service-cta-btn">
                                            Get Started
                                        </Link>
                                    </Col>

                                    <Col lg={8} className="border-start-lg ps-lg-4">
                                        <h5 className="service-scope-title">Key Service Scope</h5>
                                        <Row className="g-2 mb-3">
                                            {svc.features.map((feat, fIdx) => (
                                                <Col md={6} key={fIdx} className="d-flex align-items-start">
                                                    <FaCheckCircle className="service-check me-2 mt-1 flex-shrink-0" />
                                                    <span className="small text-muted">{feat}</span>
                                                </Col>
                                            ))}
                                        </Row>

                                        {svc.benefits && (
                                            <div className="service-benefits mt-4 p-3 rounded">
                                                <h6 className="fw-bold mb-2">{svc.benefitsTitle}</h6>
                                                <ul className="list-unstyled mb-0">
                                                    {svc.benefits.map((ben, bIdx) => (
                                                        <li key={bIdx} className="small text-muted mb-1 d-flex align-items-start">
                                                            <span className="service-bullet me-2">•</span>
                                                            <span>{ben}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Closing call-to-action */}
                <div className="services-cta">
                    <h3 className="services-cta-title">Not Sure Which Service You Need?</h3>
                    <p className="services-cta-text">
                        Tell us about your workload and priorities, and we’ll discuss a practical way to support your business.
                    </p>
                    <Link to="/Enquiry" className="services-hero-btn">
                        Contact Us <FaArrowRight size={14} />
                    </Link>
                </div>
            </Container>
        </div>
    );
};
export default Services;