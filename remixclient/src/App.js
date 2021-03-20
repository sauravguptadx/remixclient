import React, { useState } from "react";
import Web3 from "web3";
import { ContractABI } from "./ContractABI";

import "./App.css";


  const getDefaultData = async e => {
    RemixContract.methods
      .defaultMessage()
      .call()
      .then(console.log);
  };

  const getData = async e => {
    RemixContract.methods
      .getMessage()
      .call()
      .then(console.log);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={setData}>
          <label>
            Set Message:
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Message" />
        </form>
        <br />
        <button onClick={getData} type="button">
          Get Message
        </button>
        <button onClick={getDefaultData} type="button">
          Get Default Message
        </button>
      </header>
    </div>
  );
}

export default App;
