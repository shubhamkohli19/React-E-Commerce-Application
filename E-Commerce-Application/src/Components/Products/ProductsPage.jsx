import React from "react";
import "./productsPage.css";
import ProductsSidebar from "./ProductsSidebar";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductsSidebar sidebar={true}/>
      <section className="products_list_section"><ProductsList/></section>
    </section>
  );
};

export default ProductsPage;
