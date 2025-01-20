import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './StuCourses.css'; // Custom stylesheet

const StuCourses = () => {
 
const [categories, setCategories] = useState({
  Programming: [
    {
      title: "Mern Stack Development",
      instructor: "Ms. Ashwini",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s",
      price: "₹12,450",
      expiryMonths: 12,
    },
    {
      title: "Data Science",
      instructor: "Mr. Vinoth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRY6ZRTxTGqZNYzHJuQKDqPZoXEs53ZtVsA&s",
      price: "₹16,600",
      expiryMonths: 12,
    },
    {
      title: " WordPress",
      instructor: "Mr. Krithik",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2022/03/30/web-development-using-wordpress-01_1.png",
      price: "₹9,960",
      expiryMonths: 12,
    },
    {
      title: "Data Analytics | Tamil",
      instructor: "Ms. Sanjana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ilmGbrSYrwnEU4_n8W3nATKeZCbLeCXReA&s",
      price: "₹14,110",
      expiryMonths: 12,
    },
  ],
  LanguageLearning: [
    {
      title: "English - தமிழ்",
      instructor: "Ms. Thilaga",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0Mr41gbQmpmT2Y1PolUHKteixXFPpdLQCw&s",
      price: "₹4,150",
      expiryMonths: 12,
    },
    {
      title: "Tamil to English Fluency Program",
      instructor: "Swetha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6Wvw5ux_qE6MiaAMp2KCyGbU_1RYlvwVrA&s",
      price: "₹4,980",
      expiryMonths: 12,
    },
    {
      title: "Employability and Placement Training",
      instructor: "Joy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOLnfa1PLRp8BX5gEiOq2VBQ1-01mDGBqGg&s",
      price: "₹6,900",
      expiryMonths: 12,
    },
    {
      title: "AI Tutorial",
      instructor: "AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJwZK5iMjbA8TMbI5FbCpCdJp9gIVWH2XDg&s",
      price: "₹8,280",
      expiryMonths: 12,
    },
  ],
  CodingDevelopment: [
    {
      title: "Data Science and Machine Learning",
      instructor: "AVL Hub",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypzF5US55MoJm77OnJxNdGAp9_oL8Ak3vlw&s",
      price: "₹20,750",
      expiryMonths: 12,
    },
    {
      title: "Full-Stack Web Development",
      instructor: "AVL Hub",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s",
      price: "₹16,600",
      expiryMonths: 12,
    },
    {
      title: "Web Development Using WordPress",
      instructor: "AVL Hub",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2022/03/30/web-development-using-wordpress-01_1.png",
      price: "₹15,060",
      expiryMonths: 12,
    },
    {
      title: "React Native Development",
      instructor: "AVL Hub",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgcXvwt7_XfsK3os99JTAXuaEtpwoM1uDQA&s",
      price: "₹18,300",
      expiryMonths: 12,
    },
  ],
  TradingPersonalFinance: [
    {
      title: "Stock Market 360",
      instructor: "Shanthi",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2023/08/22/Stock-Market-360-01.png",
      price: "₹12,450",
      expiryMonths: 12,
    },
    {
      title: "Investment Essentials: 2-Day Live Workshop",
      instructor: "Nagaraj",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/31/Investment_Essentials.png",
      price: "₹20,750",
      expiryMonths: 12,
    },
    {
      title: "Stock Market Integrated Course - Tamil",
      instructor: "Nagaraj",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/07/01/Stock-Market-Integrated-Course-01.png",
      price: "₹16,600",
      expiryMonths: 12,
    },
    {
      title: "Stock Market Basics",
      instructor: "Nagaraj",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/02/Stock_market__Basic0_1.png",
      price: "₹10,790",
      expiryMonths: 12,
    },
  ],
  CommerceAccounting: [
    {
      title: "SAP Material Management",
      instructor: "AVL Hub",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur-nyclG8TcS7Gc9mjZ1XuBxgpAfyzxkYVQ&s",
      price: "₹24,900",
      expiryMonths: 12,
    },
    {
      title: "PwC Certified Tax Professional - Tamil",
      instructor: "PwC",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/07/09/PwC_Certified_Tax_Professional_01.png",
      price: "₹29,050",
      expiryMonths: 12,
    },
    {
      title: "Tally Essential",
      instructor: "Santhosh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvMFtFY8UCDFryqfPSXDh69DPPU3yqKEwfw&s",
      price: "₹6,900",
      expiryMonths: 12,
    },
    {
      title: "SAP Finance & Controlling - Tamil",
      instructor: "AVL Hub",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZetQoSow47msOqE1vcaVNIBrchkxcuso4mg&s",
      price: "₹20,750",
      expiryMonths: 12,
    },
  ],
  EngineeringUpskilling: [
    {
      title: "Quantity Surveying Tamil",
      instructor: "Janagi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP98KugcJNxg_GfXxW23E7QPJR9L1BUVmsyA&s",
      price: "₹15,060",
      expiryMonths: 12,
    },
    {
      title: "AutoCAD Training Tamil",
      instructor: "Arun",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06sdmp5Qb5vq3KRF6TkF3GP6Cbk5VtO4MHQ&s",
      price: "₹18,300",
      expiryMonths: 12,
    },
    {
      title: "Civil Engineering Project Management",
      instructor: "Karthik",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFtV-T-UK24MfBGdXSbcEnrs1rFQGBKSKXg&s",
      price: "₹20,750",
      expiryMonths: 12,
    },
  ],
  CareerDevelopment: [
    {
      title: "Campus to Corporate",
      instructor: "Mr. Vengat",
      image: "https://cloudfront.entri.app/media/pack_thumbnails/2024/12/18/caree_development.png",
      price: "₹6,900",
      expiryMonths: 12,
    },
  ],
  SalesMarketing: [
    {
      title: "Digital Marketing",
      instructor: "Sidin Vadukut",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxBvMMu6J8TWnjIWMgUzLkTj8G2JxFDGPhg&s",
      price: "₹12,450",
      expiryMonths: 12,
    },
  ],
});

const [showPaymentModal, setShowPaymentModal] = useState(false);
const [showCourseDetailsModal, setShowCourseDetailsModal] = useState(false); // Add modal for course details
const [selectedCourse, setSelectedCourse] = useState(null);
const [cardDetails, setCardDetails] = useState({
  cardNumber: "",
  cardHolder: "",
  expiryDate: "",
  cvv: "",
});

const navigate = useNavigate();

const handlePaymentShow = (course) => {
  setSelectedCourse(course);
  setShowPaymentModal(true);
};

const handleCourseDetailsShow = (course) => {
  setSelectedCourse(course);
  setShowCourseDetailsModal(true); // Show the course details modal
};

const handleCardDetailChange = (e) => {
  setCardDetails({
    ...cardDetails,
    [e.target.name]: e.target.value,
  });
};

const validateCardExpiry = (expiry) => {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
  return regex.test(expiry);
};

const getCourseExpiryDate = (months) => {
  let date = new Date();
  date.setMonth(date.getMonth() + months);
  return date.toLocaleDateString();
};

const handlePurchase = () => {
  if (!validateCardExpiry(cardDetails.expiryDate)) {
    alert("Invalid card expiry date. Use MM/YY format.");
    return;
  }

  const existingCourses = JSON.parse(localStorage.getItem("purchasedCourses")) || [];
  existingCourses.push({
    ...selectedCourse,
    expiryDate: getCourseExpiryDate(selectedCourse.expiryMonths),
  });

  localStorage.setItem("purchasedCourses", JSON.stringify(existingCourses));

  alert(`Successfully purchased ${selectedCourse.title}`);
  setShowPaymentModal(false);
  navigate("/student/purchased-course");
};

return (
  <div className="courses">
    <h1 className="courses-title">Explore Courses</h1>
    <div className="courses-sections">
      {Object.keys(categories).map((category) => (
        <div key={category} className="courses-section">
          <h2 className="courses-section-title">{category.replace(/([A-Z])/g, " $1").trim()}</h2>
          <div className="courses-cards-container">
            {categories[category].map((course) => (
              <div className="course-card" key={course.title}>
                <img src={course.image} alt={course.title} className="course-card-image" />
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-instructor">By {course.instructor}</p>
                <p className="course-card-price">Price: {course.price}</p>
                <Button variant="info" onClick={() => handleCourseDetailsShow(course)} className="view-details-btn">
                  View Details
                </Button>
                <Button variant="success" onClick={() => handlePaymentShow(course)} className="buy-now-btn">
                  Buy Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Course Details Modal */}
    <Modal show={showCourseDetailsModal} onHide={() => setShowCourseDetailsModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Course Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedCourse && (
          <>
            <h3>{selectedCourse.title}</h3>
            <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
            <p><strong>Price:</strong> {selectedCourse.price}</p>
            <p><strong>Course Duration:</strong> {selectedCourse.expiryMonths} months</p>
            <img src={selectedCourse.image} alt={selectedCourse.title} className="course-detail-image" />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCourseDetailsModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    {/* Payment Modal */}
    <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Payment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="•••• •••• •••• ••••"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailChange}
              maxLength="16"
            />
          </Form.Group>

          <Form.Group controlId="formCardHolder">
            <Form.Label>Card Holder</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter card holder name"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleCardDetailChange}
            />
          </Form.Group>

          <div className="expiry-cvv-group">
            <Form.Group controlId="formExpiryDate">
              <Form.Label>Card Expiry Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailChange}
              />
            </Form.Group>

            <Form.Group controlId="formCvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="•••"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailChange}
                maxLength="3"
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handlePurchase}>
          Complete Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
};

export default StuCourses;