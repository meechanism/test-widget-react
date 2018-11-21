import React, { Component } from "react";
import styled from "styled-components";

const sdkSrc = "https://content.onemarketnetwork.com/livereceipt/lr-sdk.min.js";
// const sdkSrc =
//   "https://content.sandbox.onemarketnetwork.com/livereceipt/lr-sdk.min.js";

// const sdkSrc = "https://content.dev.one.market/livereceipt/lr-sdk.min.js";

const Container = styled.div`
  margin: 0 0 1rem;
`;

class Widget extends Component {
  scriptId = "om-sdk-script";

  componentDidMount() {
    console.log("Add and load our sdk...");
    this.addScript();
  }

  addScript = () => {
    // Please dont strangle me :(, just an example to see if script exists
    let scriptNode = document.getElementById(this.scriptId);

    // If script node
    if (null === scriptNode) {
      const scriptNode = document.createElement("script");
      scriptNode.type = "text/javascript";
      scriptNode.src = sdkSrc;
      scriptNode.addEventListener("load", this.loadedSdk);
      document.body.appendChild(scriptNode);
    } else {
      this.loadedSdk();
    }
  };

  /**
   * This callback should be passed in as an argument for initializing the
   * SDK under the param name `afterInitCb`.
   *
   * The SDK will trigger this after the SDK is done initializing.
   *
   * @memberof Widget
   */
  onSdkReady = () => {
    // console.log("SDK is done loading: ", window.OM.optedIn);
    // The SDK keeps track of the user's intent to opt in. Check if this flag is
    // true first before confirming the user opt in, otherwise you might
    // accidentally optin in a user that didn't want to.
    // if (window.OM.optedIn) {
    //   console.log(
    //     "User has intent to opt-in. Time to opt in the user: ",
    //     this.props.optInRef
    //   );
    //   // The key method to call to finally opt the user in. It is vital
    //   // `confirmUserOptIn` is called only after the SDK has finished intializing.
    //   window.OM.confirmUserOptIn(this.props.optInRef);
    // }
  };

  loadedSdk = () => {
    const { optInRef } = this.props;
    const hasOptInRef = "undefined" !== typeof optInRef;
    console.log("Loaded sdk. Init widget. hasOptInRef: ", hasOptInRef);

    window.OM.init({
      postCheckout: hasOptInRef,
      optInRef: optInRef,
      //   Only set the callback if we are postCheckout
      afterInitCb: hasOptInRef ? this.onSdkReady : undefined,
      userPref: {
        data: []
      }
    });
  };

  render() {
    return <Container id="messenger-plugin" />;
  }
}

export default Widget;
