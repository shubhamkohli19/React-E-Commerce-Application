import React from "react";
import "./productsList.css";
import ProductCard from "./../Home/ProductCard";
import useData from "../../hooks/useData";
import { useSearchParams } from "react-router-dom";
import Pagination from "./../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const { data, error } = useData(
    "/products",
    {
      params: {
        category,
        page,
      },
    },
    [category, page]
  );

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
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
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
              featured={false}
            />
          ))}
      </div>
      {data && <Pagination
        totalPosts={data?.totalProducts || 0} // Use optional chaining to handle null or undefined
        postsPerPage={8}
        onClick={handlePageChange}
        currentPage={page}
      />}
    </section>
  );
};

export default ProductsList;
