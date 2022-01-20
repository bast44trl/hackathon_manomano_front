import React from 'react';
import productImg from '../../assets/productsImg/tronconneuseImg.jpg';
import perceuseReviews from '../../assets/reviewsImg/perceuseReviews.png';

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='product-card__content'>
                <img className='product-card__content__img' src={productImg} alt="" />
                <p className='product-card__content__title'>Titre</p>
                <img className='product-card__content__reviews-img' src={perceuseReviews} alt="" />
                <p className='product-card__content__price'>56€00</p>
            </div>
        </div>
    );
};

export default ProductCard;