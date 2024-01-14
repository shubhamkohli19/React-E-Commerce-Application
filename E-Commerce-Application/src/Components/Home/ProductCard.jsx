import React from "react";
import "./productCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  price,
  title,
  rating,
  ratingCounts,
  stock,
  featured,
}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${id}`}>
          <img
            src={
              featured ? image : `http://localhost:5000/products/${image[0]}`
            }
          />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">Rs. {price * 83}</h3>
        <p className="product_title">{title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">⭐{rating}</p>
            <p className="product_review_count">{ratingCounts}</p>
          </div>
          {stock > 0 && <button className="add_to_cart"></button>}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
