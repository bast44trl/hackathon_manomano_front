import React, { useEffect, useState } from 'react';
import axios from 'axios';
import wishlist from '../assets/backgrounds/wishlist.png';
import "../styles/_wishlist.scss";
import Products from './Products';
import ProductCard from './ProductCard';


const Wishlist = () => {
    const [favorites, setFavorites] = useState();
let arrayProducts = [];

    useEffect(()=>{
        axios
        .get('http://localhost:8000/api/lists_products/2')
        .then((res)=> res.data.map((patate)=>
            axios
                .get(`http://localhost:8000/api/products/${patate.id_product}`)
                .then((res)=> arrayProducts.push(res.data))
                .then(()=> setFavorites(arrayProducts)
)
            ))
    },[]);
    


  return (
    <div className="wishlist">
      <h1>My favorites</h1>
      <p>2 products</p>
      <div className='wishlist__containerProduct'>

          {favorites && 
            favorites.map((product, index)=>(
                <ProductCard
                key={product.id_product}
                image={require("../assets/productsImg/" + product.picture)}
                title={product.title}
                price={product.price}
              />
            ))
        }

      </div>
    </div>
  );
}

export default Wishlist;