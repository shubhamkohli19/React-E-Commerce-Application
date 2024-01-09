import React from 'react'
import "./productsSidebar.css"

const ProductsSidebar = ({sidebar}) => {
  return (
    <aside className="products_sidebar">
        <h2>Category</h2>
        <div className='category_links'>
            <a href="products?category=electronics" className={sidebar ? "align_center sidebar_link" : "align_center"}>Electronics🚀</a>
        </div>
    </aside>
  )
}

export default ProductsSidebar