require("@nomicfoundation/hardhat-toolbox");

module.exports = {
        solidity: {
          version: "0.8.28", // Ensure this matches your contract's pragma version
        },
    
    networks: {
        testnet: {
            url: "HTTP://127.0.0.1:7545",
            accounts: ["0x8346c4c9805ebb5325ceddd852d6fd0b67d4f89f5cd2303860ad282f85fd53e2"]
        }
    }
};
