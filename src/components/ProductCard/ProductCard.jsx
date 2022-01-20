import React from 'react';
import productImg from '../../assets/productsImg/tronconneuseImg.jpg';
import perceuseReviews from '../../assets/reviewsImg/perceuseReviews.png';

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='product-card__content'>
                <img className='product-card__content__img' src={productImg} alt="" />
                <p className='product-card__content__title'>La tronçonneuse des mec de la pub Orangina, mais pourquoi sont ils si méchants ?</p>
                <img className='product-card__content__reviews-img' src={perceuseReviews} alt="" />
                <div className='product-card__content__price-favorite'>
                    <div className='product-card__content__price-favorite__price'>
                        <div className='product-card__content__price-favorite__price__number'>
                            56
                        </div>
                        <div className='product-card__content__price-favorite__price__euro'>
                            €
                        </div>
                    </div>
                    <div className='product-card__content__price-favorite__favorite-purchased'>
                        <div className='product-card__content__price-favorite__favorite-purchased__favorite'></div>
                        <div className='product-card__content__price-favorite__favorite-purchased__purchased'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;