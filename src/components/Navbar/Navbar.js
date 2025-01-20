import React, { useContext, useState, useEffect } from 'react';
import { ColorContext } from '../../ColorContext/ColorContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faSearch, faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import image from "./logo.png";
import './Navbar.css';

const Navbar = () => {
  const { darkMode, dispatch } = useContext(ColorContext);
  const { state, dispatch: authDispatch } = useAuth();  // AuthContext
  const navigate = useNavigate();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);  // State to toggle the logout confirmation
  const [searchActive, setSearchActive] = useState(localStorage.getItem('searchActive') === 'true');  // Fetch search bar visibility from localStorage
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');  // Fetch search query from localStorage
  const [filteredStudents, setFilteredStudents] = useState([]);  // State to store filtered students
  const [students, setStudents] = useState([]);  // State to store all students data

  useEffect(() => {
    // Fetch students from API or server
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:5000/api/students');
      const data = await response.json();
      setStudents(data);
      setFilteredStudents(data); // Initially display all students
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    // Whenever searchQuery or searchActive changes, store them in localStorage
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('searchActive', searchActive.toString());
  }, [searchQuery, searchActive]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE' });
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);  // Show the confirmation when user clicks on the profile icon
  };

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT' });  // Dispatch the logout action
    localStorage.removeItem('userToken');  // Clear session data from localStorage
    navigate('/');  // Redirect to the login page
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);  // Close the confirmation without logging out
  };

  const handleSearchClick = () => {
    setSearchActive(!searchActive);  // Toggle search bar visibility
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the students based on the search query
    const filtered = students.filter(student =>
      student.student_name.toLowerCase().includes(query.toLowerCase()) ||
      student.student_id.toLowerCase().includes(query.toLowerCase())  // You can extend this to other fields as well
    );
    setFilteredStudents(filtered);  // Update the filtered list
  };

  const handleAddStudent = async (student) => {
    // Adding new student logic (similar to your AddStudent.js form)
    const response = await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      const newStudent = await response.json();
      setStudents([...students, newStudent]);  // Update the student list after adding
      setFilteredStudents([...students, newStudent]);  // Update the filtered list
    }
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo-part">
        <img src={image} alt="logo" className="logo" />
      </div>
      <div className="icon-part">
        {/* Toggle search bar visibility on click */}
        <div className="search" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        
        {/* Conditionally render the search bar if active
        {searchActive && (
          <input
            type="text"
            className="search-bar"
            placeholder="Search by Name or ID..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        )} */}

        <div className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </div>
        <div className="profile" onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>

      {/* Conditionally render the logout confirmation */}
      {showLogoutConfirm && (
        <div className="logout-confirmation">
          <p>Are you sure you want to logout?</p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleCancelLogout}>Cancel</button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
