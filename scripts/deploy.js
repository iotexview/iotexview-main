// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');
require('dotenv').config();

const TOKENNAME = '';
const TOKENSYMBOL = '';
// masterchef deploy
const deployTokenContract = async () => {
 
    const TokenContract = await hre.ethers.getContractFactory('IoTexViewToken');
    const tokenContract = await TokenContract.deploy(TOKENNAME,TOKENSYMBOL);

    await tokenContract.deployed();
    console.log('[deployTokenContract] tokenContract deployed to: ', tokenContract.address);
 
};

async function main() {
  await deployTokenContract();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
