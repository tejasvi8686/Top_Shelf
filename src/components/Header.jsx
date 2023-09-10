import React from "react";
import Headimg from "../assets/header.png";
import "./head.css";

const Header = () => {
  return (
    <div className="both-left-right">
      <img src={Headimg} alt="" />
      <div className="left-div">
        <span>BEST SELLER</span>
        <h1>BEST DISPENSARY TO BUY WEED ONLINE </h1>
        <p>Vitamins & Supplements</p>
        <div>
          <span>Get 25% off</span>
          <span>Free Shipping</span>
        </div>
        <button className="btn">Shop All</button>
      </div>
      <div className="right-div"></div>
    </div>
  );
};

export default Header;
