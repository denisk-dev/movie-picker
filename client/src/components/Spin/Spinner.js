/**
 * author: Denis Kravchenko
 */
import React from "react";
import spinner from "./Ripple-1s-200px.svg";

//Random effect visual
export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ display: "block", margin: "50px auto", width: 400 }}
      />
    </div>
  );
};
