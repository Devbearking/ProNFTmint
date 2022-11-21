import React from "react";

// import Spline from '@splinetool/react-spline';

function About() {
  return (
    <div>
      <div className="container mt-lg-8 mt-12">
        <div className="row">
          <div className="col-lg-6 mt-5 text-end text-white"></div>
          <div className="col-lg-6  mt-5 text-start">
            <h1 className="mb-5 AboutText">.About ProMint</h1>
          </div>
        </div>
        <div className="text-box row">
          <div className="col-6">
            <h1 className="h2 about-heading text-start">
              Building for the web3 era
            </h1>
          </div>
          <div className="col-6">
            <h1 className="h4 text-white text-start">
              Our next-generation NFT platform powers stronger, more meaningful
              brand-to-consumer experiences.
            </h1>
            <p>Mint enables brands to build direct relationships with an engaged community.</p>
          </div>
          <hr className="mt-4 mb-4"></hr>
          <div className="col-6">
            <h1 className="h2 about-heading text-start">
              Purposeful in pursuit of shared experiences
            </h1>
          </div>
          <div className="col-6">
            <h1 className="h4 text-white text-start">
              Our mission is rooted in community, accessibility, utility,
              simplicity.
            </h1>
            <p>Mint's streamlined process brings more fans, collectors and consumers into the new world of digital collectibles and NFTs.</p>
          </div>
          <hr className="mt-4 mb-4"></hr>
          <div className="col-6">
            <h1 className="h2 about-heading text-start">Superior tech and tools</h1>
          </div>
          <div className="col-6">
            <h1 className="h4 text-white text-start">
              Our all-in-one platform is simple, seamless, and streamlined.
            </h1>
            <p>Mint gives brands, sports teams and leagues, agencies, and businesses even greater control over their NFT ecosystem.</p>
          </div>
          <hr className="mt-4 mb-4"></hr>
          <div className="col-6">
            <h1 className="h2 about-heading text-start">
              Solutions, not just products
            </h1>
          </div>
          <div className="col-6">
            <h1 className="h4 text-white text-start">
              Our commitment to innovation runs throughout the design,
              development, and delivery process.
            </h1>
            <p>Mint constantly releases new updates based on the needs of our merchant partners, empowering brands foray into web3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
