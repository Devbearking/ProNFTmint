import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";
import HomeImg from "../images/HomeImg.png";
import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PhoneImg from "../images/PhoneImg.png";

function Home() {
  return (
    <div className="container mt-lg-8 mt-12">
      <div className="row mt-3">
        <div className="col-lg-6 mb-10 mb-lg-0 pe-md-4 mt-4 text-center text-lg-start">
          <h1 className="mb-4 text-white main-text">
            The platform for next-generation NFT experiences
          </h1>

          <h2 className="h5 fw-normal mt-6 px-5 px-md-0 text-white mb-8 pb-3">
            <Card bg="dark" style={{ width: "35rem" }} className="mb-2">
              <Card.Header>
                Mint can help your brand unlock the power of the blockchain to
                create immersive token experiences for your community.
              </Card.Header>
            </Card>
          </h2>
        </div>
        <div className="col-lg-6">
          <img className="HomeImg" src={HomeImg} />
          <li className="HomeMintBtn">
              <Link to="/nft" className="nav-link">
              <Button variant="transparent"> 
            </Button>
              </Link>
            </li>
        </div>
      </div>
      <div className="empty">
        
      </div>
      <div className="container-fluid mt-lg mt-12">
        <div className="row mt-3">
          <div className="col-6">
          <img className="PhoneImg" src={PhoneImg}/>
            
          </div>
          <div className="col-6">
          <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
