import React, { useContext } from "react";
import "./productCard.css";
import { NavLink } from "react-router-dom";
import basket from "../../assets/basket.png";
import cartContext from "../../contexts/cartContext";
import config from "../../config.json"

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${product?._id}`}>
          <img src={`${config.backendURL}/products/${product?.images[0]}`} />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">Rs. {parseInt(product?.price) * 83}</h3>
        <p className="product_title">{product?.title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              ⭐{product?.reviews.rate}
            </p>
            <p className="product_review_count">{product?.reviews.counts}</p>
          </div>
          {product?.stock > 0 && (
            <button
              className="add_to_cart"
              onClick={() => {
                addToCart(product, 1);
              }}
            >
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
