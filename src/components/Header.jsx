import React from "react";
import Headimg from "../assets/header.png";

import "./head.css";

const Header = () => {
  return (
    <div className="parent-div">
      <img src={Headimg} alt="" />

      <div className="left-div">
        <span className="best">BEST SELLER</span>
        <h1 className="buy">
          BEST DISPENSARY TO <br /> BUY WEED ONLINE{" "}
        </h1>
        <p className="vitmains">Vitamins & Supplements</p>
        <div className="spans">
          <span className="get">Get 25% off</span>
          <span className="straight"></span>
          <span className="get">Free Shipping</span>
        </div>
        <button className="btn">Shop All</button>
      </div>
    </div>
  );
};

export default Header;
