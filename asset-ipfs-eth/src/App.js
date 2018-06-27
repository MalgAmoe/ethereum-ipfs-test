import React, { Component } from 'react';
import ipfsAPI from 'ipfs-api'
import Web3 from 'web3'
import contract from './contract'
import './App.css';

const web3 = new Web3(window.web3.currentProvider)

class App extends Component {
  constructor(props) {
    super(props)
    this.ipfs = ipfsAPI('localhost', '5001')
    this.state = {
      account_address: null,
      contract_address: null,
      id: null,
      version: null,
      protocol_version: null,
      added_file_name: null,
      added_file_hash: null,
      added_file_contents: null,
      transaction_hash: null
    }
  }

  componentDidMount() {
    this.ipfs.id((err, res) => {
      if (err) throw err
      this.setState({
        id: res.id,
        version: res.agentVersion,
        protocol_version: res.protocolVersion
      })
    })
    web3.eth.getAccounts((err, accounts) => {
      if (err) throw err
      this.setState({
        account_address: accounts[0],
        contract_address: contract.options.address
      })
    })
  }

  addAsset = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    this.setState({added_file_name: file.name})
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.saveToIpfs(reader)
  }

  saveToIpfs = (reader) => {
    const buffer = Buffer.from(reader.result)
    this.ipfs.add(buffer)
      .then((response) => {
        this.setState({
          added_file_hash: response[0].hash
        })
      }).catch((err) => {
        console.error(err)
      })
  }

  submitHashToContract(event) {
    event.stopPropagation()
    event.preventDefault()
    console.log(contract)
    contract.methods.addNewAsset(this.state.added_file_name, this.state.added_file_hash)
      .send({from: this.state.account_address}, (err, transactionHash) => {
        if (err) console.error(err)
        this.setState({transaction_hash: transactionHash})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Da super mega Ethereum Ipfs test project</h1>
        <h3>IPFS Data</h3>
        <p>Your ID is <strong>{this.state.id}</strong></p>
        <p>Your IPFS version is <strong>{this.state.version}</strong></p>
        <p>Your IPFS protocol version is <strong>{this.state.protocol_version}</strong></p>
        <hr/>
        <h3>Ethereum Data</h3>
        <p>Your wallet address is <strong>{this.state.account_address}</strong></p>
        <p>The contract address is <strong>{this.state.contract_address}</strong></p>
        <hr/>
        <br/>
        <form id="captureMedia">
          <input type="file" onChange={this.addAsset} />
          <button disabled={this.state.added_file_hash === null} onClick={(event) => this.submitHashToContract(event)}>Submit hash</button>
        </form>
        <br/>
        {this.state.added_file_hash && <img src={`https://ipfs.io/ipfs/${this.state.added_file_hash}`} alt='ipfs asset'/>}
        {this.state.transaction_hash && <p>{this.state.transaction_hash}</p>}
      </div>
    );
  }
}

export default App;