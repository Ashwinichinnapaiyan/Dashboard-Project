// ./Pages/Student/StudentDashboard.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import StudentSidebar from '../../components/StudentSidebar/StudentSidebar';
import StuHome from './Home/StuHome';
import StuCourses from './Courses/StuCourses';
import PurchasedCourse from './Courses/PurchasedCourse';
import About from './About/About';
import Contact from './Contact/Contact';

const StudentDashboard = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="main-layout">
        <StudentSidebar />
        <div className="content-area">
          <Routes>
            <Route index element={<StuHome />} />
            <Route path="/dashboard" element={<StuHome />} />
            <Route path="/stucourses" element={<StuCourses />} />
            <Route path="/purchased-course" element={<PurchasedCourse />} />
            <Route path="/stuabout" element={<About />} />
            <Route path="/stucontact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
