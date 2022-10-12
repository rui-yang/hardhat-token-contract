const { ethers } = require('hardhat');
const { CRYPTO_DEV_NFT_CONTRACT_ADDRESS } = require('../constants/index');

async function main() {
    const cryptoDevTokenContract = await ethers.getContractFactory(
        'CryptoDevToken'
    );
    const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(
        CRYPTO_DEV_NFT_CONTRACT_ADDRESS
    );

    await deployedCryptoDevTokenContract.deployed();
    console.log(
        'Crypto Dev Token Contract address:',
        deployedCryptoDevTokenContract.address
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
