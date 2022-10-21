import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };
  
    return (
      <div className='row'>
      <div className="btn">
        <div className="submit-btn">
          <h5 className="text-light">Your Balance: {balance}</h5>
          <button className="btn btn-secondary btn-lg mb-5 mt-3" onClick={() => getBalance()}>Show My Balance</button>
        </div>
      </div>
      </div>
    );
  };
  
  export default WalletBalance;