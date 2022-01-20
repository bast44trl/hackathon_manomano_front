import React, { useState } from "react";
// import productImg from "../../assets/productsImg/tronconneuseImg.jpg";
// import perceuseReviews from "../../assets/reviewsImg/perceuseReviews.png";
import emptyHeart from "../../assets/PNG/emptyHeart.png";
import redHeart from "../../assets/PNG/redHeart.png";
/* import purchased from '../../assets/PNG/purchased.png'; */
import { BsCheck2Circle } from "react-icons/bs";

const ProductCard = ({ title, picture, price, review }) => {
  const [favoriteActive, setFavoriteActive] = useState(false);
  console.log(picture);
  //   console.log(review);
  //   console.log(title);

  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          className="product-card__content__img"
          src={`../../assets/productsImg/${picture}`}
          alt=""
        />
        <p className="product-card__content__title">
          {/* La tronçonneuse des mec de la pub Orangina, mais pourquoi sont ils si
          méchants ? */}
          {title}
        </p>
        <img
          className="product-card__content__reviews-img"
          src={review}
          alt=""
        />
        <div className="product-card__content__price-favorite">
          <div className="product-card__content__price-favorite__price">
            <div className="product-card__content__price-favorite__price__number">
              £{price}
            </div>
            {/* <div className='product-card__content__price-favorite__price__euro'>
                            €
                        </div> */}
          </div>
          <div className="product-card__content__price-favorite__favorite-purchased">
            <div className="product-card__content__price-favorite__favorite-purchased__favorite">
              <img
                className="product-card__content__price-favorite__favorite-purchased__favorite__empty-heart favorite"
                src={emptyHeart}
                alt="empty heart"
                onClick={() => setFavoriteActive(!favoriteActive)}
              />
              <img
                className="product-card__content__price-favorite__favorite-purchased__favorite__red-heart"
                src={redHeart}
                alt="red heart"
              />
            </div>
            <div className="product-card__content__price-favorite__favorite-purchased__purchased">
              <BsCheck2Circle className="product-card__content__price-favorite__favorite-purchased__purchased__icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
