const Lock = artifacts.require("Lock");

module.exports = async function (deployer) {
  // Deploy the Lock contract with a message
  await deployer.deploy(Lock, "Initial locked message");
};