require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/k4W_geBi6cR-U2YMehY-h0W80gyVgcTm',
      accounts: [
          'add6b8684b20e6d7ea41e12e5c4d41b38c4d6413a9dd4cbc6c3792e3ba631abd'
      ],
    },
  },
};
