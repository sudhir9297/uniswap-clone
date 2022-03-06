require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/wUJ5L9yOVRwQk7S-mGX1dUA_RdNK8tWo",
      accounts: [
        "689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd",
      ],
    },
  },
};
