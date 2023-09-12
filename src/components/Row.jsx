import React from "react";
import Button from "../assets/button.png";
import Button2 from "../assets/button2.png";
import Button3 from "../assets/button3.png";
import "./row.css";

const row = () => {
  return (
    <div class="parent-row">
      <div class="row1">
        <div>
          <img class="img1" src={Button} alt="" />
        </div>
        <div>
          <h5 class="heading">Reliable Shipping</h5>
          <span class="para">
            Green Society provides Canada Post Xpress Shipping right to your
            doorstep! You can also opt in for shipping insurance. For orders
            over $149, shipping is free!
          </span>
        </div>
      </div>
      <div class="row1">
        <div>
          <img class="img1" src={Button2} alt="" />
        </div>
        <div>
          <h5 class="heading">You’re Safe With Us</h5>
          <span class="para">
            Our secure payment system accepts the most common forms of payments
            making the checkout process quicker! The payments we accept are
            debit, all major credit cards, and cryptocurrency.
          </span>
        </div>
      </div>
      <div class="row1">
        <div>
          <img class="img1" src={Button3} alt="" />
        </div>
        <div>
          <h5 class="heading">Best Quality & Pricing</h5>
          <span class="para">
            Here at Green Society, we take pride in the quality of our products
            and service. Our prices are set to ensure you receive your
            medication at a reasonable price and safely.
          </span>
        </div>
      </div>
    </div>
  );
};

export default row;
