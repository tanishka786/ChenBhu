const hre = require("hardhat");

async function main() {
    const AudioStorage = await hre.ethers.getContractFactory("AudioStorage");
    const audioStorage = await AudioStorage.deploy();

    await audioStorage.deployed();

    console.log("AudioStorage deployed to:", audioStorage.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});