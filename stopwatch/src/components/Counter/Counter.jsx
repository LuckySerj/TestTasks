import React from "react";
import "./Counter.scss";

const Counter = ({ time }) => {
  return (
    <div className="counter-wrapper">
      <span className="time">
        {("0" + Math.floor((time / (60 * 60)) % 24)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className="time">
        {("0" + (Math.floor(time / 60) % 60)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className="time">{("0" + Math.floor(time % 60)).slice(-2)}</span>
    </div>
  );
};

export default Counter;
