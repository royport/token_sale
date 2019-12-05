const TmuraToken = artifacts.require("./TmuraToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TmuraToken);
};
