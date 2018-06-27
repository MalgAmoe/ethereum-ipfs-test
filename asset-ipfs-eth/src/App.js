import React, { Component } from 'react';
import ipfsAPI from 'ipfs-api'
import Web3 from 'web3'
import './App.css';

const web3 = new Web3(window.web3.currentProvider)

class App extends Component {
  constructor(props) {
    super(props)
    this.ipfs = ipfsAPI('localhost', '5001')
    this.state = {
      account_address: null,
      id: null,
      version: null,
      protocol_version: null,
      added_file_hash: null,
      added_file_contents: null
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
      web3.eth.getAccounts((err, accounts) => {
        if (err) throw err
        this.setState({account_address : accounts[0]})
      })
    })
  }

  addAsset = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
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

  render() {
    return (
      <div className="App">
        <p>Your ID is <strong>{this.state.id}</strong></p>
        <p>Your IPFS version is <strong>{this.state.version}</strong></p>
        <p>Your IPFS protocol version is <strong>{this.state.protocol_version}</strong></p>
        <form id="captureMedia">
          <input type="file" onChange={this.addAsset} />
        </form>
        <br/>
        {this.state.added_file_hash && <img src={`https://ipfs.io/ipfs/${this.state.added_file_hash}`} alt='ipfs asset'/>}
      </div>
    );
  }
}

export default App;