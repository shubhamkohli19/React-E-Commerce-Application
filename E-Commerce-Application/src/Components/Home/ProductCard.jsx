import React, { useContext } from "react";
import "./productCard.css";
import { NavLink } from "react-router-dom";
import basket from "../../assets/basket.png"
import cartContext from "../../contexts/cartContext";

const ProductCard = ({
  product, featured, image
}) => {
  const {addToCart} = useContext(cartContext);
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${product?._id}`}>
          <img
            src={
              featured ? image : `http://localhost:5000/products/${product?.images[0]}`
            }
          />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">Rs. {product?.price * 83}</h3>
        <p className="product_title">{product?.title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">⭐{product?.reviews.rate}</p>
            <p className="product_review_count">{product?.reviews.counts}</p>
          </div>
          {product?.stock > 0 && (
            <button className="add_to_cart" onClick={() => {
              addToCart(product, 1)
            }}>
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
