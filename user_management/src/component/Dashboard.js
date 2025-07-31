
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()


    const handleUserList = ()=>{
        navigate("/UserList")


    }
     const handleEmployeeList = ()=>{
        navigate("/EmployeeList")
     }

     const handleCustomerList = ()=>{
        navigate("/CustomerList")
     }

  return (
    <div className='d-flex align-items-center justify-content-around py-5 '>
        <button className='btn btn-info' onClick={handleUserList}>User List</button>
        <button className='btn btn-primary' onClick={handleEmployeeList}>Employee List</button>
        <button className='btn btn-secondary' onClick={handleCustomerList}>customer List</button>
      
    </div>
  )
}

export default Dashboard
