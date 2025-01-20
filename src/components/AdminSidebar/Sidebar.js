import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  faBook,
  faBrain,
  faHeadphones,
  faHomeUser,
  faInfoCircle,
  faListAlt,
  faUpload,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [selectedNav, setSelectedNav] = useState(1); // Update default selected value if needed

  return (
    <nav className='sidebar'>
      <ul className="home">
        <li className={selectedNav === 1 ? 'navActive' : undefined} onClick={() => setSelectedNav(1)}>
          <Link to="/admin/dashboard" className="navLink">
            <FontAwesomeIcon className="icon" icon={faBrain} />
            <span>Skills</span>
          </Link>
        </li>
        <li className={selectedNav === 2 ? 'navActive' : undefined} onClick={() => setSelectedNav(2)}>
          <Link to="/admin/courses" className="navLink">
            <FontAwesomeIcon className="icon" icon={faBook} />
            <span>Courses</span>
          </Link>
        </li>
        <li className={selectedNav === 3 ? 'navActive' : undefined} onClick={() => setSelectedNav(3)}>
          <Link to="/admin/addstudent" className="navLink">
            <FontAwesomeIcon className="icon" icon={faUserPlus} />
            <span>Add Student</span>
          </Link>
        </li>
        <li className={selectedNav === 4 ? 'navActive' : undefined} onClick={() => setSelectedNav(4)}>
          <Link to="/admin/liststudent" className="navLink">
            <FontAwesomeIcon className="icon" icon={faListAlt} />
            <span>Student List</span>
          </Link>
        </li>
        {/* <li className={selectedNav === 5 ? 'navActive' : undefined} onClick={() => setSelectedNav(5)}>
          <Link to="/admin/updatestudent" className="navLink">
            <FontAwesomeIcon className="icon" icon={faUpload} />
            <span>Update Student</span>
          </Link>
        </li> */}
        <li className={selectedNav === 6 ? 'navActive' : undefined} onClick={() => setSelectedNav(6)}>
          <Link to="/admin/about" className="navLink">
            <FontAwesomeIcon className="icon" icon={faInfoCircle} />
            <span>About us</span>
          </Link>
        </li>
        <li className={selectedNav === 7 ? 'navActive' : undefined} onClick={() => setSelectedNav(7)}>
          <Link to="/admin/contact" className="navLink">
            <FontAwesomeIcon className="icon" icon={faHeadphones} />
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
