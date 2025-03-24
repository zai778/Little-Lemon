import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Little Lemon 🍋</Link>
        </h1>

        <nav className="nav">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/reserve"
            className={location.pathname === "/reserve" ? "active" : ""}
          >
            Reserve
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;