// import React from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "../style/career.css";

// const Career = () => {
//   return (
//     <div className="career-page">
//       <Container className="py-5">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-center mb-4 text-primary">Join Our Team</h1>
//           <p className="text-center mb-5 lead">
//             Be part of a fast-paced team dedicated to transforming communication technology and customer support services.
//           </p>
//         </motion.div>

//         {/* Culture Cards */}
//         <Row className="mb-5">
//           {[
//             {
//               title: "Innovative Culture",
//               text: "We embrace creativity and fresh ideas to shape the future of support solutions.",
//             },
//             {
//               title: "Meaningful Work",
//               text: "Join a mission-driven company that values positive impact and real change.",
//             },
//             {
//               title: "Collaborative Team",
//               text: "Work with passionate individuals who uplift and challenge each other.",
//             },
//           ].map((item, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <Card.Title className="text-primary">{item.title}</Card.Title>
//                   <Card.Text>{item.text}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Open Positions */}
//         <h3 className="text-center mb-4 text-primary">Open Positions</h3>
//         <Row className="mb-5">
//           {[
//             {
//               role: "Frontend Developer (React)",
//               location: "Remote / Bangalore",
//               type: "Full-time",
//             },
//             {
//               role: "Backend Developer (Spring Boot)",
//               location: "Remote / Pune",
//               type: "Full-time",
//             },
//             {
//               role: "Technical Support Executive",
//               location: "Hyderabad",
//               type: "Part-time",
//             },
//           ].map((job, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card className="h-100 job-card">
//                 <Card.Body>
//                   <Card.Title>{job.role}</Card.Title>
//                   <Card.Text>
//                     <strong>Location:</strong> {job.location}<br />
//                     <strong>Type:</strong> {job.type}
//                   </Card.Text>
//                   <Button variant="outline-primary" size="sm">Apply Now</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Upload Resume Section */}
//         <Row className="mb-5">
//           <Col md={8} className="mx-auto">
//             <h4 className="text-center mb-3">Didn't find a match? Send us your resume!</h4>
//             <Form className="resume-upload-form p-4 border rounded shadow-sm bg-light">
//               <Form.Group className="mb-3">
//                 <Form.Label>Your Name</Form.Label>
//                 <Form.Control type="text" placeholder="Full Name" required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Your Email" required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Upload Resume</Form.Label>
//                 <Form.Control type="file" accept=".pdf,.doc,.docx" required />
//               </Form.Group>

//               <Button type="submit" variant="primary" className="w-100">Submit Resume</Button>
//             </Form>
//           </Col>
//         </Row>

//         {/* Perks Section */}
//         <h3 className="text-center mb-4 text-primary">Perks & Benefits</h3>
//         <Row className="text-center mb-5">
//           {[
//             "🌍 Remote Flexibility",
//             "📚 Learning Budget",
//             "💻 Modern Tech Stack",
//             "👥 Inclusive Culture",
//             "🎉 Team Retreats",
//             "🩺 Health Coverage",
//           ].map((perk, index) => (
//             <Col xs={6} md={4} key={index} className="mb-3">
//               <div className="perk-box p-3 bg-white shadow-sm rounded h-100">
//                 {perk}
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Career;


// import React from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "../style/career.css";
// import { FaClipboard } from 'react-icons/fa';


// const Career = () => {
//     const jobOpenings = [];
//     return (
//         <div className="career-page">
//             <Container className="py-5">
//                 <motion.div
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h1 className="text-center mb-4 text-primary">Join Our Team</h1>
//                     <p className="text-center mb-5 lead">
//                         Be part of a fast-paced team dedicated to transforming communication technology and customer support services.
//                     </p>
//                 </motion.div>

//                 {/* Culture Cards */}
//                 <Row className="mb-5">
//                     {[
//                         {
//                             title: "Innovative Culture",
//                             text: "We embrace creativity and fresh ideas to shape the future of support solutions.",
//                         },
//                         {
//                             title: "Meaningful Work",
//                             text: "Join a mission-driven company that values positive impact and real change.",
//                         },
//                         {
//                             title: "Collaborative Team",
//                             text: "Work with passionate individuals who uplift and challenge each other.",
//                         },
//                     ].map((item, index) => (
//                         <Col md={4} key={index} className="mb-4">
//                             <Card className="h-100 shadow-sm">
//                                 <Card.Body>
//                                     <Card.Title className="text-primary">{item.title}</Card.Title>
//                                     <Card.Text>{item.text}</Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>

//                 {/* Open Positions */}
//                 {jobOpenings.length === 0 ? (
//                     <motion.div
//                         className="no-openings text-center p-3 rounded shadow-sm"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <FaClipboard size={50} className="text-muted mb-3" />
//                         <h4 className="text-primary">No Current Openings</h4>
//                         <p className="text-muted mb-4">
//                             We don't have any open positions right now, but we’re always happy to hear from talented people.
//                         </p>
//                     </motion.div>
//                 ) : (
//                     <span>Jobs availble</span>
//                 )}


//                 {/* Upload Resume Section */}
//                 <Row className="mb-5">
//                     <Col md={8} className="mx-auto">
//                         <h4 className="text-center mb-3">Didn't find a match? Send us your resume!</h4>
//                         <Form className="resume-upload-form p-4 border rounded shadow-sm bg-light">
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Your Name</Form.Label>
//                                 <Form.Control type="text" placeholder="Full Name" required />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control type="email" placeholder="Your Email" required />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Upload Resume</Form.Label>
//                                 <Form.Control type="file" accept=".pdf,.doc,.docx" required />
//                             </Form.Group>

//                             <Button type="submit" variant="primary" className="w-100">Submit Resume</Button>
//                         </Form>
//                     </Col>
//                 </Row>

//                 {/* Perks Section */}
//                 <h3 className="text-center mb-4 text-primary">Perks & Benefits</h3>
//                 <Row className="text-center mb-5">
//                     {[
//                         "🌍 Remote Flexibility",
//                         "📚 Learning Budget",
//                         "💻 Modern Tech Stack",
//                         "👥 Inclusive Culture",
//                         "🎉 Team Retreats",
//                         "🩺 Health Coverage",
//                     ].map((perk, index) => (
//                         <Col xs={6} md={4} key={index} className="mb-3">
//                             <div className="perk-box p-3 bg-white shadow-sm rounded h-100">
//                                 {perk}
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Career;


// import React, { useState } from "react";
// import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "../style/career.css";
// import { FaClipboard } from 'react-icons/fa';

// const Career = () => {
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const jobOpenings = [];
//     const handleFormSubmit = async (e) => {
//       e.preventDefault(); // prevent default redirect
//       setIsLoading(true);
  
//       const form = e.target;
//       const formData = new FormData(form);
  
//       try {
//         const response = await fetch("https://formspree.io/f/xrbpnwpo", {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         });
  
//         if (response.ok) {
//           setIsSubmitted(true);
//           form.reset();
//         } else {
//           alert("Something went wrong. Please try again later.");
//         }
//       } catch (error) {
//         alert("Error submitting form!");
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//   return (
//     <div className="career-page">
//       <Container className="py-5">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-center mb-4 text-primary">Join Our Team</h1>
//           <p className="text-center mb-5 lead">
//             Be part of a fast-paced team dedicated to transforming communication technology and customer support services.
//           </p>
//         </motion.div>

//         {/* Culture Cards */}
//         <Row className="mb-5">
//           {[
//             {
//               title: "Innovative Culture",
//               text: "We embrace creativity and fresh ideas to shape the future of support solutions.",
//             },
//             {
//               title: "Meaningful Work",
//               text: "Join a mission-driven company that values positive impact and real change.",
//             },
//             {
//               title: "Collaborative Team",
//               text: "Work with passionate individuals who uplift and challenge each other.",
//             },
//           ].map((item, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <Card.Title className="text-primary">{item.title}</Card.Title>
//                   <Card.Text>{item.text}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Open Positions */}
//         {jobOpenings.length === 0 ? (
//           <motion.div
//             className="no-openings text-center p-3 rounded shadow-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <FaClipboard size={50} className="text-muted mb-3" />
//             <h4 className="text-primary">No Current Openings</h4>
//             <p className="text-muted mb-4">
//               We don't have any open positions right now, but we’re always happy to hear from talented people.
//             </p>
//           </motion.div>
//         ) : (
//           <span>Jobs available</span>
//         )}

//         {/* Upload Resume Form */}
//         <Row className="mb-5">
//           <Col md={8} className="mx-auto">
//             <h4 className="text-center mb-3">Didn't find a match? Send us your resume!</h4>

//             {isSubmitted ? (
//                 <div className="alert alert-success text-center">
//                   🎉 Thank you! Your message has been sent.
//                 </div>
//               ) : (
//                 <Form onSubmit={handleFormSubmit}>
//                   <Form.Group className="mb-3">
//                     <Form.Control type="text" name="name" placeholder="Your Name" required />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Control type="email" name="email" placeholder="Your Email" required />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Control
//                       as="textarea"
//                       name="message"
//                       rows={4}
//                       placeholder="Your Message"
//                       required
//                     />
//                   </Form.Group>

//                   <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
//                     {isLoading ? "Sending..." : "Submit"}
//                   </Button>
//                 </Form>
//               )}
//           </Col>
//         </Row>

//         {/* Perks Section */}
//         <h3 className="text-center mb-4 text-primary">Perks & Benefits</h3>
//         <Row className="text-center mb-5">
//           {[
//             "🌍 Remote Flexibility",
//             "📚 Learning Budget",
//             "💻 Modern Tech Stack",
//             "👥 Inclusive Culture",
//             "🎉 Team Retreats",
//             "🩺 Health Coverage",
//           ].map((perk, index) => (
//             <Col xs={6} md={4} key={index} className="mb-3">
//               <div className="perk-box p-3 bg-white shadow-sm rounded h-100">
//                 {perk}
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Career;


import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import "../style/career.css";
import { FaClipboard } from "react-icons/fa";

const Career = () => {
  const [state, handleSubmit] = useForm("xrbpnwpo");

  return (
    <div className="career-page">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center mb-4 text-primary">Join Our Team</h1>
          <p className="text-center mb-5 lead">
            Be part of a fast-paced team dedicated to transforming communication technology and customer support services.
          </p>
        </motion.div>

        {/* Culture Cards */}
        <Row className="mb-5">
          {[
            {
              title: "Innovative Culture",
              text: "We embrace creativity and fresh ideas to shape the future of support solutions.",
            },
            {
              title: "Meaningful Work",
              text: "Join a mission-driven company that values positive impact and real change.",
            },
            {
              title: "Collaborative Team",
              text: "Work with passionate individuals who uplift and challenge each other.",
            },
          ].map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Job Openings */}
        <motion.div
          className="no-openings text-center p-3 rounded shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaClipboard size={50} className="text-muted mb-3" />
          <h4 className="text-primary">No Current Openings</h4>
          <p className="text-muted mb-4">
            We don't have any open positions right now, but we’re always happy to hear from talented people.
          </p>
        </motion.div>

        {/* Enquiry-style Contact Form */}
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <h4 className="text-center mb-3">Drop us a message!</h4>
            {state.succeeded ? (
              <p className="text-success text-center">Thanks! We'll get in touch soon.</p>
            ) : (
              <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Full Name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" placeholder="Your Message" required />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100" disabled={state.submitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Col>
        </Row>

        {/* Perks Section */}
        <h3 className="text-center my-5 text-primary">Perks & Benefits</h3>
        <Row className="text-center mb-5">
          {[
            "🌍 Remote Flexibility",
            "📚 Learning Budget",
            "💻 Modern Tech Stack",
            "👥 Inclusive Culture",
            "🎉 Team Retreats",
            "🩺 Health Coverage",
          ].map((perk, index) => (
            <Col xs={6} md={4} key={index} className="mb-3">
              <div className="perk-box p-3 bg-white shadow-sm rounded h-100">{perk}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Career;
