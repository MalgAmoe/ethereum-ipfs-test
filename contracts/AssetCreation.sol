pragma solidity ^0.4.23;

contract AssetCreation {
    
    event NewAsset(uint assetId, string name, byte assetAddress);
    
    struct Asset {
        string name;
        byte assetAddress;
    }
    
    Asset[] public assets;
    
    mapping (uint => address) public assetToOwner;
    mapping (address => uint) ownerAssetCount;
    
    function _createAsset(string _name, byte _address) internal {
        uint id = assets.push(Asset(_name, _address)) - 1;
        assetToOwner[id] = msg.sender;
        emit NewAsset(id, _name, _address);
    }
    
    function addNewAsset(string _name, byte _address) public {
        // check enough gas
        // check address if needed??
        _createAsset(_name, _address);
    }
}