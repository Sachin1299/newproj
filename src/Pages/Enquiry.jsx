// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import "../style/enquiry.css"; // Custom CSS for animation and style

// const Enquiry = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // You can integrate email sending logic or API here
//   };

//   return (
//     <div className="enquiry-section">
//       <Container className="py-5">
//         <Row className="justify-content-center text-center mb-4 fade-in-top">
//           <Col lg={8}>
//             <h2 className="display-5 fw-bold">Get In Touch</h2>
//             <p className="text-muted">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
//           </Col>
//         </Row>

//         <Row className="justify-content-center slide-up">
//           <Col md={8} lg={6}>
//             {submitted ? (
//               <Alert variant="success" className="text-center">
//                 Thank you for contacting us! We'll get back to you shortly.
//               </Alert>
//             ) : (
//               <Form onSubmit={handleSubmit} className="enquiry-form p-4 shadow rounded">
//                 <Form.Group className="mb-3" controlId="formName">
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
//                 </Form.Group>

//                 <Form.Group className="mb-4" controlId="formMessage">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="How can we help you?" required />
//                 </Form.Group>

//                 <div className="text-center">
//                   <Button variant="primary" type="submit" className="px-5 py-2 fw-semibold">
//                     Send Message
//                   </Button>
//                 </div>
//               </Form>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Enquiry;







// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import '../style/enquiry.css';
// import SupportAgentImage from '../img/FocusedOffice.png'; // Replace with your image path

// const Enquiry = () => {
//   return (
//     <div className="enquiry-section py-5">
//       <Container>
//         <Row className="align-items-center">
//           {/* Form Section */}
//           <Col md={6} className="mb-5 mb-md-0">
//             <h2 className="mb-4 fw-bold text-primary">Get in Touch</h2>
//             <p className="mb-4 text-muted">
//               Have a question or need help? Fill out the form and our team will get back to you shortly.
//             </p>
//             <Form>
//               <Form.Group className="mb-3" controlId="formName">
//                 <Form.Control type="text" placeholder="Your Name" required />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Control type="email" placeholder="Email Address" required />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formSubject">
//                 <Form.Control type="text" placeholder="Subject" required />
//               </Form.Group>
//               <Form.Group className="mb-4" controlId="formMessage">
//                 <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
//               </Form.Group>
//               <Button variant="primary" type="submit" className="w-100">
//                 Submit Enquiry
//               </Button>
//             </Form>
//           </Col>

//           {/* Image Section */}
//           <Col md={6} className="text-center">
//             <img
//               src={SupportAgentImage}
//               alt="Support Agent Talking to Client"
//               className="img-fluid animated-support-image"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Enquiry;




// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import EnquiryImage from "../img/FocusedOffice.png"; // Replace with your image path
// import "../style/enquiry.css";

// const Enquiry = () => {
//   return (
//     <div className="enquiry-section">
//       <Container className="py-5">
//         <Row className="align-items-center g-5">
//           <Col md={6}>
//             <motion.img
//               src={EnquiryImage}
//               alt="Support Staff Communicating with Client"
//               className="img-fluid rounded shadow enquiry-image"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             />
//           </Col>

//           <Col md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="form-wrapper p-4 shadow rounded bg-white"
//             >
//               <h2 className="mb-4 text-primary fw-bold">Contact Us</h2>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter your name" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" placeholder="Enter your email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit Enquiry
//                 </Button>
//               </Form>
//             </motion.div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Enquiry;


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import "../style/enquiry.css";
// import EnquiryImg from "../img/FocusedOffice.png"; // Example image

// const Enquiry = () => {
//   return (
//     <div className="enquiry-section">
//       <Container className="py-5">
//         <Row className="align-items-center">
//           <Col md={6} className="mb-4 mb-md-0">
//             <motion.img
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               src={EnquiryImg}
//               alt="Contact Support"
//               className="img-fluid rounded shadow"
//             />
//           </Col>

//           <Col md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="contact-form-container"
//             >
//               <h2 className="mb-4 text-primary">Get in Touch</h2>
//               <Form>
//                 <Form.Group controlId="formName" className="mb-3">
//                   <Form.Control type="text" placeholder="Your Name" required />
//                 </Form.Group>

//                 <Form.Group controlId="formEmail" className="mb-3">
//                   <Form.Control type="email" placeholder="Your Email" required />
//                 </Form.Group>

//                 <Form.Group controlId="formMessage" className="mb-3">
//                   <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">
//                   Submit
//                 </Button>
//               </Form>
//             </motion.div>
//           </Col>
//         </Row>

//         {/* Section 2: Contact Details Grid */}
//         <Row className="mt-5 text-center contact-details">
//           <Col md={3} sm={6} className="mb-4">
//             <FaPhoneAlt size={24} className="mb-2 text-primary" />
//             <p className="mb-1">Phone</p>
//             <strong>+91 9876543210</strong>
//           </Col>
//           <Col md={3} sm={6} className="mb-4">
//             <FaClock size={24} className="mb-2 text-primary" />
//             <p className="mb-1">Working Hours</p>
//             <strong>Mon - Sat: 9AM - 6PM</strong>
//           </Col>
//           <Col md={3} sm={6} className="mb-4">
//             <FaMapMarkerAlt size={24} className="mb-2 text-primary" />
//             <p className="mb-1">Location</p>
//             <strong>Bangalore, India</strong>
//           </Col>
//           <Col md={3} sm={6} className="mb-4">
//             <FaEnvelope size={24} className="mb-2 text-primary" />
//             <p className="mb-1">Email</p>
//             <strong>support@supportsphere.com</strong>
//           </Col>
//         </Row>

//         {/* Section 3: Google Map Embed */}
//         <Row className="mt-4">
//           <Col>
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18..." // Add real map URL
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </Col>
//         </Row>

//         {/* Social Media Icons */}
//         <Row className="text-center mt-4">
//           <Col>
//             <div className="social-icons">
//               <a href="#"><FaFacebook /></a>
//               <a href="#"><FaTwitter /></a>
//               <a href="#"><FaLinkedin /></a>
//               <a href="#"><FaInstagram /></a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Enquiry;



import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import "../style/enquiry.css";
import EnquiryImg from "../img/FocusedOffice.png"; // Example image

const Enquiry = () => {
  return (
    <div className="enquiry-section">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={EnquiryImg}
              alt="Contact Support"
              className="img-fluid rounded shadow"
            />
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-form-container"
            >
              <h2 className="mb-4 text-primary">Get in Touch</h2>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>

        {/* Section 2: Contact Details Grid */}
        <Row className="mt-5 text-center contact-details">
          <Col md={3} sm={6} className="mb-4">
            <FaPhoneAlt size={24} className="mb-2 text-primary" />
            <p className="mb-1">Phone</p>
            <strong>+91 9876543210</strong>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <FaClock size={24} className="mb-2 text-primary" />
            <p className="mb-1">Working Hours</p>
            <strong>Mon - Sat: 9AM - 6PM</strong>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <FaMapMarkerAlt size={24} className="mb-2 text-primary" />
            <p className="mb-1">Location</p>
            <strong>Bangalore, India</strong>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <FaEnvelope size={24} className="mb-2 text-primary" />
            <p className="mb-1">Email</p>
            <strong>support@supportsphere.com</strong>
          </Col>
        </Row>

        {/* Section 3: Google Map Embed */}
        <Row className="mt-4">
          <Col>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..." // Add real map URL
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        {/* Social Media Icons */}
        <Row className="text-center mt-5">
          <Col>
            <div className="social-icons d-flex justify-content-center gap-4">
              <a href="#" className="text-primary fs-4"><FaFacebook /></a>
              <a href="#" className="text-info fs-4"><FaTwitter /></a>
              <a href="#" className="text-primary fs-4"><FaLinkedin /></a>
              <a href="#" className="text-danger fs-4"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enquiry;
