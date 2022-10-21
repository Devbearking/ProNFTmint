import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contacts() {
    return (
      <div>
  <div className="contact-container">
    <div className="contact-content-con">
      <div className="left-contact">
        <h4>Contact us here</h4>
        <p />
        <div className="contact-icons">
          <div className="contact-icon">
            <a href="https://www.facebook.com/deivitoss" target="_blank" rel="noreferrer">
            <FaFacebook style={{fontSize: '30px'}}/>
            </a>
            <a href="https://twitter.com/DeyvidR8" target="_blank" rel="noreferrer">
            <FaTwitter style={{fontSize: '30px'}}/>
            </a>
            <a href="https://www.linkedin.com/in/deyvid-razsukanov-a2669a22a/" target="_blank" rel="noreferrer">
             <FaLinkedin style={{fontSize: '30px'}}/>
            </a>
            <a href="https://github.com/Devbearking" target="_blank" rel="noreferrer">
              <FaGithub style={{fontSize: '30px'}}/>
            </a>
          </div>
        </div>
      </div>
      <div className="right-contact">
        <form action className="contact-form">
          <div className="input-control i-c-2">
            <input type="text" required placeholder="YOUR NAME" />
            <input type="email" required placeholder="YOUR EMAIL" />
          </div>
          <div className="input-control">
            <input type="text" required placeholder="ENTER SUBJECT" />
          </div>
          <div className="input-control">
            <textarea className="text-area" name id cols={15} rows={8} placeholder="Message Here..." defaultValue={""} />
          </div>
          <div className="submit-btn">
            <a href="mailto:drazsukanov93@gmail.com" className="main-btn">
              <span className="btn-text">SEND</span>
              <span className="btn-icon"><FaEnvelope style={{fontSize: '20px'}}/></span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    );
}

export default Contacts;