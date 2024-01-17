import React, { useContext, useState } from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";
import cartContext from "../../contexts/cartContext";

const Navbar = () => {
  const user = useContext(userContext);
  const { cart } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
  };

  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">StellarShop</h1>
        <form className="align_center navbar_form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="Submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <NavLink to="/" className="align_center">
          Home
        </NavLink>
        <NavLink to="/products" className="align_center">
          Products
        </NavLink>
        {!user && (
          <>
            <NavLink to="/login" className="align_center">
              Log In
            </NavLink>
            <NavLink to="/signup" className="align_center">
              Sign Up
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/myorders" className="align_center">
              My Orders
            </NavLink>
            <NavLink to="/logout" className="align_center">
              Log Out
            </NavLink>
            <NavLink to="/cart" className="align_center">
              Cart<p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
