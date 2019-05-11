import React, { Component } from "react";

import formatNumber from "format-number";
import {store} from './store';

import photographer from "./images/banner.png";

import "./App.css";

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="app">
        <img className="app-user-pic" src={photographer} alt="user" />
        <p className="app-username">Hello, {username}! </p>
        <div className="app-amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="app-amount-info">Total Amount</p>
        </div>

        <section className="app-buttons">
          <button data-amount="20000">WITHDRAW $20,000</button>
          <button data-amount="15000">WITHDRAW $15,000</button>
        </section>

        <p className="app-giveaway">Do you want money?</p>
      </div>
    );
  }
}

export default App;
