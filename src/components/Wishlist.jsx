import React, { useEffect, useState } from "react";
import axios from "axios";
// import wishlist from "../assets/backgrounds/wishlist.png";
import "../styles/_wishlist.scss";
import HorizontalCard from "./HorizontalCard";

const Wishlist = ({ toDisplay }) => {
  const [favorites, setFavorites] = useState([]);
  const [isActive, setIsActive] = useState(false);
  let productList = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/lists_products/${toDisplay}`)
      .then((res) => {
        res.data.map((product) => {
          return axios
            .get(`http://localhost:8000/api/products/${product.id_product}`)
            .then((res) => {
              productList.push(res.data);
              setFavorites((favorites) => [...productList]);
            });
        });
      });
  }, [isActive, toDisplay]);
  console.log(favorites);

  return (
    <div className="wishlist">
      <div className="wishlist__containerProduct">
        {favorites &&
          favorites.map((product) => {
            return (
              <HorizontalCard
                setIsActive={setIsActive}
                id_product={product.id_product}
                id_list={toDisplay}
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

export default Wishlist;
