import React, { useState } from "react";
import logo from "../../assets/logo.svg";

function NavBar(props) {
  const [sideBarClass, setSideBarClass] = useState("sidebar");

  const openNav = () => {
    console.log(`${sideBarClass} sidebar-show`);
    setSideBarClass(`${sideBarClass} sidebar-show`);
  };

  const closeNav = () => {
    setSideBarClass("sidebar");
  };

  return (
    <>
      <div className={sideBarClass} id="sidebar">
        <button onClick={closeNav} className="close-menu" href="a">
          X
        </button>
        <div className="siderbar-buttons">
          <a className="sidebar-button" href="a">
            Sign In
          </a>
          <a className="sidebar-button" href="a">
            Model 3
          </a>
          <a className="sidebar-button" href="a">
            Model Y
          </a>
          <a className="sidebar-button" href="a">
            Model X
          </a>
          <a className="sidebar-button" href="a">
            Model S
          </a>
        </div>
      </div>
      <div className="navbar-sticky">
        <div className="navbar">
          <div>
            <a className="logo" href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbtns">
            <a className="navbtn" href="http://localhost:3000/index.html">
              Model 3
            </a>
            <a className="navbtn" href="http://localhost:3000/index.html">
              Model Y
            </a>
            <a className="navbtn" href="http://localhost:3000/index.html">
              Model X
            </a>
            <a className="navbtn" href="http://localhost:3000/index.html">
              Model S
            </a>
          </div>
          <div>
            <a className="navbtn" href="http://localhost:3000/index.html">
              Sign In
            </a>
            <button
              onClick={openNav}
              className="navbtn-menu"
              id="navbtn-menu"
              href="http://localhost:3000/index.html"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
