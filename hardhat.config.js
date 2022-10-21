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
      url: "https://polygon-mumbai.g.alchemy.com/v2/gjoDlqGdfBIG1jB50Deavh2qpK9bICSQ",
      accounts: ["f214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897"]
    }
  },
};
