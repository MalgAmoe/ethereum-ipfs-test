import Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider)

// change this to your local contract address
const address = '0x574504C2d037B84CE5CC63b85e57b723475893C8'

const abi = [{
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
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
        "type": "string"
      }
    ],
    "name": "NewAsset",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_address",
        "type": "string"
      }
    ],
    "name": "addNewAsset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default new web3.eth.Contract(abi, address)