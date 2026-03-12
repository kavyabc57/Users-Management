import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const navigate = useNavigate();
  const employees = JSON.parse(localStorage.getItem("Employees")) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleEmployeeCreation = () => {
    navigate("/EmployeeCreation");
  };

  const handleEdit = (employee) => {
    navigate("/EmployeeCreation", { state: { employee } });
  };

  const handleBack = () => {
    navigate("/Dashboard");
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.dateOfBirth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.joiningDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredEmployees.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredEmployees.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset to page 1 when search term changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="container mt-3">
      <div>
        <span onClick={handleBack} className="cursor-pointer">
          <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i> Back
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2>Employee List</h2>
        <button className="btn btn-info" onClick={handleEmployeeCreation}>
          Employee Creation
        </button>
      </div>

      <div>
        <div>
          <input
            type="text"
            className="form-control mb-4"
            style={{ width: "400px" }}
            placeholder="Search by name, email, or phone....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Full Name</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>DOB</th>
              <th>DOJ</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center">
                  No employee found
                </td>
              </tr>
            ) : (
              currentItems.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{employee.username}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.joiningDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.role}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(employee)}
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} entries
            </div>
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
