import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaNetworkWired, FaBuilding, FaShieldAlt, FaHeadset, FaClipboardCheck, FaCheckCircle, FaArrowDown } from "react-icons/fa";
import "../style/facilities.css";

// All wording below is unchanged from the previous version of the page.
const sections = [
    {
        id: "network-resiliency",
        icon: FaNetworkWired,
        summaryTitle: "Network Resiliency",
        title: "Network Resiliency",
        summary: [
            "Multiple internet providers for uninterrupted services up to 1 GBPS speed.",
            "Leased line Internet provision available up to 10 MBPS speed.",
            "Uninterrupted power supply."
        ],
        intro: "At Bhagirath Solution, we understand the critical importance of network resiliency in today’s interconnected and digitally reliant business landscape. We are dedicated to providing our clients with robust network infrastructure and solutions that ensure high availability, seamless connectivity, and the ability to withstand and recover from disruptions.",
        listHeading: "Our approach to network resiliency encompasses the following key aspects:",
        items: [
            { label: "Redundancy and Failover", text: "We implement redundant network components, such as routers, switches, and links, to eliminate single points of failure. By utilizing redundant hardware and diverse network paths, we ensure that even if one component or connection fails, the network continues to operate without interruptions." },
            { label: "Scalability and Load Balancing", text: "We design our networks with scalability in mind, allowing for future growth and increased traffic demands, employing load balancing techniques to distribute traffic evenly." },
            { label: "Network Segmentation and Security", text: "We implement network segmentation strategies to isolate critical systems and segments from potential threats or disruptions, minimizing the impact of security breaches." },
            { label: "Proactive Monitoring and Management", text: "Advanced network monitoring tools continuously monitor network health and performance in real-time to prevent or mitigate disruptions." },
            { label: "Disaster Recovery Planning", text: "Comprehensive disaster recovery plans include backup and restoration strategies, data replication, and failover mechanisms to quickly restore critical operations." },
            { label: "Network Resilience Testing", text: "Periodic network resilience testing simulates failure scenarios to validate the effectiveness of our solutions and identify any gaps." },
            { label: "Expertise and Support", text: "Our team of experienced network engineers and technicians offers comprehensive support to ensure our clients’ networks remain resilient and reliable." }
        ]
    },
    {
        id: "operational-capacity",
        icon: FaBuilding,
        summaryTitle: "Operational Capacity",
        title: "Operational Capacity",
        summary: [
            "Existing seating capacity of 25 team members with immediate extension up to 50.",
            "Provision of extending the facility up to 125 seater.",
            "Training and learning center within the premises."
        ],
        intro: "At Bhagirath Solution, we pride ourselves on having a robust technical operational capacity to cater to the diverse needs of our clients. We have built a strong operational framework that ensures we can meet and exceed our clients’ expectations.",
        listHeading: "Key elements of our operational capacity include:",
        items: [
            { label: "Skilled Team", text: "Highly skilled and experienced professionals undergo regular training to handle complex technical challenges and provide innovative solutions." },
            { label: "Scalability", text: "Resources and flexibility to expand our services and support as your business grows, from an existing 25-seater up to 125+ seats." },
            { label: "Robust Infrastructure", text: "State-of-the-art hardware, software, and networking systems continuously monitored and upgraded for optimal performance." },
            { label: "Efficient Processes", text: "Streamlined workflows, ticketing systems, and communication protocols designed to minimize downtime and maximize client satisfaction." },
            { label: "Tools and Technologies", text: "Cutting-edge monitoring systems, remote access solutions, and secure data storage." },
            { label: "Continuous Improvement", text: "Regular evaluation of processes and technologies driven by client feedback and industry trends." },
            { label: "Compliance and Security", text: "Robust security measures, including strict access controls, data encryption, and regular security audits." }
        ]
    },
    {
        id: "security-controls",
        icon: FaShieldAlt,
        summaryTitle: "Security & Controls",
        title: "Physical and Cyber Security and Controls",
        summary: [
            "Authorized access using biometric along with CCTV surveillance.",
            "Firewall backed internal computer network.",
            "Dedicated cyber security team for safety and vulnerability control."
        ],
        intro: "We take the security and protection of our clients’ assets, data, and operations seriously, offering comprehensive physical and cyber security services and controls.",
        listHeading: "Cyber Security & Surveillance Services:",
        items: [
            { label: "Vulnerability Assessments", text: "Comprehensive assessments, penetration testing, and security audits to identify and address vulnerabilities." },
            { label: "Network Security", text: "Robust firewalls, intrusion detection/prevention systems, and secure configurations against unauthorized access and malware." },
            { label: "Data Protection", text: "Data encryption, DLP solutions, strong access controls, and user authentication mechanisms." },
            { label: "Security Awareness Training", text: "Customized training programs to educate employees on best practices and threat prevention." },
            { label: "Incident Response and Forensics", text: "Swift containment and forensic investigation in the event of any security incident." },
            { label: "Physical Surveillance Systems", text: "Biometric authorized access, CCTV cameras, motion sensors, and alarms monitoring premises 24/7." }
        ]
    },
    {
        id: "support",
        icon: FaHeadset,
        summaryTitle: "24/7 Support",
        title: "Support & Technical Assistance",
        summary: [
            "Support available 24 X 7.",
            "Competently trained team with professional qualifications (B Tech / MBA).",
            "Remote and On-Site Support.",
            "Expertise and Knowledge."
        ],
        intro: "At Bhagirath Solution, we take pride in offering exceptional technical support services to our valued clients around the clock, ensuring your systems and processes run smoothly.",
        listHeading: "What to expect when you partner with us:",
        items: [
            { label: "Prompt Response", text: "Round-the-clock availability ensuring assistance is just a phone call or message away." },
            { label: "Expertise and Knowledge", text: "Qualified professionals (B.Tech / MBA) possessing extensive knowledge across diverse technological domains." },
            { label: "Tailored Solutions", text: "Personalized approach designed around your specific business processes and goals." },
            { label: "Remote and On-Site Support", text: "Flexible assistance offering both immediate remote troubleshooting and hands-on on-site support." },
            { label: "Proactive Monitoring & Maintenance", text: "Regular monitoring to identify and resolve issues before they impact operations." },
            { label: "Training & Knowledge Transfer", text: "Empowering your team with skills to handle routine tasks independently." },
            { label: "Ongoing Support", text: "Long-term partnership addressing evolving needs and system upgrades." }
        ]
    },
    {
        id: "service-delivery",
        icon: FaClipboardCheck,
        title: "Our Facilities and Service Delivery",
        intro: "At Bhagirath Solution, we aim to make outsourcing straightforward by establishing clear expectations, defined responsibilities, and suitable communication processes.",
        listHeading: "Structured Support. Clear Processes. Better Coordination.",
        items: [
            { label: "Requirement Planning", text: "We discuss your business needs, scope of work, priorities, and expected outcomes before defining the support arrangement." },
            { label: "Task and Workflow Management", text: "Tasks, responsibilities, deadlines, and escalation paths can be documented to support clear day-to-day operations." },
            { label: "Communication and Reporting", text: "We can agree on progress updates, regular reviews, and reporting formats to keep stakeholders informed." },
            { label: "Review and Improvement", text: "We review workflows and feedback to identify opportunities for better coordination and more efficient delivery." }
        ],
        note: "Support arrangements, working hours, tools, facilities, and access controls are agreed according to the service scope and client requirements."
    }
];

const Facilities = () => {
    const location = useLocation();
    const sectionRefs = useRef({});

    const scrollToSection = (id) => {
        const element = sectionRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            setTimeout(() => scrollToSection(targetId), 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="facilities-page">
            <Helmet>
                <title>Infrastructure & Facilities | Network Resiliency & Security | Bhagirath IT Solutions</title>
                <meta
                    name="description"
                    content="Explore state-of-the-art facilities, network resiliency, robust operational capacity, and multi-layered physical and cyber security controls at Bhagirath IT Solutions."
                />
                <link rel="canonical" href="https://bhagirathitsolutions.co.in/#/Facilities" />
            </Helmet>

            {/* Hero banner */}
            <section className="facilities-hero">
                <Container className="facilities-hero-inner">
                    <span className="facilities-badge">
                        <span className="facilities-badge-dot" />
                        Infrastructure & Facilities
                    </span>
                    <h1 className="facilities-hero-title">State-of-the-Art Operations & Infrastructure</h1>
                    <p className="facilities-hero-subtitle">
                        Designed for high availability, seamless connectivity, robust security, and scalable team capacity to support your business continuity.
                    </p>
                </Container>
            </section>

            <Container className="facilities-body">
                {/* Quick summary cards */}
                <Row className="g-4 mb-5">
                    {sections.filter((s) => s.summary).map(({ id, icon: Icon, summaryTitle, summary }) => (
                        <Col lg={3} md={6} key={id}>
                            <Card className="h-100 border-0 shadow-sm facility-summary-card">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div className="facility-icon mb-3">
                                        <Icon size={24} />
                                    </div>
                                    <h5 className="facility-card-title mb-3">{summaryTitle}</h5>
                                    <ul className="list-unstyled small text-muted mb-3 flex-grow-1">
                                        {summary.map((point) => (
                                            <li key={point} className="mb-2 d-flex align-items-start">
                                                <FaCheckCircle className="facility-check me-2 mt-1 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button type="button" className="facility-more" onClick={() => scrollToSection(id)}>
                                        Read more <FaArrowDown size={12} />
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Detailed sections */}
                {sections.map(({ id, icon: Icon, title, intro, listHeading, items, note }) => (
                    <div
                        key={id}
                        ref={(el) => (sectionRefs.current[id] = el)}
                        className="facility-section mb-4 p-4 p-lg-5 bg-white rounded-4 shadow-sm"
                    >
                        <Row className="align-items-start">
                            <Col lg={4} className="mb-4 mb-lg-0">
                                <div className="facility-icon facility-icon-lg mb-3">
                                    <Icon size={28} />
                                </div>
                                <h2 className="facility-section-title">{title}</h2>
                                <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>{intro}</p>
                            </Col>

                            <Col lg={8} className="facility-border-start ps-lg-4">
                                <h5 className="facility-list-heading">{listHeading}</h5>
                                <ol className="facility-steps">
                                    {items.map(({ label, text }) => (
                                        <li key={label}>
                                            <strong>{label}:</strong> {text}
                                        </li>
                                    ))}
                                </ol>
                                {note && <div className="facility-note">{note}</div>}
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Facilities;