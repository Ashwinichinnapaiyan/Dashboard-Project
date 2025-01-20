import React, { useState } from "react";
import "./Course.css";
import { Button, Modal, Form } from "react-bootstrap";

const Course = () => {
  const [categories, setCategories] = useState({
    Programming: [
      {
        title: "Mern Stack Development",
        instructor: "Ms. Ashwini",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s",
      },
      {
        title: "Data Science",
        instructor: "Mr. Vinoth",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRY6ZRTxTGqZNYzHJuQKDqPZoXEs53ZtVsA&s",
      },
      {
        title: "Web Development Using WordPress",
        instructor: "Mr. Krithik",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2022/03/30/web-development-using-wordpress-01_1.png",
      },
      {
        title: "Data Analytics | Tamil",
        instructor: "Ms. Sanjana",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ilmGbrSYrwnEU4_n8W3nATKeZCbLeCXReA&s",
      },
    ],
    LanguageLearning: [
      {
        title: "English - தமிழ்",
        instructor: "Ms. Thilaga",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0Mr41gbQmpmT2Y1PolUHKteixXFPpdLQCw&s",
      },
      {
        title: "Tamil to English Fluency Program",
        instructor: "Swetha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6Wvw5ux_qE6MiaAMp2KCyGbU_1RYlvwVrA&s",
      },
      {
        title: "Employability and Placement Training",
        instructor: "Joy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOLnfa1PLRp8BX5gEiOq2VBQ1-01mDGBqGg&s",
      },
      {
        title: "AI Tutorial",
        instructor: "AI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJwZK5iMjbA8TMbI5FbCpCdJp9gIVWH2XDg&s",
      },
    ],
    CodingDevelopment: [
      {
        title: "Data Science and Machine Learning",
        instructor: "AVL Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypzF5US55MoJm77OnJxNdGAp9_oL8Ak3vlw&s",
      },
      {
        title: "Full-Stack Web Development",
        instructor: "AVL Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s",
      },
      {
        title: "Web Development Using WordPress",
        instructor: "AVL Hub",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2022/03/30/web-development-using-wordpress-01_1.png",
      },
      {
        title: "React Native Development",
        instructor: "AVL Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgcXvwt7_XfsK3os99JTAXuaEtpwoM1uDQA&s",
      },
    ],
    TradingPersonalFinance: [
      {
        title: "Stock Market 360",
        instructor: "Shanthi",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2023/08/22/Stock-Market-360-01.png",
      },
      {
        title: "Investment Essentials: 2-Day Live Workshop",
        instructor: "Nagaraj",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/31/Investment_Essentials.png",
      },
      {
        title: "Stock Market Integrated Course - Tamil",
        instructor: "Nagaraj",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/07/01/Stock-Market-Integrated-Course-01.png",
      },
      {
        title: "Stock Market Basics",
        instructor: "Nagaraj",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/02/Stock_market__Basic0_1.png",
      },
    ],
    CommerceAccounting: [
      {
        title: "SAP Material Management",
        instructor: " AVL Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur-nyclG8TcS7Gc9mjZ1XuBxgpAfyzxkYVQ&s",
      },
      {
        title: "PwC Certified Tax Professional - Tamil",
        instructor: "PwC",
        image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/07/09/PwC_Certified_Tax_Professional_01.png",
      },
      {
        title: "Tally Essential",
        instructor: " Santhosh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvMFtFY8UCDFryqfPSXDh69DPPU3yqKEwfw&s",
      },
      {
        title: "SAP Finance & Controlling - Tamil",
        instructor: "AVL Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZetQoSow47msOqE1vcaVNIBrchkxcuso4mg&s",
      },
    ],
      EngineeringUpskilling: [
        {
          title: "Quantity Surveying Tamil",
          instructor: "Janagi",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP98KugcJNxg_GfXxW23E7QPJR9L1BUVmsyA&s",
        },
        {
          title: "AutoCAD Training Tamil",
          instructor: "Arun",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06sdmp5Qb5vq3KRF6TkF3GP6Cbk5VtO4MHQ&s",
        },
        {
          title: "Civil Engineering Project Management",
          instructor: "Karthik",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFtV-T-UK24MfBGdXSbcEnrs1rFQGBKSKXg&s",
        },
      ],
      CareerDevelopment: [
        {
          title: "Campus to Corporate",
          instructor: "Mr. Vengat",
          image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/18/caree_development.png",
        },
      ],
      SalesMarketing: [
        {
          title: "Digital Marketing",
          instructor: "Sidin Vadukut",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxBvMMu6J8TWnjIWMgUzLkTj8G2JxFDGPhg&s",
        },
      ],
    Business: [], // Add more fields as needed
  });
  
  const [showModal, setShowModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // state for selected course
  const [newCourse, setNewCourse] = useState({
    title: "",
    instructor: "",
    image: "",
    video: "",
    category: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleAddCourseClose = () => setShowAddCourseModal(false);
  const handleAddCourseShow = () => setShowAddCourseModal(true);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true); // Open modal when card is clicked
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleCourseSubmit = () => {
    const { title, instructor, image, video, category } = newCourse;

    if (!title.trim() || !instructor.trim() || !category || !image.trim() || !video.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };

      if (!updatedCategories[category]) {
        updatedCategories[category] = [];
      }

      // Check for duplicates before modifying the state
      const isDuplicate = updatedCategories[category].some(
        (course) => course.title.toLowerCase() === title.toLowerCase()
      );

      if (isDuplicate) {
        // alert(`Course "${title}" already exists in the "${category}" category!`);
        return prevCategories; // Return previous state without changes
      }

      updatedCategories[category].push({
        title,
        instructor,
        image: image || "https://via.placeholder.com/150",
        video: video,
        id: Date.now(),
      });

      alert(`Course "${title}" added successfully to "${category}"!`); // Success message
      return updatedCategories;
    });

    // Reset form fields and close the modal
    setNewCourse({
      title: "",
      instructor: "",
      image: "",
      video: "",
      category: "",
    });
    setShowAddCourseModal(false);
  };

  return (
  
<div className="course">
  <h1 style={{ fontFamily: "serif", fontWeight: "bold",fontSize:"40px"}}>
    Explore Courses
  </h1>
  <br />
  <button className="add-button" variant="primary" onClick={handleAddCourseShow}>
    Add Course
  </button>
  <div className="sections">
  <div className="section">
    <h2 className="section-title">Programming</h2>
    <div className="cards-container">
      {categories.Programming.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Language Learning</h2>
    <div className="cards-container">
      {categories.LanguageLearning.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Coding & Development</h2>
    <div className="cards-container">
      {categories.CodingDevelopment.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Trading & Personal Finance</h2>
    <div className="cards-container">
      {categories.TradingPersonalFinance.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Commerce & Accounting</h2>
    <div className="cards-container">
      {categories.CommerceAccounting.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Engineering & Upskilling</h2>
    <div className="cards-container">
      {categories.EngineeringUpskilling.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Career Development</h2>
    <div className="cards-container">
      {categories.CareerDevelopment.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Sales & Marketing</h2>
    <div className="cards-container">
      {categories.SalesMarketing.map((course) => (
        <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>By {course.instructor}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="section">
    <h2 className="section-title">Business</h2>
    <div className="cards-container">
      {categories.Business.length > 0 ? (
        categories.Business.map((course) => (
          <div className="card" key={course.title} onClick={() => handleCardClick(course)}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>By {course.instructor}</p>
          </div>
        ))
      ) : (
        <p>No courses available in this category.</p>
      )}
    </div>
  </div>
</div>


  {/* Modal to show course details */}
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{selectedCourse?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>Instructor: {selectedCourse?.instructor}</h5>
      <div className="course-image">
        <img
          src={selectedCourse?.image}
          alt={selectedCourse?.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <h6>About Video:</h6>
      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src={selectedCourse?.video}
          title="Sample Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* Modal to Add New Course */}
  <Modal show={showAddCourseModal} onHide={handleAddCourseClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add New Course</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formCourseTitle">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course title"
            name="title"
            value={newCourse.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formInstructor">
          <Form.Label>Instructor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instructor name"
            name="instructor"
            value={newCourse.instructor}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="image"
            value={newCourse.image}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formVideo">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter video URL"
            name="video"
            value={newCourse.video}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={newCourse.category}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat.replace(/([A-Z])/g, ' $1').trim()} {/* Properly format categories */}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleAddCourseClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleCourseSubmit}>
        Add Course
      </Button>
    </Modal.Footer>
  </Modal>
</div>


  );
};

export default Course;