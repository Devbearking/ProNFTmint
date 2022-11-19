import WalletBalance from '../components/WalletBalance';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from "./placeholder.png"
import { ethers } from 'ethers';
import WatchingEyes from '../artifacts/contracts/MyNFT.sol/WatchingEyes.json';



// The contract after deployment on Polygon Mumbai
const contractAddress = '0xF810A6561BCEF7a74A11B0dC9A1A56F4AE01A8CA';


const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, WatchingEyes.abi, signer);


function Home() {

  

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <WalletBalance />
      <div className="container mt-lg-8 mt-12">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-sm">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function NFTImage({ tokenId, getCount }) {
  const contentId = 'Qmd2dsyARvvC3tGHeEvaQfJH7hz1jHAcEwbSPXDhv2WNz5';
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  // const imageURI = `../../img/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (
    <div className="card bg-dark bg-gradient mb-3" style={{ width: '18rem' }}>
      <img className="card-img-top" alt='#' src={isMinted ? imageURI : Placeholder }></img>
      {/* 'https://gateway.pinata.cloud/ipfs/Qmd2dsyARvvC3tGHeEvaQfJH7hz1jHAcEwbSPXDhv2WNz5/placeholder.png' */}
      <div className="card-body">
        <h5 className="card-title">ID #{tokenId}</h5>
        {!isMinted ? (
          <button className="btn btn-dark" onClick={mintToken}>
            Mint
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={getURI}>
            Taken! Show URI
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
