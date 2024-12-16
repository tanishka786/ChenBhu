require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: "YOUR_INFURA_GOERLI_RPC_URL",
            accounts: ["YOUR_PRIVATE_KEY"]
        }
    }
};
