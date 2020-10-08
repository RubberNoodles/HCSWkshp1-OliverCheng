import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Lol</h1>
        <div className="info-bar">
          <p className="info-item">yourname@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link className="info-link"
          to={{pathname:"https://instagram.com"}}
          target="_blank"> 
          Instagram</Link>
          <p>Good morning!!!!!!!!!!</p>
          <p>GOOD NIGHT!!!!</p>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link"
        to = {{pathname: '/projects'}}>
          Projects!!
        </Link>
        <Link className="nav-link"
        to = {{pathname: '/about'}}>
          About mee
        </Link>
        <Link className="nav-link"
        to = {{pathname: '/experience'}}>
          Experience my glory
        </Link>
      </div>
    </>
  );
}
