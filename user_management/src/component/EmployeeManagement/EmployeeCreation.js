

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeCreation() {
    const navigate = useNavigate();

    // State for form fields
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        joiningDate: '',
        department: '',
        designation: '',
        role: ''
    });

    // State for validation errors
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error for the field being edited
        setErrors({ ...errors, [name]: '' });
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        else if (!formData.username.match(/^[a-zA-Z0-9_]{3,}$/)) newErrors.username = 'Username must be at least 3 characters (letters, numbers, or underscores)';
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.joiningDate) newErrors.joiningDate = 'Joining date is required';
        if (!formData.department) newErrors.department = 'Department is required';
        if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
        if (!formData.role) newErrors.role = 'Role is required';
        return newErrors;
    };

    // Handle form submission
    const handleEmployeeSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Log form data (replace with API call in production)
        console.log('Employee Data:', formData);

        // Reset form after submission
        setFormData({
            username: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            joiningDate: '',
            department: '',
            designation: '',
            role: ''
        });
        setErrors({});
        alert('Employee created successfully!');
        navigate('/EmployeeList');
    };

    return (
        <div  className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
            <div className="card p-3 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Employee Creation Form</h2>
                <form onSubmit={handleEmployeeSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                        {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="joiningDate" className="form-label">Joining Date</label>
                        <input
                            type="date"
                            className={`form-control ${errors.joiningDate ? 'is-invalid' : ''}`}
                            id="joiningDate"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            required
                        />
                        {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <select
                            className={`form-select ${errors.department ? 'is-invalid' : ''}`}
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Department</option>
                            <option value="HR">Human Resources</option>
                            <option value="IT">Information Technology</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                        </select>
                        {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation" className="form-label">Designation</label>
                        <input
                            type="text"
                            className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                        />
                        {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                            className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                            <option value="Intern">Intern</option>
                        </select>
                        {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Create Employee</button>
                    </div>
                </form>
        
            </div>
        </div>
    );
}

export default EmployeeCreation;
