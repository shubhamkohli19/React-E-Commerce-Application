import React from "react";
import "./productsList.css";
import ProductCard from "./../Home/ProductCard";
import iphone15 from "../../assets/iphone15.webp";

const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="" Relevance></option>
          <option value="price desc" Price HIGH to LOW></option>
          <option value="price asc" Price LOW to HIGH></option>
          <option value="rate desc" Rate HIGH to LOW></option>
          <option value="rate asc" Rate LOW to HIGH></option>
        </select>
      </header>
      <div className="products_list">
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
        <ProductCard
          image={iphone15}
          title="iPhone 15 PRO"
          rating="4.5"
          price="58,999"
        />
      </div>
    </section>
  );
};

export default ProductsList;
