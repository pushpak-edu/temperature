import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputTemp, setInputTemp] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <div className="App">

      <p className="title">The Temperature Conversion by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Enter the Temperature :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputTemp(e.target.value)}
          value={inputTemp}
          type="text">
        </input>
      </div>

      <div className="numbers">
        <button className="buttonStyle"
          onClick={() => setResult(inputTemp + '°C is ' + Math.round((((inputTemp * 9) / 5 + 32) + Number.EPSILON) * 100) / 100 + '°F')}
          type="button">Celsius To Fahrenheit</button>
        <button className="buttonStyle"
          onClick={() => setResult(inputTemp + '°F is ' + Math.round(((((inputTemp - 32) * 5) / 9) + Number.EPSILON) * 100) / 100 + '°C')}
          type="button">Fahrenheit To Celsius</button>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            The Temperature Converter is :
          </p>
        </p>
        <p className="buttonStyle">
          {result}
        </p>
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootElement);
