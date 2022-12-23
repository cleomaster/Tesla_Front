import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { APIUrl } from './../services/services';


function NavBar(props) {
  const navigate = useNavigate();
  const [sideBarClass, setSideBarClass] = useState("sidebar");

  const openNav = () => {
    console.log(`${sideBarClass} sidebar-show`);
    setSideBarClass(`${sideBarClass} sidebar-show`);
  };

  const closeNav = () => {
    setSideBarClass("sidebar");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <div className={sideBarClass} id="sidebar">
        <button onClick={closeNav} className="close-menu" href="a">
          X
        </button>
        <div className="siderbar-buttons">
          <Link className="sidebar-button" to="/login">
            Sign In
          </Link>
          <Link className="sidebar-button" to="/product/1">
            Model X
          </Link>
          <Link className="sidebar-button" to="/product/2">
            Model Y
          </Link>
          <Link className="sidebar-button" to="/product/3">
            Model S
          </Link>
          <Link className="sidebar-button" to="/product/4">
            Model S
          </Link>
        </div>
      </div>
      <div className="navbar-sticky">
        <div className="navbar">
          <div>
            <Link className="logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbtns">
            <Link className="navbtn" to="/product/1">
              Model X
            </Link>
            <Link className="navbtn" to="/product/2">
              Model Y
            </Link>
            <Link className="navbtn" to="/product/3">
              Model S
            </Link>
            <Link className="navbtn" to="/product/4">
              Model 3
            </Link>
          </div>
          <div>
          {localStorage.getItem("token") &&   <Link className="navbtn" to="/cartpage">
              Cart
            </Link>}
            {localStorage.getItem("token") === null ?  <Link className="navbtn" to="/login">
              Sign In
            </Link> : <button onClick={logout} className="navbtn" to="/login">
              Logout
            </button>}
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
