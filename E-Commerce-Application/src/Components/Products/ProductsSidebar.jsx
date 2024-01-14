import React from "react";
import "./productsSidebar.css";
import { NavLink } from "react-router-dom";
import useData from "../../hooks/useData";

const ProductsSidebar = ({ sidebar }) => {
  const {data: categories, error} = useData("/category")

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {categories && categories.map((category) => (
          <NavLink
            key={category._id}
            to={`/products?category=${category.name}`}
            className={sidebar ? "align_center sidebar_link" : "align_center"}
          >
            <div className="align_center">
              <div>
                <img
                  src={`http://localhost:5000/category/${category.image}`}
                  alt=""
                />
              </div>
              <div>{category.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
