import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const handleLogin = () =>{
    navigate("/Dashboard")
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 " style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4 text-info">Login form</h1>
        <form>
          <label className="form-label"> Username</label>
          <input type="text" className="form-control mb-2" placeholder="Enter email or user name"></input>

          <label className="form-label">Password</label>
          <input type="password" className="form-control mb-2" placeholder="password"></input>

          <button className="btn btn-info text-center mt-2" onClick={handleLogin}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;