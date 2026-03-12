import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CustomerList() {
  const navigate = useNavigate();
  const customers = JSON.parse(localStorage.getItem("Customers")) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of customers per page

  const handleCreateCustomer = () => {
    navigate("/CreateCustomer");
  };

  const handleBack = () => {
    navigate("/Dashboard");
  };

  const handleEdit = (customer) => {
    navigate("/CreateCustomer", { state: { customer } });
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.zip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredCustomers.length;
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous/next page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="container mt-3">
      <div>
        <span
          onClick={handleBack}
          className="cursor-pointer"
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i> Back
        </span>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2>Customers List</h2>
        <div className="d-flex align-items-center">
          <button className="btn btn-info" onClick={handleCreateCustomer}>
            Create Customer
          </button>
        </div>
      </div>
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
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center">
                  No customers found
                </td>
              </tr>
            ) : (
              currentCustomers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{customer.fullName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td>{customer.city}</td>
                  <td>{customer.state}</td>
                  <td>{customer.zip}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(customer)}
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex align-items-center justify-content-between">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button className="page-link" onClick={handlePrevPage}>
                  Previous
                </button>
              </li>
              {getPageNumbers().map((number) => (
                <li
                  key={number}
                  className={`page-item ${
                    currentPage === number ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
