import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/Dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item mt-3">
          <NavLink
            to="/UserList"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            User List
          </NavLink>
        </li>
        <li className="nav-item mt-3">
          <NavLink
            to="/CustomerList"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Customer List
          </NavLink>
        </li>
        <li className="nav-item mt-3">
          <NavLink
            to="/EmployeeList"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Employee List
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;