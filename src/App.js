import React, { Component } from "react";
import formatNumber from "format-number";

import {dispatchBtnAction} from './actions';
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
          <button data-amount="20000" onClick={dispatchBtnAction}>WITHDRAW $20,000</button>
          <button data-amount="15000" onClick={dispatchBtnAction}>WITHDRAW $15,000</button>
        </section>

        <p className="app-giveaway">Click on the above buttons and get money</p>
      </div>
    );
  }
}

export default App;
