import React, { useState, useEffect } from 'react';
import "./nav.css";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="top-bar">
        <p className="bar">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
        <span className="bars">23 : 15 : 00</span>
      </div>
      <nav className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
        <div className="imgs">
          <img className="pics" src={Logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input className="forms" type="text" placeholder="Search" />
          <button className="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.5 16.5L15 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        </div>
        <div className="accounts">
          <p className="your">Your Account</p>
          <span className="line"></span>
          <div className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.5 7.66952V6.69952C7.5 4.44952 9.31 2.23952 11.56 2.02952C14.24 1.76952 16.5 3.87952 16.5 6.50952V7.88952" stroke="#46494F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z" stroke="#46494F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.4955 12H15.5045" stroke="#46494F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.49451 12H8.50349" stroke="#46494F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>  </div>
        </div>
      </nav>
      <div className="bottom-bar">
      <ol className="order-list">
      <li className="shop">Shop All</li>
      <li className="flower">Flower
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461" stroke="#46494F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </li>
      <li className="edibles">Edibles</li>
      <li className="concentrates">Concentrates
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461" stroke="#46494F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </li>
      <li className="mushrooms">Mushrooms</li>
      <li className="promations">Promations/Bundles
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461" stroke="#46494F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </li>
      <li className="support">Support
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461" stroke="#46494F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </li>
      <li className="reward">Reward</li>
      <li className="block">Block</li>
      </ol>
      </div>
    </div>
  );
};

export default Navbar;
