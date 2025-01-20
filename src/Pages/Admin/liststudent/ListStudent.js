import React, { useEffect, useState } from 'react';
import { Button, Toaster, Icon } from '@blueprintjs/core';
import './ListStudent.css'; // Renamed CSS file for better clarity
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const AppToaster = Toaster.create({
    position: "top"
});

function ListStudent() {
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/students')
            .then(response => response.json())
            .then(json => setStudents(json))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    // Update student details
    function updateStudent(id) {
        const student = students.find((student) => student._id === id);
        if (!student) return;

        fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                student_name: student.student_name,
                student_age: student.student_age,
                student_address: student.student_address,
                student_mobileNo: student.student_mobileNo,
                student_course: student.student_course,
                student_courseAmount: student.student_courseAmount,
                student_expiryDate: student.student_expiryDate
            }),
        })
        .then(response => response.json())
        .then(updatedStudent => {
            setStudents(students.map(student => 
                student._id === id ? updatedStudent : student
            ));
            AppToaster.show({
                className: 'custom-toast',
                message: "Student updated successfully",
                timeout: 3000
            });
            setEditMode((prevMode) => ({ ...prevMode, [id]: false }));
        })
        .catch(error => console.error('Error updating student:', error));
    }

    // Delete a student
    function deleteStudent(id) {
        fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => {
            setStudents(students.filter(student => student._id !== id));
            AppToaster.show({
                className: 'custom-toast',
                message: "Student deleted successfully",
                timeout: 3000
            });
        })
        .catch(error => console.error('Error deleting student:', error));
    }

    // Toggle edit mode for a student
    function toggleEdit(id) {
        setEditMode((prevMode) => ({ ...prevMode, [id]: !prevMode[id] }));
    }

    return (
        <div className="student-list-wrapper">
            <h1>Student List</h1>
            {students.length === 0 ? (
                <p className="no-data-message">No data added yet.</p>
            ) : (
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Mobile No</th>
                            <th>Course</th>
                            <th>Course Amount</th>
                            <th>Expiry Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student._id}>
                                <td>{student._id}</td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="text" 
                                            value={student.student_name} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_name: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_name
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="number" 
                                            value={student.student_age} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_age: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_age
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="text" 
                                            value={student.student_address} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_address: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_address
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="text" 
                                            value={student.student_mobileNo} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_mobileNo: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_mobileNo
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="text" 
                                            value={student.student_course} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_course: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_course
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="number" 
                                            value={student.student_courseAmount} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_courseAmount: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }}
                                        />
                                    ) : (
                                        student.student_courseAmount
                                    )}
                                </td>
                                <td>
                                    {editMode[student._id] ? (
                                        <input 
                                            type="date" 
                                            value={student.student_expiryDate} 
                                            onChange={(e) => {
                                                const updatedStudents = students.map(s => 
                                                    s._id === student._id ? { ...s, student_expiryDate: e.target.value } : s
                                                );
                                                setStudents(updatedStudents);
                                            }} 
                                        />
                                    ) : (
                                        student.student_expiryDate
                                    )}
                                </td>
                                <td className="action-buttons">
                                    {editMode[student._id] ? (
                                        <>
                                            <button className="update-button" onClick={() => updateStudent(student._id)}>
                                                <FontAwesomeIcon icon={faCheck} /> 
                                            </button>
                                            <button className="cancel-button" onClick={() => toggleEdit(student._id)}>
                                                <FontAwesomeIcon icon={faTimes} /> 
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="edit-button" onClick={() => toggleEdit(student._id)}>
                                                <FontAwesomeIcon icon={faEdit} /> 
                                            </button>
                                            <button className="delete-button" onClick={() => deleteStudent(student._id)}>
                                                <FontAwesomeIcon icon={faTrash} /> 
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    
}

export default ListStudent;
