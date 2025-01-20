import React from 'react';
import { Link } from 'react-router-dom';
import Students from "./logo.png";
import image from "./home.png";
import "./HomePage.css";

const Homepage = () => {
    return (
        <div
            className="container-fluid homepage"
            style={{
                backgroundImage: `url(${image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'white',  // Set the initial background color to white
                transition: 'background-color 0.5s ease' // Smooth transition for background color change
            }}
        >
            <nav className='nav'>
                <img src={Students} alt='logo' height={70} />
                <div className="button">
                    <Link to="/choose" className="bttn">
                        Login
                    </Link>
                </div>
            </nav>
            <div className="row w-100">
                {/* Left Column */}
                <div className="content-show col-12 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <div className="content-box">
                        <h1 className="title mb-4">
                            Welcome to
                            <br />
                            <strong> Advanced Virtual</strong>
                            <br />
                            <strong>Learning Hub</strong>
                        </h1>
                        <p className="description mb-5">
                            "Where knowledge meets innovation. Our platform is designed to make learning accessible, interactive, and engaging."
                        </p>

                        <div className="playstore">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.example"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcVEEdvM5N_Y3zGjoFxFN04eg1-WZM4dtAA&s"
                                    alt="Get it on Google Play"
                                    className="playstore-badge"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column (empty or add other content if needed) */}
                <div className="col-12 col-md-6"></div>
            </div>
        </div>
    );
};

export default Homepage;
