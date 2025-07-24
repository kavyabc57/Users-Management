
import React from 'react'
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const navigate= useNavigate()

  const handleEmployeeCreation=()=>{
    navigate("/EmployeeCreation")
    
  }
  return (
    <div>
        <div>
      <div class="container mt-3">
        <div className='d-flex align-items-center justify-content-between mb-4 '>
          <h2>EmployeeList</h2>
         <button className='btn btn-info' onClick={handleEmployeeCreation}>Employee Creation</button>

        </div>
        

        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>City</th>
                <th>Country</th>
                <th>Sex</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kavya</td>
                <td>Sai</td>
                <td>28</td>
                <td>Banglore</td>
                <td>India</td>
                <td>Female</td>
                <td><i class="fa fa-eye text-info fa-lg" ></i></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Chandan</td>
                <td>Shetty</td>
                <td>25</td>
                <td>Banglore</td>
                <td>India</td>
                <td>Male</td>
                <td><i class="fa fa-eye text-info fa-lg"></i></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Ashwini</td>
                <td>Ashok</td>
                <td>29</td>
                <td>Banglore</td>
                <td>India</td>
                <td>Female</td>
                <td><i class="fa fa-eye text-info fa-lg"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default EmployeeList;
