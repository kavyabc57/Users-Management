import React, { useEffect, useState } from 'react';    
import { useLocation, useNavigate } from 'react-router-dom';

function CustomerCreation() {
    const navigate = useNavigate();
    const location = useLocation()
  const [formData, setFormData] = useState({
    id:null,
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  useEffect  (() =>{
    if(location.state?.customer){
      setFormData(location.state.customer)
    }
},[location.state])

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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zip.match(/^\d{5}$/)) newErrors.zip = 'Please enter a valid 5-digit ZIP code';
    return newErrors;
  };

  // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const customer = JSON.parse(localStorage.getItem("Customers")) || [];
      if (formData.id) {
        // Update existing user
        const updatedCustomers = customer.map((cust) =>
          cust.id === formData.id ? formData : cust
        );
        localStorage.setItem("Customers", JSON.stringify(updatedCustomers));
      } else {
        // Add new user
        const newCustomer = { ...formData, id: Date.now() }; // Use timestamp as unique ID
        customer.push(newCustomer);
        localStorage.setItem("Customers", JSON.stringify(customer));
      }
      navigate("/CustomerList");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card p-3 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="text-center mb-3">Create Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="mb-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter street address"
            />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>

            <div className="col-md-6 mb-2">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
              {errors.state && <div className="invalid-feedback">{errors.state}</div>}
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="zip" className="form-label">
              ZIP Code
            </label>
            <input
              type="text"
              className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Enter 5-digit ZIP"
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
          </div>

          <div className="mb-2">
            <label htmlFor="notes" className="form-label">
              Additional Notes
            </label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter any additional notes"
              rows="3"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerCreation;