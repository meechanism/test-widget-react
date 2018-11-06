import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Widget from "../../components/Widget";
import Body from "../../components/Body";
import Header from "../../components/Header";
import List from "../../components/List";
import Total from "../../components/Total";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import DevNote from "../../components/DevNote";

class Purchase extends Component {
  onClick = () => {
    // Redirect to new page
    window.location = "/thank-you";
  };

  render() {
    return (
      <Wrapper>
        <Header>Order Purchase</Header>
        <Body>
          <DevNote>
            Dev Note: This page simulates the page in your checkout flow for
            placing an order. This widget integration assumes you do{" "}
            <em>NOT</em> have order information available on this page after
            order purchase.
          </DevNote>

          <h1>Cart</h1>
          <List>
            <List.LiOrderItem>
              <List.LineItem>
                <strong>Green Eggs and Ham</strong> by Dr. Seuss
              </List.LineItem>
              <List.LineItem>$9.99</List.LineItem>
            </List.LiOrderItem>
            <List.LiOrderItem>
              <List.LineItem>
                <strong>Fox in Socks</strong> by Dr. Seuss
              </List.LineItem>
              <List.LineItem>$9.99</List.LineItem>
            </List.LiOrderItem>
            <List.LiOrderItem>
              <List.LineItem>
                <strong>Oh, the Places You'll Go!</strong> by Dr. Seuss
              </List.LineItem>
              <List.LineItem>$9.99</List.LineItem>
            </List.LiOrderItem>
          </List>
          <Total>
            <p>
              <strong>Shipping:</strong> FREE
            </p>
            <p>
              <strong>Total:</strong> $29.97
            </p>
          </Total>
          <Widget />
          <Button onClick={this.onClick}>Place Order</Button>
        </Body>
      </Wrapper>
    );
  }
}

export default withRouter(Purchase);
