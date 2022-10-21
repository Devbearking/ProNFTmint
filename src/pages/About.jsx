import React from "react";

// import Spline from '@splinetool/react-spline';

function About() {
  return (
    <div>
      <div class="container mt-lg-8 mt-12">
        <div class="row">
          <div class="pt-5 col-lg-6 mb-10 mb-lg-0 pe-md-4 text-center text-lg-start">
            <h2 class="px-md-0 text-white pt-5">Hello, I'm</h2>
            <h1 class="mb-4 mt-4 text-white main-text pt-0 myName">
              Deyvid Razsukanov
            </h1>
            <h4 class="mt-6 px-5 px-md-0 text-white mb-8 pb-3">
              a Web Developer
            </h4>
          </div>
          <div className="col-lg-6">
           <div className="row">
                 
           </div>
          </div>
          <div>
          <h4 class="text-white">
              I've created this dapp to show my development skills. In this
              project, i used Bootstrap and React for the front-end and Node, Hardhat and
              Solidity for the back-end. On the NFT page, you can connect your
              wallet and mint an NFT on the Polygon Mumbai testnet, form a collection i created using HashLips
              art engine.
            </h4>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
