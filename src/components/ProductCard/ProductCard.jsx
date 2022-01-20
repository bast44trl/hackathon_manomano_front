import React from 'react';
import './productCard.scss';
import productImg from '../../assets/productsImg/tronconneuseImg.jpg';
import perceuseReviews from '../../assets/reviewsImg/perceuseReviews.png';

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img className='product-img' src={productImg} alt="" />
                <p className='product-title'>Titre</p>
                <img className='reviews-img' src={perceuseReviews} alt="" />
                <p className='price'>56€00</p>
            </div>
        </div>
    );
};

export default ProductCard;