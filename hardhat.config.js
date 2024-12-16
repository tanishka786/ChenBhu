
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ganache: {
      url: "http://127.0.0.1:7545/", // URL for Ganache
      accounts: ["0x8346c4c9805ebb5325ceddd852d6fd0b67d4f89f5cd2303860ad282f85fd53e2"],  // Optional: add the private key of the account you want to deploy with
      network_id: "1400",  // Match any network ID for local network
    },
  },
};