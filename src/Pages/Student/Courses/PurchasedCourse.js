import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from react-bootstrap
import "./PurchasedCourse.css";

const CoursePurchase = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course

  useEffect(() => {
    // Get the list of purchased courses from localStorage
    const courses = JSON.parse(localStorage.getItem("purchasedCourses")) || [];
    setPurchasedCourses(courses);
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course); // Set selected course when card is clicked
  };

  const handleCloseModal = () => {
    setSelectedCourse(null); // Close modal by clearing selected course
  };

  return (
    <div className="course-purchase">
      <h1>Your Purchased Courses</h1>
      <div className="courses-list">
        {purchasedCourses.length === 0 ? (
          <p>You haven't purchased any courses yet.</p>
        ) : (
          purchasedCourses.map((course, index) => (
            <div 
              key={index} 
              className="course-item" 
              onClick={() => handleCourseClick(course)} // Handle click
            >
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Price: {course.price}</p>
              <p>Course Expiry Date: {course.expiryDate}</p>
            </div>
          ))
        )}
      </div>

      {/* Modal to show course details when clicked */}
      {selectedCourse && (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={selectedCourse.image} 
              alt={selectedCourse.title} 
              className="course-details-image" 
            />
            <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
            <p><strong>Price:</strong> {selectedCourse.price}</p>
            <p><strong>Expiry Date:</strong> {selectedCourse.expiryDate}</p>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default CoursePurchase;
