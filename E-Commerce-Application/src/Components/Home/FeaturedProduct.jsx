import React from "react";
import "./featuredProduct.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";

const FeaturedProduct = () => {
  const { data } = useData("/products/featured");
  return (
    <section className="featured_products">
      <h2>Featured Products</h2>
      <div className="align_center featured_products_list">
        {data &&
          data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
