import React from "react";
import "./list.css";
import Stone1 from "../assets/stone1.png";
import Stone2 from "../assets/stone2.png";
import Stone3 from "../assets/stone3.png";
import Stone4 from "../assets/stone4.png";


const List = () => {
  return (
    <div className="parent-container">
      <div className="stone1">
        <div className="img-part1">
          <img className="stones1" src={Stone1} alt="" />
        </div>
        <div className="article">
          <h4 className="stone1-head">Shop our Best Sellers</h4>
          <p className="stone1-para">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.
          </p>
        </div>
        <div>
          <button className="stone1-btn">View All</button>
        </div>
      </div>

      <div className="stone2">
        <div className="images-part2">
          <img className="stones2" src={Stone2} alt="" />
          <div className="shadow"></div>
        </div>
        <div className="article2">
          <div className="write">
            <p className="stone-2-para">FLOWER</p>
            <h4 className="stone2-head">
              {" "}
              2 Oz Deal Watermelon Zkittles + Purple Gushers
            </h4>
            <div className="stone-2-star">
              <p className="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
                    fill="#F2BC1B"
                    stroke="#F2BC1B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                4.6/5
              </p>
              <div className="line"></div>
              <p className="no">135</p>
              <p className="review">Review</p>
            </div>

            <div className="savs">
              <span className="sav">Sativa 100%</span>
            </div>
          </div>
          <div className="stone-2-rating">
            <div className="rating">
              <p className="dollor">$80.00</p>
              <p className="weight">/ gram</p>
            </div>
            <div className="gram">
              <div className="grs">
                <p className="gr">28g</p>
              </div>
              <div className="grs">
                <p className="gr">1/2lb</p>
              </div>
              <div className="grs">
                {" "}
                <p className="gr">1/4lb</p>
              </div>
            </div>

            <button className="carts">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="stone2">
        <div className="images-part2">
          <img className="stones2" src={Stone3} alt="" />
          <div class="label">
            <div class="out-of-stock">Out Of Stock</div>
          </div>
        </div>
        <div className="article2">
          <div className="write">
            <p className="stone-2-para">FLOWER</p>
            <h4 className="stone2-head">
              {" "}
              Mix And Match Shatter/Budder 28g (4 X 7G)
            </h4>
            <div className="stone-2-star">
              <p className="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
                    fill="#F2BC1B"
                    stroke="#F2BC1B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                4.6/5
              </p>
              <div className="line"></div>
              <p className="no">135</p>
              <p className="review">Review</p>
            </div>

            <div className="savs">
              <span className="sav">Indica 70%</span>
            </div>
          </div>
          <div className="stone-2-rating">
            <div className="rating">
              <p className="dollor">$200.00</p>
              <p className="weight">$102.00</p>
            </div>
            <div className="gram">
              <div className="grs">
                <p className="gr">28g</p>
              </div>
              <div className="grs">
                <p className="gr">1/2lb</p>
              </div>
              <div className="grs">
                {" "}
                <p className="gr">1/4lb</p>
              </div>
            </div>

            <button className="carts">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="stone2">
        <div className="images-part2">
          <img className="stones2" src={Stone4} alt="" />
          <div className="shadow"></div>
        </div>
        <div className="article2">
          <div className="write">
            <p className="stone-2-para">FLOWER</p>
            <h4 className="stone2-head"> 2 Oz Deal Ahi Tuna + Master Tuna</h4>
            <div className="stone-2-star">
              <p className="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
                    fill="#F2BC1B"
                    stroke="#F2BC1B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                4.6/5
              </p>
              <div className="line"></div>
              <p className="no">135</p>
              <p className="review">Review</p>
            </div>

            <div className="savs">
              <span className="sav">Sativa 100%</span>
            </div>
          </div>
          <div className="stone-2-rating">
            <div className="rating">
              <p className="dollor">$200.00</p>
              <p className="weight">$102.00</p>
            </div>
            <div className="gram">
              <div className="grs">
                <p className="gr">28g</p>
              </div>
              <div className="grs">
                <p className="gr">1/2lb</p>
              </div>
              <div className="grs">
                {" "}
                <p className="gr">1/4lb</p>
              </div>
            </div>

            <button className="carts">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
