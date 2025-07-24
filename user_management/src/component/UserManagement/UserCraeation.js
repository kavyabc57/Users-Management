// import React from "react";
// import { useNavigate } from "react-router-dom";

// function UserCraeation() {
  
//     const navigate = useNavigate();
  
//     const handleUserSubmit=()=>{
//       navigate("/UserList")
//     }
//   return (
  

//  <div class="container d-flex justify-content-center align-items-center min-vh-100 py-4"> 
//     <div class="card p-3 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
//       <h2 class="text-center mb-3">Create User</h2>
//       <form id="userForm" onsubmit="handleSubmit(event)">
        
//         <div class="mb-2">
//           <label for="fullName" class="form-label">Full Name</label>
//           <input
//             type="text"
//             class="form-control"
//             id="fullName"
//             name="fullName"
//             placeholder="Enter full name"
//             required
//           />
//         <div class="row">
//           <div class="col-md-6 mb-2">
//             <label for="firstName" class="form-label">First Name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="firstName"
//               name="firstName"
//               placeholder="Enter first name"
//               required
//             />
//             <div class="invalid-feedback">First name is required.</div>
//           </div>
//           <div class="col-md-6 mb-2">
//             <label for="lastName" class="form-label">Last Name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="lastName"
//               name="lastName"
//               placeholder="Enter last name"
//               required
//             />
//             <div class="invalid-feedback">Last name is required.</div>
//           </div>
//         </div>

//           <div class="invalid-feedback">Full name is required.</div>
//         </div>

//         <div class="row">
//           <div class="col-md-6 mb-2">
//             <label for="email" class="form-label">Email ID</label>
//             <input
//               type="email"
//               class="form-control"
//               id="email"
//               name="email"
//               placeholder="Enter email"
//               required
//             />
//             <div class="invalid-feedback">Please enter a valid email.</div>
//           </div>
//           <div class="col-md-6 mb-2">
//             <label for="phone" class="form-label">Phone Number</label>
//             <input
//               type="tel"
//               class="form-control"
//               id="phone"
//               name="phone"
//               placeholder="Enter 10-digit phone number"
//               pattern="\d{10}"
//               required
//             />
//             <div class="invalid-feedback">Please enter a valid 10-digit phone number.</div>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-md-6 mb-2">
//             <label for="dob" class="form-label">Date of Birth</label>
//             <input
//               type="date"
//               class="form-control"
//               id="dob"
//               name="dob"
//               required
//             />
//             <div class="invalid-feedback">Date of birth is required.</div>
//           </div>
//           <div class="col-md-6 mb-2">
//             <label for="gender" class="form-label">Gender</label>
//             <select
//               class="form-select"
//               id="gender"
//               name="gender"
//               required
//             >
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             <div class="invalid-feedback">Please select a gender.</div>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-md-6 mb-2">
//             <label for="city" class="form-label">City</label>
//             <input
//               type="text"
//               class="form-control"
//               id="city"
//               name="city"
//               placeholder="Enter city"
//               required
//             />
//             <div class="invalid-feedback">City is required.</div>
//           </div>
//           <div class="col-md-6 mb-2">
//             <label for="address" class="form-label">Address</label>
//             <input
//               type="text"
//               class="form-control"
//               id="address"
//               name="address"
//               placeholder="Enter address"
//               required
//             />
//             <div class="invalid-feedback">Address is required.</div>
//           </div>
//         </div>

//         <button type="submit" class="btn btn-primary w-100 mt-2" onClick={handleUserSubmit}>Submit</button>
//       </form>
//     </div>
//   </div>

//   );
// }


// export default UserCraeation;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    // Clear error for field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/UserList");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card p-3 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Create User</h2>
        <form id="userForm" onSubmit={handleSubmit}>
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
              required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserCreation;
