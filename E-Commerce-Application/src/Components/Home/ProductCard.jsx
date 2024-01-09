import React from "react";
import "./productCard.css";

const ProductCard = ({image, title, rating, price}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="product/1">
          <img src={image} alt="Product Image" />
        </a>
      </div>
      <div className="product_details">
        <h3 className="product_price">Rs. {price}</h3>
        <p className="product_title">{title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">⭐{rating}</p>
            <p className="product_review_count">120</p>
          </div>
          <button className="add_to_cart"></button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
