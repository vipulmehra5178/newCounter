/* eslint-disable react/style-prop-object */
import { useState } from "react";
import "./Counterstyle.css";

export default function Counter() {
  const [value, setData] = useState(0);

  return (
    <div>
      <div className="background-set">
        <div className="counter-container">
          <h1 className="mycounter">Countify</h1>
          <h4 className="mycounter1"> A Counter App</h4>
          <p className="description">
            This is a simple counter that increments and decrements by 1.
            <br />
            This simple counter app helps you increment, decrement, and reset a
            numeric value.
            <br />
            Use the buttons below to see how it works!
          </p>

          <h2 className="count">Current Count: {value}</h2>
          <p className="value-status">
            {value > 0
              ? "The counter is positive. 🎉"
              : value < 0
              ? "The counter is negative. ⚠️"
              : "The counter is zero. 🤔"}
          </p>

          <div className="Btn-container">
            <button className="Btn1" onClick={() => setData(value + 1)}>
              Increment
            </button>
            <button className="Btn2" onClick={() => setData(value - 1)}>
              Decrement
            </button>
            <button className="Btn1 reset" onClick={() => setData(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <h3>Created by Vipul</h3> 
      </footer>
    </div>
  );
}
