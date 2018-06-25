[{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "assetToOwner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "assets",
    "outputs": [{
        "name": "name",
        "type": "string"
      },
      {
        "name": "assetAddress",
        "type": "bytes1"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_address",
        "type": "bytes1"
      }
    ],
    "name": "addNewAsset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "assetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "assetAddress",
        "type": "bytes1"
      }
    ],
    "name": "NewAsset",
    "type": "event"
  }
]