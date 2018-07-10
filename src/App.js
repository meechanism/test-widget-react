import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const sdkSrc = "https://content.onemarketnetwork.com/livereceipt/lr-sdk.min.js";

class App extends Component {
  constructor() {
    super();
    this.loadedSdk = this.loadedSdk.bind(this);
    this.addScript = this.addScript.bind(this);
  }

  loadedSdk() {
    console.log("Loaded sdk. Init widget.");
    window.OM.init();
  }

  componentDidMount() {
    console.log("Add and load our sdk...");
    this.addScript();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div id="messenger-plugin" />
      </div>
    );
  }
  addScript() {
    const scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.src = sdkSrc;
    scriptNode.addEventListener("load", this.loadedSdk);
    document.body.appendChild(scriptNode);
  }
}

export default App;
