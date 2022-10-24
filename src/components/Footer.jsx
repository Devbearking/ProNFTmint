import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
    <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <footer id="footer">
        <div class="icons-wrapper">
          <a className="fa fa-linkedin icon" href="https://www.linkedin.com/in/deyvid-razsukanov-a2669a22a/" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ fontSize: "30px" }} onClick />
          </a>
          <a className="fa fa-github icon" href="https://github.com/Devbearking" target="_blank" rel="noreferrer">
            <FaGithub style={{ fontSize: "30px" }} />
          </a>
          <a className="fa fa-twitter icon" href="https://twitter.com/DeyvidR8" target="_blank" rel="noreferrer">
            <FaTwitter style={{ fontSize: "30px" }} />
          </a>
        </div> 
        <p class="footer-p">© Copyright ProNFT 2022</p>
        
      </footer>
    </div>
  );
}

export default Footer;
