# ethereum-ipfs-test

## Prerequisite
- node.js
- ethereum
- ipfs
- ganache

### Install ethereum with homebrew(mac os x)
brew tap ethereum/ethereum

brew install ethereum

### install ganache & truffle
https://truffleframework.com/ganache/

npm install -g truffle

### install ipfs and setup
https://dist.ipfs.io/#go-ipfs

- set config

ipfs config Addresses.API /ip4/127.0.0.1/tcp/5001

- Set cors for ipfs

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"

### build ethereum contract
truffle compile

truffle migrate