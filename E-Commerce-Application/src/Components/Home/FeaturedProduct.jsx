import React from 'react'
import "./featuredProduct.css"
import ProductCard from './ProductCard'
import iphone15 from "../../assets/iphone15.webp"
import samsungS23 from "../../assets/samsungS23.webp"
import pixel8pro from "../../assets/pixel8pro.webp"

const FeaturedProduct = () => {
  return (
    <section className='featured_products'>
        <h2>Featured Products</h2>
        <div className='align_center featured_products_list'>
            <ProductCard image={iphone15} title="iPhone 15 PRO" rating="4.5" price="58,999"/>
            <ProductCard image={samsungS23} title="Samsung S23 ULTRA" rating="5.0" price="65,990"/>
            <ProductCard image={pixel8pro} title="Pixel 8 PRO" rating="4.3" price="95,990"/>
        </div>
    </section>
  )
}

export default FeaturedProduct