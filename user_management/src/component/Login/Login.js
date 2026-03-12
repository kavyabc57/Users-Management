import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Minimum 8 characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value})
  }
  
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and contain at least one letter and one number";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const loginData = { ...formData };
      localStorage.setItem("data", JSON.stringify(loginData));
      navigate("/Dashboard");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 " style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4 text-info">Login form</h1>
    <form onSubmit={handleLogin} noValidate>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter email"
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-info w-100 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;