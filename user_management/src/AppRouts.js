
import React from "react"
import { Route,Routes } from "react-router-dom";
import UserCraeation from "./component/UserManagement/UserCraeation";
import Login from "./component/Login/Login";
import CustomerCreation from "./component/CustomerManagement/CustomerCreation";
import EmployeeCreation from "./component/EmployeeManagement/EmployeeCreation";
import UserCreationList from "./component/UserManagement/UserCreationList";
import CustomerList from "./component/CustomerManagement/CustomerList";
import EmployeeList from "./component/EmployeeManagement/EmployeeList";

function AppRouts() {
  return (
 <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/UserList" element={<UserCreationList/>} />
        <Route path="/UserCreation" element={<UserCraeation/>}/>
        <Route path="/CustomerList" element={<CustomerList/>} />
        <Route path="/CreateCustomer" element={<CustomerCreation/>}/>

    
        <Route path="/EmployeeList" element={<EmployeeList />} />
        <Route path="/EmployeeCreation" element={<EmployeeCreation/>}/>
      </Routes>
    </div>
  )
}

export default AppRouts
