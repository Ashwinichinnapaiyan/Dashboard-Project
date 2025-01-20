import React, { useState } from 'react';
import { Button, InputGroup, Toaster } from '@blueprintjs/core';
import Select from 'react-select';
import './App.css';

const AppToaster = Toaster.create({
    position: "top"
});

function App() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newMobileNo, setNewMobileNo] = useState("");
    const [newCourse, setNewCourse] = useState("");
    const [newCourseAmount, setNewCourseAmount] = useState("");
    const [newExpiryDate, setNewExpiryDate] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [students, setStudents] = useState([]);



    
    const courseOptions =  [
      { "value": "Mern_Stack_Development", "label": "Mern Stack Development", "courseAmount": "₹12,450", "expiryDate": "12 months" },
      { "value": "Data_Science", "label": "Data Science", "courseAmount": "₹16,600", "expiryDate": "12 months" },
      { "value": "WordPress", "label": "WordPress", "courseAmount": "₹9,960", "expiryDate": "12 months" },
      { "value": "Data_Analytics_|_Tamil", "label": "Data Analytics | Tamil", "courseAmount": "₹14,110", "expiryDate": "12 months" },
      { "value": "English_-_தமிழ்", "label": "English - தமிழ்", "courseAmount": "₹4,150", "expiryDate": "12 months" },
      { "value": "Tamil_to_English_Fluency_Program", "label": "Tamil to English Fluency Program", "courseAmount": "₹4,980", "expiryDate": "12 months" },
      { "value": "Employability_and_Placement_Training", "label": "Employability and Placement Training", "courseAmount": "₹6,900", "expiryDate": "12 months" },
      { "value": "AI_Tutorial", "label": "AI Tutorial", "courseAmount": "₹8,280", "expiryDate": "12 months" },
      { "value": "Data_Science_and_Machine_Learning", "label": "Data Science and Machine Learning", "courseAmount": "₹20,750", "expiryDate": "12 months" },
      { "value": "Full-Stack_Web_Development", "label": "Full-Stack Web Development", "courseAmount": "₹16,600", "expiryDate": "12 months" },
      { "value": "Web_Development_Using_WordPress", "label": "Web Development Using WordPress", "courseAmount": "₹15,060", "expiryDate": "12 months" },
      { "value": "React_Native_Development", "label": "React Native Development", "courseAmount": "₹18,300", "expiryDate": "12 months" },
      { "value": "Stock_Market_360", "label": "Stock Market 360", "courseAmount": "₹12,450", "expiryDate": "12 months" },
      { "value": "Investment_Essentials:_2-Day_Live_Workshop", "label": "Investment Essentials: 2-Day Live Workshop", "courseAmount": "₹20,750", "expiryDate": "12 months" },
      { "value": "Stock_Market_Integrated_Course_-_Tamil", "label": "Stock Market Integrated Course - Tamil", "courseAmount": "₹16,600", "expiryDate": "12 months" },
      { "value": "Stock_Market_Basics", "label": "Stock Market Basics", "courseAmount": "₹10,790", "expiryDate": "12 months" },
      { "value": "SAP_Material_Management", "label": "SAP Material Management", "courseAmount": "₹24,900", "expiryDate": "12 months" },
      { "value": "PwC_Certified_Tax_Professional_-_Tamil", "label": "PwC Certified Tax Professional - Tamil", "courseAmount": "₹29,050", "expiryDate": "12 months" },
      { "value": "Tally_Essential", "label": "Tally Essential", "courseAmount": "₹6,900", "expiryDate": "12 months" },
      { "value": "SAP_Finance_&_Controlling_-_Tamil", "label": "SAP Finance & Controlling - Tamil", "courseAmount": "₹20,750", "expiryDate": "12 months" },
      { "value": "Quantity_Surveying_Tamil", "label": "Quantity Surveying Tamil", "courseAmount": "₹15,060", "expiryDate": "12 months" },
      { "value": "AutoCAD_Training_Tamil", "label": "AutoCAD Training Tamil", "courseAmount": "₹18,300", "expiryDate": "12 months" },
      { "value": "Civil_Engineering_Project_Management", "label": "Civil Engineering Project Management", "courseAmount": "₹20,750", "expiryDate": "12 months" },
      { "value": "Campus_to_Corporate", "label": "Campus to Corporate", "courseAmount": "₹6,900", "expiryDate": "12 months" },
      { "value": "Digital_Marketing", "label": "Digital Marketing", "courseAmount": "₹12,450", "expiryDate": "12 months" }
    ]
    

    const validateForm = () => {
      let errors = {};
      if (!newName) errors.name = "Name is required";
      if (!newAge || isNaN(newAge)) errors.age = "Valid age is required";
      if (!newAddress) errors.address = "Address is required";
      if (!newMobileNo || !/^\d{10}$/.test(newMobileNo)) errors.mobileNo = "Valid mobile number is required";
      if (!newCourse) errors.course = "Course is required";
      if (!newCourseAmount || isNaN(newCourseAmount.replace('₹', '').replace(',', ''))) errors.courseAmount = "Valid course amount is required";
      if (!newExpiryDate) errors.expiryDate = "Expiry date is required";

      setFormErrors(errors);
      return Object.keys(errors).length === 0;
  };

  const addStudent = () => {
      if (validateForm()) {
          const newStudent = {
              student_name: newName.trim(),
              student_age: newAge.trim(),
              student_address: newAddress.trim(),
              student_mobileNo: newMobileNo.trim(),
              student_course: newCourse.trim(),
              student_courseAmount: newCourseAmount.trim(),
              student_expiryDate: newExpiryDate.trim()
          };

          fetch('http://localhost:5000/api/students', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newStudent),
          })
          .then(response => response.json())
          .then(() => {
              AppToaster.show({
                  message: "Student added successfully",
                  className: 'custom-toast',
                  timeout: 3000
              });

              // Reset form fields
              setNewName("");
              setNewAge("");
              setNewAddress("");
              setNewMobileNo("");
              setNewCourse("");
              setNewCourseAmount("");
              setNewExpiryDate("");
              setFormErrors({});

              // ✅ Fetch updated students after adding
              fetch('http://localhost:5000/api/students')
                  .then(response => response.json())
                  .then(updatedStudents => setStudents(updatedStudents))
                  .catch(error => console.error('Error fetching updated students:', error));
          })
          .catch(error => {
            AppToaster.show({
                message: "Failed to add student",
                intent: 'danger',
                timeout: 3000,
                className: 'custom-toast' // Apply custom styling to the error message
            });
            console.error('Error adding student:', error);
        });
      }
  };

  return (
    <div className="App">
        <div className='h2'>
            <h1>Add New Student</h1>
        </div>
        <div className="form-container">
            <div className="form-field">
                <InputGroup
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter Name..."
                />
                {formErrors.name && <div className="error">{formErrors.name}</div>}
            </div>

            <div className="form-field">
                <InputGroup
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                    placeholder="Enter Age..."
                    type="number"
                />
                {formErrors.age && <div className="error">{formErrors.age}</div>}
            </div>

            <div className="form-field">
                <InputGroup
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Enter Address..."
                />
                {formErrors.address && <div className="error">{formErrors.address}</div>}
            </div>

            <div className="form-field">
                <InputGroup
                    value={newMobileNo}
                    onChange={(e) => setNewMobileNo(e.target.value)}
                    placeholder="Enter Mobile No..."
                    type="number"
                />
                {formErrors.mobileNo && <div className="error">{formErrors.mobileNo}</div>}
            </div>

            <div className="form-field">
                <Select
                    options={courseOptions}
                    value={courseOptions.find(option => option.value === newCourse)}
                    onChange={(selectedOption) => {
                        if (selectedOption) {
                            setNewCourse(selectedOption.value);
                            setNewCourseAmount(selectedOption.courseAmount.replace('₹', '').replace(',', ''));
                            setNewExpiryDate(selectedOption.expiryDate);
                        } else {
                            setNewCourse('');
                            setNewCourseAmount('');
                            setNewExpiryDate('');
                        }
                    }}
                    placeholder="Select Course"
                />
                {formErrors.course && <div className="error">{formErrors.course}</div>}
            </div>

            <div className="form-field">
                <InputGroup
                    value={newCourseAmount}
                    onChange={(e) => setNewCourseAmount(e.target.value)}
                    placeholder="Enter Course Amount..."
                    type="number"
                />
                {formErrors.courseAmount && <div className="error">{formErrors.courseAmount}</div>}
            </div>

            <div className="form-field">
                <InputGroup
                    value={newExpiryDate}
                    onChange={(e) => setNewExpiryDate(e.target.value)}
                    placeholder="Select Expiry Date..."
                    type="date"
                />
                {formErrors.expiryDate && <div className="error">{formErrors.expiryDate}</div>}
            </div>

            <button onClick={addStudent}>Add Student</button>
        </div>
    </div>
);
}

export default App;