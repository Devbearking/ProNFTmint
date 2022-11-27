import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";
import HomeImg from "../images/HomeImg.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneImg from "../images/PhoneImg.png";
import MyImg from "../images/MyImg.png"

function Home() {
  return (
    <div className="container mt-lg-8 mt-12">
      <div className="row mt-3">
        <div className="col-lg-6 mb-10 mb-lg-0 pe-md-4 mt-4 text-center">
          <h1 className="mb-4 text-white main-text">
            The platform for next-generation <span> NFT </span> experiences
          </h1>
          <h2 className="h4 fw-normal mt-6 px-5 px-md-0 text-white mb-8 pb-3 pt-3">
            Mint can help your brand unlock the power of the blockchain to
            create immersive token experiences for your community.
          </h2>
        </div>
        <div className="col-lg-6">
          <img className="HomeImg" src={HomeImg} alt="HomeImg" />
          <li className="HomeMintBtn">
            <Link to="/nft" className="nav-link">
              <Button variant="transparent"></Button>
            </Link>
          </li>
        </div>
      </div>
      <hr></hr>
      <div className="container mt-lg mt-12 PhoneCard">
        <div className="row mt-3">
          <div className="col-6">
            <img className="PhoneImg" src={PhoneImg} alt="PhoneImg" />
          </div>
          <div className="col-6">
            <Carousel />
          </div>
        </div>
        <hr className="hr-2"></hr>
        <div className="myimg-container">
          <img className="MyImg" src={MyImg} alt="MyImg"/>
        </div>
          <div className="text-center btm-home text-white">
            <h1>Let's get in touch</h1>
            <p>
              Connect with our Mint Blockchain Solutions team to start minting,
              distributing, selling, and exchanging NFTs with your online
              community and consumers. Get in touch
            </p>
            <Button>
              <li className="nav-item me-1">
                <Link to="/contacts" className="nav-link">
                  Let's Connect
                </Link>
              </li>
            </Button>
          </div>
        
      </div>
    </div>
  );
}

export default Home;
