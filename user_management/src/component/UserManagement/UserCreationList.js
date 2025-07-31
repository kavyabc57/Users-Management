    // import React, { useState } from "react";
    // import { Link, useNavigate } from "react-router-dom";

    // function UserCreationList() {
    //   const navigate = useNavigate();
    //   const users = JSON.parse(localStorage.getItem("users")) || [];
    //   const [searchTerm, setSearchTerm] = useState("");

    //   const [currentPage,setCurrentPage] = useState(1);
    //   const itemsPerPage = 2;

    //   const handleUserCreation = () => {
    //     navigate("/UserCreation");
    //   };

    //   const handleEdit = (user) => {
    //     navigate("/UserCreation", { state: { user } });
    //   };

    //     const handleBack = () => {
    //     navigate("/Dashboard");
    //   };

    //   const filteredUser = users.filter(
    //     (user) =>
    //       user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       user.gender.toLowerCase().includes(searchTerm.toLowerCase())
    //   );

    //   const totalPages = Math.ceil(filteredUser.length / itemsPerPage);
    //   const indexOfLastItem = currentPage * itemsPerPage;
    //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //   const filteredUsers = filteredUser.slice(indexOfFirstItem,indexOfLastItem);

    //   const handlePageChange = (pageNumber) =>{
    //     setCurrentPage(pageNumber);
    //   };

    //   const handlePrevPage = () =>{
    //     if (currentPage > 1){
    //       setCurrentPage(currentPage - 1);
    //     }
    //   };

    //   const handleNextPage = () =>{
    //     if (currentPage < totalPages){
    //       setCurrentPage(currentPage + 1);
    //     }
    //   };

    //   const getPageNumbers = () =>{
    //     const pageNumbers = [];
    //     const maxPagesToShow = 3;
    //     let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    //     let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    //     if (endPage - startPage + 1 < maxPagesToShow) {
    //       startPage = Math.max(1, endPage - maxPagesToShow + 1);

    //     }

    //     for (let i = startPage; i <= endPage; i++){
    //       pageNumbers.push(i);
    //     }
    //     return pageNumbers;
    //   }
    //   return (
    //     <div className="container mt-3">
          
    //       <div >
    //         <span onClick={handleBack} className=" cursor-pointer" style={{cursor:"pointer"}}><i class="fa fa-arrow-left mr-2" aria-hidden="true" ></i> Back</span>
    //       </div>
    //       <div className="d-flex align-items-center justify-content-between mb-4">
    //         <h2>User List</h2>
    //         <button className="btn btn-info" onClick={handleUserCreation}>
    //           Create User
    //         </button>
    //       </div>
    //       <div>
    //         <input
    //           type="text"
    //           className="form-control mb-4 "
    //           style={{ width: "300px" }}
    //           placeholder="Search by name....."
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //         />
    //       </div>

    //       <div>
    //         <table className="table table-bordered">
    //           <thead>
    //             <tr>
    //               <th>Sl No</th>
    //               <th>Full Name</th>
    //               <th>First Name</th>
    //               <th>Last Name</th>
    //               <th>Age</th>
    //               <th>City</th>
    //               <th>Address</th>
    //               <th>Gender</th>
    //               <th>Action</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {filteredUsers.length === 0 ? (
    //               <tr>
    //                 <td colSpan="7" className="text-center">
    //                   No users found{" "}
    //                 </td>
    //               </tr>
    //             ) : (
    //               filteredUsers.map((user, index) => (
    //                 <tr key={user.id}>
    //                   <td>{index + 1}</td>
    //                   <td>{user.fullName}</td>
    //                   <td>{user.firstName}</td>
    //                   <td>{user.lastName}</td>
    //                   <td>{user.dob}</td>
    //                   <td>{user.city}</td>
    //                   <td>{user.address}</td>
    //                   <td>{user.gender}</td>
    //                   <td>
    //                     <button
    //                       className="btn btn-sm btn-warning"
    //                       onClick={() => handleEdit(user)}
    //                     >
    //                       <i className="fa fa-eye"></i>
    //                     </button>
    //                   </td>
    //                 </tr>
    //               ))
    //             )}
    //           </tbody>
    //         </table>
    //       </div>
      

    //     {totalPages > 1 && (
    //       <div>
    //         <div>
    //         showing {startIndex + 1} to {Math.min(endIndex,totalItems)} of {totalItems} entries
    //         </div>
    //         <nav aria-label="Page navigation">
    //           <ul className="pagination justify-content-center">
    //             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
    //               <button className="page-link" onClick={handlePrevPage}>
    //                 Previous
    //               </button>
    //             </li>
    //             {getPageNumbers().map((number) => (
    //               <li
    //                 key={number}
    //                 className={`page-item ${currentPage === number ? 'active' : ''}`}
    //               >
    //                 <button
    //                   className="page-link"
    //                   onClick={() => handlePageChange(number)}
    //                 >
    //                   {number}
    //                 </button>
    //               </li>
    //             ))}
    //             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
    //               <button className="page-link" onClick={handleNextPage}>
    //                 Next
    //               </button>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
            
    //       )}
    //     </div>
    //   );
    // }


    // export default UserCreationList;




    import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserCreationList() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleUserCreation = () => {
    navigate("/UserCreation");
  };

  const handleEdit = (user) => {
    navigate("/UserCreation", { state: { user } });
  };

  const handleBack = () => {
    navigate("/Dashboard");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
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

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="container mt-3">
      <div>
        <span onClick={handleBack} className="cursor-pointer" style={{ cursor: "pointer" }}>
          <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i> Back
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2>User List</h2>
        <button className="btn btn-info" onClick={handleUserCreation}>
          Create User
        </button>
      </div>
      <div>
        <input
          type="text"
          className="form-control mb-4"
          style={{ width: "300px" }}
          placeholder="Search by name....."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Full Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center">
                  No users found
                </td>
              </tr>
            ) : (
              currentItems.map((user, index) => (
                <tr key={user.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dob}</td>
                  <td>{user.city}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(user)}
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

      {totalPages > 1 && (
        <div className="d-flex align-items-center justify-content-between">
          
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
          
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {getPageNumbers().map((number) => (
                <li
                  key={number}
                  className={`page-item ${currentPage === number ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage} disabled={currentPage === totalPages}>
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

export default UserCreationList;
