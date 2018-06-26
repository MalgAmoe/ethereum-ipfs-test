var AssetCreation = artifacts.require('AssetCreation');

module.exports = function(deployer) {
  deployer.deploy(AssetCreation);
}