import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";
import HomeImg from "../images/HomeImg.png";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneImg from "../images/PhoneImg.png";

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
          <img className="HomeImg" src={HomeImg} />
          <li className="HomeMintBtn">
            <Link to="/nft" className="nav-link">
              <Button variant="transparent"></Button>
            </Link>
          </li>
        </div>
      </div>
      <div className="empty">
        <div></div>
      </div>
      <div className="container mt-lg mt-12 PhoneCard">
        <div className="row mt-3">
          <div className="col-6">
            <img className="PhoneImg" src={PhoneImg} />
          </div>
          <div className="col-6">
            <Carousel />
          </div>
        </div>
        <div className="row">
          <div className="text-center">PUT SOMETHING HERE!</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
