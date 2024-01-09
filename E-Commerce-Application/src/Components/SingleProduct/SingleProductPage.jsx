import React, { useState } from "react";
import "./singleProductPage.css";
import product from "../../Product.js";

const SingleProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
  return (
    <section className="align_center single_product">
      <div className="align_center">
        <div className="single_product_thumbnails">
          {product.images.map((image, index) => (
            <img src={image} key={index} className={selectedImage === index ? "selected_image" : ""} onClick={() => setSelectedImage(index)} />
          ))}
        </div>

        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="single_product_display"
        />
      </div>
      <div className="single_product_details">
        <h1 className="single_product_title">{product.title}</h1>
        <p className="single_product_description">{product.description}</p>
        <p className="single_product_price">${product.price.toFixed(2)}</p>
        <h2 className="quantity_title">Quantity:</h2>
        <div className="align_center quantity_input">
            <button className="quantity_input_button" disabled> - </button>
            <p className="quantity_input_count">1</p>
            <button className="quantity_input_button" disabled> + </button>
        </div>

        <button className="search_button add_cart">Add to Cart</button>
      </div>
    </section>
  );
};

export default SingleProductPage;
