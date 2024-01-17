import React, { useEffect, useState } from "react";
import "./productsList.css";
import ProductCard from "./../Home/ProductCard";
import useData from "../../hooks/useData";
import { useSearchParams } from "react-router-dom";
import Pagination from "./../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const searchQuery = search.get("search");
  const { data, error } = useData(
    "/products",
    {
      params: {
        search: searchQuery,
        category,
        page,
      },
    },
    [searchQuery, category, page]
  );

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  useEffect(() =>{
    
  }, [searchQuery, category])

  const [sortBy, setSortBy] = useState("")
  const [sortedProducts, setSortedProducts] = useState([])
  useEffect(() => {
    if(data && data.products){
      const products = [...data.products]
      if (sortBy === "price desc"){
        setSortedProducts(products.sort((a, b) => b.price - a.price))
      }else if(sortBy === "price asc"){
        setSortedProducts(products.sort((a, b) => a.price - b.price))
      }
      else if (sortBy === "rate desc"){
        setSortedProducts(products.sort((a, b) => b.reviews.rate - a.reviews.rate))
      }else if(sortBy === "rate asc"){
        setSortedProducts(products.sort((a, b) => a.reviews.rate - b.reviews.rate))
      }
      else{
        setSortedProducts(products)
      }
    }
  })

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting" onChange={e => setSortBy(e.target.value)}>
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {data?.products &&
          sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      {data && (
        <Pagination
          totalPosts={data?.totalProducts || 0}
          postsPerPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
  );
};

export default ProductsList;
