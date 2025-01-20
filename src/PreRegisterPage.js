import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PreRegisterPage.css"  



const PreRegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to generate and send OTP (simulated)
  const sendOtp = async () => {
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }

    setError('');
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    setGeneratedOtp(newOtp);
    localStorage.setItem('emailOtp', newOtp);
    localStorage.setItem('registeredEmail', email);

    alert(`OTP Sent to ${email}: ${newOtp}`); // Simulated email OTP (Replace with actual email API)
    setOtpSent(true);
  };

  // Function to verify OTP
  const verifyOtp = () => {
    const storedOtp = localStorage.getItem('emailOtp');
    
    if (otp === storedOtp) {
      localStorage.setItem('registeredStudent', JSON.stringify({ email, password }));
      setSuccessMessage('Registration Successful! Redirecting...');
      
      // Wait 2 seconds to show the success message
      setTimeout(() => {
        navigate('/choose'); // Navigate to the choose role page after success
      }, 1000); // 2-second delay before navigation
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  // Handle form submission for registration
  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !password ) {
      setError('All fields are required.');
      return;
    }

    
    sendOtp(); // Send OTP to email after form validation
  };

  return (
    <div className="pre-register-container">
      <div className="card ">
        <h2 className="text-center mb-4">Student Registration</h2>

        {!otpSent ? (
          <form onSubmit={handleRegister} className='form'>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn ">
              Send OTP
            </button>
          </form>
        ) : (
          <div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                id="otp"
                placeholder="Enter the verification code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="button" className="btn " onClick={verifyOtp}>
              Verify OTP
            </button>
          </div>
        )}

        {successMessage && <div className="alert ">{successMessage}</div>}

        <div className="text-center">
          <a href="/choose">Back</a>
        </div>
      </div>
    </div>
  );
};

export default PreRegisterPage;
