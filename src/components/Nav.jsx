import React from "react";
import logo from "../images/react-example-logo.svg";
import PageLinks from "./PageLinks.jsx";
import IconLinks from "./IconLinks.jsx";
import { useState } from "react";

function Nav() {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">
          <img src={logo} className="logo-link" alt="logo" />
        </a>
      </div>
      <div className="nav-links">
        <PageLinks 
        parentClass="nav-list" 
        itemClass="nav-link" 
        id="nav-list" />
      </div>
      <div className="nav-icons">
        <IconLinks 
        parentClass="nav-icons-list" 
        itemClass="nav-icon" />
      </div>
      {/* <!-- </div> -->
        <!-- mobile  --> */}
      <div className="nav-mobile">
        <button
          type="button"
          className="nav-mobile-toggle"
          id="nav-mobile-toggle"
          onClick={handleToggle}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <PageLinks
          parentClass={isToggled ? "mobile-nav-list active" : "mobile-nav-list"}
          itemClass="mobile-nav-link"
          id="mobile-nav-list"
        />
        {/* <ul className="mobile-nav-list" id="mobile-nav-list">
                <li><a href="#home" className="mobile-nav-link">Home</a></li>
                <li><a href="#about" className="mobile-nav-link">About</a></li>
                <li><a href="#services" className="mobile-nav-link">Services</a></li>
                <li><a href="#tours" className="mobile-nav-link">Tours</a></li>
            </ul> */}
      </div>
    </nav>
  );
}

export default Nav;
