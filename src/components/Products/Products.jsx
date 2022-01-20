import React, { useEffect, useState } from "react";
import backgroundLandingPage from "../../assets/backgrounds/landing-page.png";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const Products = () => {
  // const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((rep) => console.log(rep));
  }, []);
  return (
    <div className="products">
      <img
        className="products__background"
        src={backgroundLandingPage}
        alt="background de mano mano"
      />
      <div className="products__item recentlySeen">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="products__item topSells">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
