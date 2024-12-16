
async function main() {
  const { ethers } = require("hardhat");

  // Get the contract factory for Lock (ensure the case is correct)
  const Lock = await ethers.getContractFactory("Lock");

  console.log("Deploying contract...");

  // Deploy the contract
  const lock = await Lock.deploy();

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


