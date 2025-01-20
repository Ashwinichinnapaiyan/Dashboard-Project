import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./Home/Home"
import Course from "./Courses/Course";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from "../../components/AdminSidebar/Sidebar";
import AddStudent from "./AddStudent/App";
import "./Dashboard.css";
import ListStudent from './liststudent/ListStudent';

const Dashboard = () => {

  const [students, setStudents] = useState([]);

  const refreshStudentList = async () => {
    const response = await fetch('http://localhost:5000/api/students');
    const data = await response.json();
    setStudents(data); // Update the student list
  };


  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className="dashboard">
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <div className="main-layout">
        <Sidebar hidden={isSidebarHidden} />
        <div className="content-area">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/courses" element={<Course />} />
           
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/liststudent" element={<ListStudent />} />

            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
