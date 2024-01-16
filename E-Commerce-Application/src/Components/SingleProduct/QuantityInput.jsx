import React from "react";
import "./quantityInput.css";

const QuantityInput = ({ quantity, setQuantity, stock, cartPage, productId }) => {
  return (
    <>
      <button
        className="quantity_input_button"
        disabled={quantity <= 1}
        onClick={() => {
          cartPage
            ? setQuantity( "decrease", productId) && console.log("Decreased")
            : setQuantity(quantity - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button
        className="quantity_input_button"
        onClick={() => {
          cartPage
            ? setQuantity("increase", productId) && console.log("Increased")

            : setQuantity(quantity + 1);
        }}
        disabled={quantity >= stock}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QuantityInput;
