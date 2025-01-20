import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseRolePage.css';
import { faGraduationCap, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videoSource from '../images/teacher-student.mp4'; // Import the uploaded video

const ChooseRolePage = () => {
  return (
    <div className="choose-role-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Role Selection */}
      <div className="role-buttons">
      <div className="role-card">
          <Link to="/login/Student" className="role-link">
            <FontAwesomeIcon className="icon" icon={faGraduationCap} /><br />
            <h2 className="h2">Student</h2>
            <p>Login as a student to explore courses.</p>
          </Link>
        </div>
        <div className="role-card">
          <Link to="/login/Admin" className="role-link">
            <FontAwesomeIcon className="icon" icon={faUserCircle} /><br />
            <h2 className="h2">Admin</h2>
            <p>Login as an admin to manage student details.</p>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default ChooseRolePage;
