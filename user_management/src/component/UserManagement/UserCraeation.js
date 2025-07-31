import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UserCreation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    id: null, // Add id to track editing
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Pre-populate form if editing
  useEffect(() => {
    if (location.state?.user) {
      setFormData(location.state.user);
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (formData.id) {
        // Update existing user
        const updatedUsers = users.map((user) =>
          user.id === formData.id ? formData : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } else {
        // Add new user
        const newUser = { ...formData, id: Date.now() }; // Use timestamp as unique ID
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      }
      navigate("/UserList");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card p-3 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">{formData.id ? "Edit User" : "Create User"}</h2>
        <form id="userForm" onSubmit={handleSubmit} noValidate>
          <div className="mb-2">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input
                type="date"
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
              />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            {formData.id ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserCreation;