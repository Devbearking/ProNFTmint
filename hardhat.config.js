require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/dMJFwvA0cgLkBLjuyjPWAsLBmOveZ6pZ",
      // accounts: ["de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"]
      accounts: ["MATIC_PRIVATE_KEY"],
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
};
