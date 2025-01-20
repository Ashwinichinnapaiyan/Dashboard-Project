import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import ChooseRolePage from './Pages/ChooseRolePage';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Admin/Dashboard';
import StudentDashboard from './Pages/Student/StudentDashboard';
import { ColorContext } from './ColorContext/ColorContext'; // Import ColorContext
import PreRegisterPage from './PreRegisterPage';
// import OtpVerificationPage from './OtpVerificationPage';
import './App.css';
import { AuthProvider } from './AuthContext/AuthContext';

function App() {
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

  return (
    <div className="app">
   <AuthProvider>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseRolePage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/pre-register" element={<PreRegisterPage />} />
          {/* <Route path="/otp-verification" element={<OtpVerificationPage />} /> */}
          <Route path="/admin/*" element={<Dashboard />} /> {/* Nested routes */}
          <Route path="/student/*" element={<StudentDashboard />} /> {/* Nested routes */}
        </Routes>
      </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
