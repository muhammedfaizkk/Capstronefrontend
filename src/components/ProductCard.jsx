import React from 'react';
import './styles/ProductCard.css'; // Ensure this path is correct
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import React Icons

const ProductCard = () => {
    return (
        <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src="https://i.imgur.com/xdbHo4E.png" alt="Product" />
            </div>
            <div className="product-details">
                <span className="product-catagory">Women, bag</span>
                <h4><a href="#">Women Leather Bag</a></h4>
                <div className="product-bottom-details">
                    <div className="product-price"><small>$96.00</small>$230.99</div>
                    <div className="product-links">
                        <a href="#"><FaHeart className="icon" /></a>
                        <a href="#"><FaShoppingCart className="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
