import React, { useState } from "react";
import { Carousel, Button, Modal, Form, Card, Row, Col, Container, Accordion } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./About.css"; // Import CSS

const About = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([
    { name: "John Doe", comment: "Great platform! The courses helped me upskill and land a job in tech.", rating: 5 },
    { name: "Jane Smith", comment: "The tutors are very experienced. I highly recommend this platform for anyone looking to learn new skills.", rating: 4 },
  ]);

  const courseDetails = [
    {
      title: "Full Stack Web Development",
      instructor: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s"
    },
    {
      title: "Data Science & AI",
      instructor: "Jane Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRY6ZRTxTGqZNYzHJuQKDqPZoXEs53ZtVsA&s"
    },
    {
      title: "Digital Marketing",
      instructor: "Emily Johnson",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxBvMMu6J8TWnjIWMgUzLkTj8G2JxFDGPhg&s"
    }
  ];
  

  const [feedback, setFeedback] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  // Handle input changes
  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = () => {
    if (feedback.name && feedback.comment && feedback.rating) {
      setFeedbacks([feedback, ...feedbacks]); // Prepend the new feedback
      setFeedback({ name: "", comment: "", rating: 0 }); // Reset input fields
      setShowFeedbackModal(false);
    } else {
      alert("Please fill all fields and give a rating.");
    }
  };
  

  return (
    <div className="about">
      <section className="intro">
        <h1>ADVANCED VIRTUVAL LEARNING HUB</h1>
        <p>
          Welcome to ADVANCED VIRTUAL LEARNING HUB, an innovative online platform that provides world-class
          courses designed to help you build essential skills in various domains.
        </p>
      </section>

      {/* Student Feedback Section */}
      <section className="student-feedback">
        <h2>Student Feedback</h2>
        <button variant="primary" onClick={() => setShowFeedbackModal(true)}>
          Share Your Feedback
        </button>

        {/* Feedback Cards */}
        <Row className="mt-4">
          {feedbacks.map((fb, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="feedback-card">
                <Card.Body>
                  <Card.Title>{fb.name}</Card.Title>
                  <Card.Text>"{fb.comment}"</Card.Text>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < fb.rating ? "gold" : "gray"} />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Feedback Modal */}
        <Modal show={showFeedbackModal} onHide={() => setShowFeedbackModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Share Your Feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form">
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={feedback.name}
                  onChange={handleFeedbackChange}
                />
              </Form.Group>
              <Form.Group controlId="formComment">
                <Form.Label>Your Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your feedback"
                  name="comment"
                  value={feedback.comment}
                  onChange={handleFeedbackChange}
                />
              </Form.Group>
              <Form.Group controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      color={feedback.rating > index ? "gold" : "gray"}
                      onClick={() => setFeedback({ ...feedback, rating: index + 1 })}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowFeedbackModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFeedbackSubmit}>
              Submit Feedback
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
      {/* Course Details Section */}
      <section className="course-details">
        <h2>Explore Our Courses</h2>
        <Carousel>
          {courseDetails.map((course, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={course.image} alt={course.title} />
              <Carousel.Caption>
                <h3>{course.title}</h3>
                <p>Instructor: {course.instructor}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Diverse Courses</Card.Title>
                <Card.Text>We offer a wide range of courses in various fields such as programming, finance, and marketing.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Expert Tutors</Card.Title>
                <Card.Text>Learn from the best with experienced professionals guiding you through the material.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Interactive Learning</Card.Title>
                <Card.Text>Get hands-on experience with real-world examples and interactive lessons.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I enroll in a course?</Accordion.Header>
            <Accordion.Body>Simply sign up, browse our courses, and click on the "Enroll" button to get started.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do I get a certificate after completing a course?</Accordion.Header>
            <Accordion.Body>Yes! Upon successful completion of a course, you will receive a certificate.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Are the courses free?</Accordion.Header>
            <Accordion.Body>We offer both free and paid courses. You can browse through the options and choose what suits you best.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};

export default About;
