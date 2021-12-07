require('dotenv').config();
const hre = require('hardhat');

const TOKENADDRESS = '';
const TOKENNAME = '';
const TOKENSYMBOL = '';



const tokenVerify = async () => {
  if (TOKENADDRESS) {
    await hre.run('verify:verify', {
      address: MASTER_CHEF,
      constructorArguments: [
        TOKENADDRESS,
        TOKENSYMBOL,
      ]
    })
  }
}

const main = async () => {
  await tokenVerify();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
