async function main() {
    const { ethers } = require("hardhat");
  
    // Get the contract factory
    const Lock = await ethers.getContractFactory("Lock");
  
    console.log("Deploying contract...");
  
    // Deploy the contract with a string argument (initial locked message)
    const lock = await Lock.deploy("Initial locked message");
  
    await lock.deployed();  // Wait until the contract is deployed
  
    console.log("Lock contract deployed to:", lock.address);
  }
  
  // Run the deployment
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });