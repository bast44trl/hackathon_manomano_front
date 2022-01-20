<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishListTab from './WishListTab'
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
// import wishlist from "../assets/backgrounds/wishlist.png";
import "../styles/_wishlist.scss";
import ProductCard from "./ProductCard";
>>>>>>> c65840e457bdc330938c08fc092a28b4b070e37e

const id_list = 3;

const Wishlist = () => {
  const [favorites, setFavorites] = useState();
  let productList = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/lists_products/${id_list}`)
      .then((res) => {
        res.data.map((product) => {
          axios
            .get(`http://localhost:8000/api/products/${product.id_product}`)
            .then((res) => {
              productList.push(res.data);
              setFavorites((favorites) => [...productList]);
            });
        });
      });
  }, []);
  console.log(favorites);

<<<<<<< HEAD
    useEffect(()=>{
        axios
        .get('http://localhost:8000/api/lists_products')
        // .then((response)=> response.data[0])
        .then((res)=> console.log(res))
        // .then((data)=> setFavorite(data));
},[]);
=======
>>>>>>> c65840e457bdc330938c08fc092a28b4b070e37e
  return (
    <div className="wishlist">
      <WishListTab activate={true}/>
      <WishListTab activate={false}/>
      <h1>My favorites</h1>
      <p>2 products</p>
      <div className="wishlist__containerProduct">
        {favorites &&
          favorites.map((product) => (
            <ProductCard
              key={product.id_product}
              image={require("../assets/productsImg/" + product.picture)}
              title={product.title}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
