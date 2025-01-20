import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import image from "./logo.png"; // Use your actual logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (role === "Admin" && email === "admin@gmail.com" && password === "admin@123") {
      if (rememberMe) localStorage.setItem("adminEmail", email);
      navigate("/admin/dashboard");
    } else if (role === "Student") {
      const registeredStudent = JSON.parse(localStorage.getItem("registeredStudent"));

      if (registeredStudent && registeredStudent.email === email && registeredStudent.password === password) {
        if (rememberMe) localStorage.setItem("studentEmail", email);
        navigate("/student/dashboard");
      } else {
        setError("Invalid email or password. Please register first.");
      }
    } else {
      setError("Invalid role.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-box">
        <h2 className="login-heading">{role} Login</h2>
        <form onSubmit={handleLogin} className="form-login">
          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faEnvelope} />  Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faLock} />  Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Register & Back Links */}
        {role === "Student" && (
          <div className="register-prompt">
            Don't have an account? <Link to="/pre-register">Register</Link>
          </div>
        )}

        <div className="back-link">
          <Link to="/choose">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image-box">
        <img src={image} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default LoginPage;
