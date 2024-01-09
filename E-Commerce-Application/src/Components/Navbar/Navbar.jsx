import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="Submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <a href="#" className="align_center">
          Home
        </a>
        <a href="#" className="align_center">
          Products
        </a>
        <a href="#" className="align_center">
          Log In
        </a>
        <a href="#" className="align_center">
          Sign Up
        </a>
        <a href="#" className="align_center">
          My Orders
        </a>
        <a href="#" className="align_center">
          Log Out
        </a>
        <a href="#" className="align_center">
          Cart<p className="align_center cart_counts">0</p>
          
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
