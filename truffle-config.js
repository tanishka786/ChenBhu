module.exports = {
    networks: {
      // Configuration for Ganache
      ganache: {
        host: "127.0.0.1", // Ganache local RPC server
        port: 7545, // Ganache default port
        network_id: "1400", // Match any network ID
      },
    },
    // Solidity Compiler Configuration
    compilers: {
      solc: {
        version: "0.8.0", // Specify the Solidity compiler version
      },
    },
  };