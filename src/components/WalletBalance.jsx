import { useState } from "react";
import { ethers } from "ethers";

function ConnectToWallet() {
  return document
    .getElementById("wallet")
    .addEventListener("click", function () {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((res) => {
            // Return the address of the wallet
            console.log(res);
          });
      } else {
        alert("install metamask extension!!");
      }
    });
}

function WalletBalance() {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);

    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="row">
      <div className="btn">
        <div className="submit-btn">
          <h5 className="text-light">Your Balance: {balance} ETH</h5>
          <button
            className="btn btn-secondary btn-lg mb-5 mt-3"
            onClick={() => getBalance()}
          >
            Show My Balance
          </button>
          <div className="btn btn-secondary btn-lg mb-5 mt-3">
            <button onClick={ConnectToWallet} className="nav-link" id="wallet">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletBalance;
