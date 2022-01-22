import React, { useEffect, useState } from "react";
import axios from "axios";
import HorizontalCard from './HorizontalCard';

const Wishlist = ({ toDisplay }) => {
  const [favorites, setFavorites] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [deleteOk, setDeleteOk] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/lists_products/${toDisplay}`)
      .then((res) => res.data)
      .then((data) => setFavorites(data));
  }, [toDisplay, isActive]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/lists_products/${toDisplay}`)
      .then((res) => res.data)
      .then((data) => {setFavorites(data); setDeleteOk(false)});
  }, [deleteOk]);

  return (
    <div className="wishlist">
      <div className="wishlist__containerProduct">
        {favorites &&
          favorites.map((product) => {
            return (
              <HorizontalCard
                setIsActive={setIsActive}
                setDeleteOk={setDeleteOk}
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
