import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentSidebar.css';
import {
  faBook,
  faBrain,
  faCartShopping,
  faHeadphones,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorContext } from '../../ColorContext/ColorContext';


const StudentSidebar = () => {

const { darkMode } = useContext(ColorContext);

  useEffect(() => {
    // Apply dark or light class to the body based on darkMode
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const [selectedNav, setSelectedNav] = useState(1); // Update default selected value if needed

  return (
    <nav className='sidebar'>
      <ul className="home">
        <li className={selectedNav === 1 ? 'navActive' : undefined} onClick={() => setSelectedNav(1)}>
          <Link to="/student/dashboard" className="navLink">
            <FontAwesomeIcon className="icon" icon={faBrain} />
            <span>Skills</span>
          </Link>
        </li>
        <li className={selectedNav === 2 ? 'navActive' : undefined} onClick={() => setSelectedNav(2)}>
          <Link to="/student/stucourses" className="navLink">
            <FontAwesomeIcon className="icon" icon={faBook} />
            <span>Courses</span>
          </Link>
        </li>
        <li className={selectedNav === 3 ? 'navActive' : undefined} onClick={() => setSelectedNav(3)}>
          <Link to="/student/purchased-course" className="navLink">
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            <span>Purchased Course</span>
          </Link>
        </li>
        {/* <li className={selectedNav === 4 ? 'navActive' : undefined} onClick={() => setSelectedNav(4)}>
          <Link to="/admin/liststudent" className="navLink">
            <FontAwesomeIcon className="icon" icon={faListAlt} />
            <span>Student List</span>
          </Link>
        </li> */}
        {/* <li className={selectedNav === 5 ? 'navActive' : undefined} onClick={() => setSelectedNav(5)}>
          <Link to="/admin/updatestudent" className="navLink">
            <FontAwesomeIcon className="icon" icon={faUpload} />
            <span>Update Student</span>
          </Link>
        </li> */}
        <li className={selectedNav === 6 ? 'navActive' : undefined} onClick={() => setSelectedNav(6)}>
          <Link to="/student/stuabout" className="navLink">
            <FontAwesomeIcon className="icon" icon={faInfoCircle} />
            <span>About us</span>
          </Link>
        </li>
        <li className={selectedNav === 7 ? 'navActive' : undefined} onClick={() => setSelectedNav(7)}>
          <Link to="/student/stucontact" className="navLink">
            <FontAwesomeIcon className="icon" icon={faHeadphones} />
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StudentSidebar;
