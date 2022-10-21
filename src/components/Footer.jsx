import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="icons-wrapper">
          <i class="fa fa-linkedin icon">
            <FaLinkedin style={{ fontSize: "30px" }} />
          </i>
          <i class="fa fa-github icon">
            <FaGithub style={{ fontSize: "30px" }} />
          </i>
          <i class="fa fa-twitter icon">
            <FaTwitter style={{ fontSize: "30px" }} />
          </i>
        </div>
        <p class="footer-p">© Copyright Procoin</p>
      </footer>
    </div>
  );
}

export default Footer;
