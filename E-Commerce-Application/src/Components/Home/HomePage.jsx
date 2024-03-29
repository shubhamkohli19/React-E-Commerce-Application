import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone14pro.png";
import mac from "../../assets/macbook.jpg";
import FeaturedProduct from "./FeaturedProduct";

const HomePage = () => {
  return (
    <>
      <div>
        <HeroSection
          title="Buy iPhone 14 Pro"
          subtitle="Experience the power of the latest of our most Pro camera ever."
          link="/products/65a194277a060a49f55ba882"
          image={iphone}
        />
      </div>
      <FeaturedProduct />
      <div>
        <HeroSection
          title="MacBook Air Laptop"
          subtitle="You can add Studio Display and color-matched magic accessories to your bag after configure your Mac mini."
          link="/products/65a194277a060a49f55ba88a"
          image={mac}
        />
      </div>
    </>
  );
};

export default HomePage;
