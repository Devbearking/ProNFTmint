import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ConnectToWallet() {
  return (
   document.getElementById('wallet').addEventListener('click', function(){
  if(window.ethereum){
    window.ethereum.request({method:'eth_requestAccounts'})
  .then(res=>{
          // Return the address of the wallet
          console.log(res) 
  }) 
  }else{
    alert("install metamask extension!!")
  }
})
  
  )
}

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <img
          id="logo-img"
          src="https://i.ibb.co/rQXJHRK/Logo-img.png"
          alt="logo"
        />
        <a className="navbar-brand mb-0 h1" href="/">
          ProNFT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link to="/" className="nav-link" aria-current="page">
                Home
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
            <li className="nav-item me-4">
              <Link to="/nft" className="nav-link">
                NFT
              </Link>
            </li>
            <li className="nav-item me-4">
              <button
                onClick={ConnectToWallet}
                className="nav-link"
                id="wallet"
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
