import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wishlisthead from "../assets/backgrounds/header_ManoMano3.png";
import wishlistfooter from "../assets/backgrounds/footer_ManoMano3.png";
import Wishlist from "./Wishlist";
import WishListTab from "./WishListTab";
import axios from "axios";

const WishlistPage = () => {
  const [lists, setLists] = useState([]);
  const [toDisplay, setToDisplay] = useState();
  const [refreshList, setRefreshList] = useState(false);
  const [listDeleted, setListDeleted] = useState(false);

  useEffect(() => {
    axios
      .get("https://manomano-hackathon.herokuapp.com/api/lists")
      .then((res) => res.data)
      .then((data) => setLists(data));
  }, [refreshList]);

  useEffect(() => {
    axios
      .get("https://manomano-hackathon.herokuapp.com/api/lists")
      .then((res) => res.data)
      .then((data) => {setLists(data); setListDeleted(false)});
  }, [listDeleted]);
  
  return (
    <div className="wishlistPage">
      <Link to={`/home`}><div
        className="wishlistPage__logo"
      ></div></Link>
      <img className="wishlistPage__img" src={wishlisthead} alt="" />
      <div className="wishlistPage__container">
        <div className="wishlistPage__container--left">
          <h1 id="myfav">My favorites</h1>
          {lists &&
            lists.map((el) => {
              return (
                <WishListTab
                  name={el.name}
                  key={el.id_list}
                  activate={el.id_list === 1 ? true : false}
                  setTodisplay={setToDisplay}
                  id={el.id_list}
                  setListDeleted={setListDeleted}
                  setRefreshList={setRefreshList}
                />
              );
            })}
        </div>
        <Wishlist
          toDisplay={toDisplay}
          className="wishlistPage__container--right"
        />
      </div>
      <img className="wishlistPage__img" src={wishlistfooter} alt="" />
    </div>
  );
};

export default WishlistPage;
