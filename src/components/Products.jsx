import React, { useEffect, useState } from "react";
import backgroundLandingPage from "../assets/backgrounds/landing-page.png";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  
  useEffect(() => {
    axios
      .get(`https://manomano-hackathon.herokuapp.com/api/products`)
      .then((rep) => rep.data)
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      <img
        className="products__background"
        src={backgroundLandingPage}
        alt="background de mano mano"
      />
      <div
        className="products__transparent"
        onClick={() => setDropDown(!dropDown)}
      ></div>
      <div
        className={
          dropDown
            ? "products__drop-down-active"
            : "products__drop-down-inactive"
        }
      >
        <div className="products__drop-down__div">My Profile</div>
        <div className="products__drop-down__div">Account settings</div>
        <div className="products__drop-down__div">My orders</div>
        <Link
          to={`/wishlist-page`}
          style={{ textDecoration: "none", color: "#1e3c87" }}
        >
          <div className="products__drop-down__wish">My Wish Lists</div>
        </Link>
        <div className="products__drop-down__log-out">Log Out</div>
      </div>
      <div className="products__item recentlySeen">
        {products.length &&
          products.slice(0, 5).map((product) => {
            return (
              <ProductCard
                id_product={product.id_product}
                key={product.id_product}
                image={require("../assets/productsImg/" + product.picture)}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </div>
      <div className="products__item topSells">
        {products.length &&
          products.slice(5, 10).map((product) => {
            return (
              <ProductCard
                id_product={product.id_product}
                key={product.id_product}
                image={require("../assets/productsImg/" + product.picture)}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
