import React, { useState } from "react";
import Navlogo from "../assets/image/logos.png";
import kart from "../assets/image/cart.png";
import Search from "../assets/image/search.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="Navbar">
        <div className="logo-image">
          <img src={Navlogo} alt="navimage" />
        </div>
        <div className="nav">
          <ul className="home-link">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="link">
                Shop{" "}
              </Link>
            </li>
            <li>
              <Link to="/Accessories" className="link">
                {" "}
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-kart">
          <input type="text" className="search" img src={Search} />
          <button className="log">
            <Link to="/login" className="link">
              login
            </Link>{" "}
          </button>
          <img src={kart} className="Karts" alt="kart" />
        </div>
      </div>
    </div>
  );
}
