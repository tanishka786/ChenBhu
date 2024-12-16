require("@nomicfoundation/hardhat-ethers"); // Ethers plugin is built into Hardhat

module.exports = {
  solidity: "0.8.28", // Adjust according to your contract's version
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545/", // The default Ganache RPC URL
      accounts: ["0x8346c4c9805ebb5325ceddd852d6fd0b67d4f89f5cd2303860ad282f85fd53e2"], // Private key of the account you want to use for deployment //AUDIO 1 FROM AUDIO-CHENNAI WORKSPACE
      chainId: 1337, // Chain ID for Ganache (default is 1337)
    },
  },
};