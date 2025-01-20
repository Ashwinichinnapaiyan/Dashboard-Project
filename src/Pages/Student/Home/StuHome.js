import React from "react";
import video from "./3209298-uhd_3840_2160_25fps.mp4"; // Replace with your own video file
import "./StuHome.css";

const Home = () => {
  return (
    <div className="home-page">
        {/* Main Content */}
        <div className="head-part">
          <h1 className="heading">
            Transform Your Future with <br />
            <span>"ADVANCED VIRTUAL LEARNING HUB"</span>
          </h1>
          <p>
            "Unlock your potential with industry-leading courses, expert instructors, and a platform designed to accelerate your career growth."
          </p>
        </div>
      
         <div className="video-section">
             <h2 className="h1">BEST TEACHING CENTRE</h2>
             <video loop autoPlay className="hero-video">
               <source src={video} type="video/mp4" />
               Your browser does not support the video tag.
             </video>
             </div>

      {/* Introduction Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          At Advanced Virtual Learning Hub, we don't just teach; we provide an immersive experience where learners develop practical skills and gain expertise in real-world applications.
        </p>
        <p>
          Our courses are carefully crafted and regularly updated to keep pace with industry trends. From hands-on projects to personalized mentorship, we ensure you stay ahead of the curve in your chosen field.
        </p>
      </section>

      {/* Featured Courses Section */}
      <section className="courses-enroll-section">
        <h2>Featured Courses</h2>
        <div className="course-enroll-cards">
          <div className="course-enroll-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUG1q1NO6Ef5p9OwZqTEMtqPSWGkwFzpjig&s" alt="Course 1" />
            <h3>Full Stack Web Development with React & Node.js</h3>
            <p>Build responsive and interactive web applications using the latest frontend and backend technologies.</p>
            <button>Enroll Now</button>
          </div>
          <div className="course-enroll-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRY6ZRTxTGqZNYzHJuQKDqPZoXEs53ZtVsA&s" alt="Course 2" />
            <h3>Data Science & Machine Learning with Python</h3>
            <p>Understand data analysis, machine learning models, and how to create solutions from raw data using Python.</p>
            <button>Enroll Now</button>
          </div>
          <div className="course-enroll-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxBvMMu6J8TWnjIWMgUzLkTj8G2JxFDGPhg&s" alt="Course 3" />
            <h3>Digital Marketing & SEO Optimization</h3>
            <p>Master the art of digital marketing, SEO techniques, and how to grow your business in the digital world.</p>
            <button>Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Thanks to the comprehensive and easy-to-follow courses, I was able to land a job in web development within 3 months!"</p>
            <span>- Emily S., Web Developer</span>
          </div>
          <div className="testimonial">
            <p>"The mentorship and real-world projects were a game-changer. I not only learned the theory but also how to apply it in my career."</p>
            <span>- Mark T., Data Analyst</span>
          </div>
          <div className="testimonial">
            <p>"I gained the confidence and skills to run successful marketing campaigns that boosted my startup's online presence."</p>
            <span>- Sophia L., Entrepreneur</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>What You Get</h2>
        <ul>
          <li><strong>Hands-On Learning:</strong> Work on real-world projects to enhance your skills.</li>
          <li><strong>Expert Mentorship:</strong> Receive guidance from industry professionals who will help you succeed.</li>
          <li><strong>Flexible Learning:</strong> Learn at your own pace with 24/7 access to course materials.</li>
          <li><strong>Job Readiness:</strong> Our courses are designed to help you become career-ready with industry-recognized certifications.</li>
          <li><strong>Community Support:</strong> Join a vibrant learning community where you can connect with fellow learners, share knowledge, and collaborate.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Thousands of learners have transformed their careers through our platform. Don’t wait—start building your skills today!</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Home;








// <div className="home-part">
// {/* Main Content */}
// <div className="head-part">
//   <h1 className="heading">
//     Develop Your Skills with <br />
//     <span>"ADVANCED VIRTUAL LEARNING HUB"</span>
//   </h1>
//   <p>
//     "Unlock your potential and embrace the future<br />
//     Advanced Virtual Learning Hub is where growth begins."
//   </p>
// </div>
// </div>