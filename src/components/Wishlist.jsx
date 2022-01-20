import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishListTab from './WishListTab'


const Wishlist = () => {
    const [favorite, setFavorite] = useState();

    useEffect(()=>{
        axios
        .get('http://localhost:8000/api/lists_products')
        // .then((response)=> response.data[0])
        .then((res)=> console.log(res))
        // .then((data)=> setFavorite(data));
},[]);
  return (
    <div className="wishlist">
      <WishListTab activate={true}/>
      <WishListTab activate={false}/>
      <h1>My favorites</h1>
      <p>2 products</p>
      <div className='wishlist__containerProduct'>
          {favorite && 
            favorite.map((favorite, index)=>(
                <Wishlist
                    id={favorite.id}
                    key={index}
                    />
            ))
        }

      </div>
    </div>
  );
}

export default Wishlist;