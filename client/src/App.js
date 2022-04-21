import React, { Component } from "react";
import DemoContract from "./contracts/Demo.json";
import getWeb3 from "./getWeb3";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddProductInfo from "./components/addProductInfo";
import ShowProductInfo from "./components/showProductInfo";

class App extends Component {


  state = {
    storageValue: "0",
    web3: null,
    accounts: null,
    contract: null,
  };


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = DemoContract.networks[networkId];
      const instance = new web3.eth.Contract(
        DemoContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
      // this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    console.log(accounts, contract);
    // Stores a given value, 5 by default.
    // const count = await contract.methods.set(5).send({ from: accounts[0] });
    const count = await contract.methods.dataCount().call();
    console.log(count);
    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();
    const response = await contract.methods.createDatum("Sth").call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Header address={this.state.accounts[0]}></Header>        
        <main>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={<AddProductInfo onSubmit={this.addProductInfo} />}
              ></Route>
              <Route
                exact
                path="/:id"
                element={
                  <ShowProductInfo getProductInfo={this.getProductInfo} />
                }
              />
            </Routes>
          </Router>
        </main>
        <Footer></Footer>
      </div>
    );
  }

  addDetumExample() {}

  addProductInfo(productInfo) {
    console.log(productInfo);
    // const response = await contract.methods.createDatum(productInfo).call();
  }

  getProductInfo(id) {
    // const obj = await contract.methods.createDatum(id).call();
    // return obj;
    return {
      id: "1",
      location: "Dong Nai",
    };
  }
}

export default App;
