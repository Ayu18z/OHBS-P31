import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "./../../../src/assets/images/InnoStay.png"; // Replace with your logo path
const Header = () => {
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate("/SignUp");
  };

  const onHome = () => {
    navigate("/");
  };

  const onContact = () => {
    navigate("/Contact");
  };

  return (
    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" onClick={onHome} style={{ cursor: "pointer" }}>
            <div className="logo">InnoStay.com - A blend of innovation and stay. </div>
          </a>
          {/* <a className="navbar-brand" onClick={onHome}>
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </a> */}
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onHome}>
                    Home
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onSignUp}>
                    LogIn/Signup
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onContact}>
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
