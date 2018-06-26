# ethereum-ipfs-test

## Prerequisite
- node.js
- ethereum
- ipfs
- ganache

### Install ethereum
brew tap ethereum/ethereum

brew install ethereum

### install ganache-cli 
https://truffleframework.com/ganache/

npm install ganache-cli

### install ipfs
https://dist.ipfs.io/#go-ipfs
- check config

ipfs config Addresses.API

- If output not /ip4/127.0.0.1/tcp/5001 set ipfs config

ipfs config Addresses.API /ip4/127.0.0.1/tcp/5001

- Set cors for ipfs

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"