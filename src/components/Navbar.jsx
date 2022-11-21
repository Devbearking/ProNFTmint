import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  async function Alert() {
    const Message = "Please Connect to Polygon Mumbai testnet Wallet!";
    alert(Message)

  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <img
          id="logo-img"
          src="https://i.ibb.co/pntTpP7/Untitled-design-5-1.webp"
          alt="logo"
        />
        <a className="navbar-brand mb-0 h1" href="/">
          ProMint
        </a>
        <button
          onClick={handleToggle}
          className="navbar-toggler hamburger-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li className="nav-item me-4 col-nav-btn">
            <Link
              to="/"
              className="nav-link"
              aria-current="page"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
          </li>
          <li className="nav-item me-4 col-nav-btn">
            <Link
              to="/nft"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              NFT
            </Link>
          </li>
          <li className="nav-item me-4 col-nav-btn">
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              About
            </Link>
          </li>
          <li className="nav-item me-4 col-nav-btn">
            <Link
              to="/contacts"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Contacts
            </Link>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/nft" className="nav-link" onClick={Alert}>
                NFT
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>

            <li className="nav-item me-4"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
