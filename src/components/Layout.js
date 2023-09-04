import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

export default function Layout() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a
            className="navbar-brand"
            id="logo"
            href="#"
            style={{
              color: "#e8eddf",
              fontWeight: "bold",
              marginLeft: "85px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "50px" }}
            />
          </a>
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              color: "#e8eddf",
              fontWeight: "bold",
              backgroundColor: "e8eddf",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* Navbar Collapse */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                style={{ color: "#e8eddf", fontSize: "20px" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: "#e8eddf", fontSize: "20px" }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{
                  color: "#e8eddf",
                  marginLeft: "20px",
                  border: "1px solid #e8eddf",
                  padding: "10px",
                  fontWeight: "bold",
                  marginRight: "50px",
                  fontSize: "18px",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
