import React from 'react';

function Header() {

  const user = JSON.parse(localStorage.getItem("data"))

  console.log(user)

  return (
    <header className="header bg-primary text-white p-3">
      <div className="container-fluid d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="userMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-1"></i>   {user.email}
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
            <li>
              <a className="dropdown-item" href="/profile">Profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;