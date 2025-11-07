import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Items.css';
import ProductPage from '../pages/ProductPage';

const Items = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Apple Macbook Air",
      price: 1440000,
      originalPrice: 1940000,
      image: "/src/assets/download (18).jpg",
      rating: 4,
      category: "Laptops"
    },
    {
      id: 2,
      name: "Asus ROG Zephyrus Gaming G16",
      price: 3500000,
      originalPrice: 3900000,
      image: "/src/assets/White crown best gaming laptop.jpg",
      rating: 5,
      category: "Laptops"
    },
    {
      id: 3,
      name: "Microsoft Surface Pro 11th Edition",
      price: 2400000,
      originalPrice: 3500000,
      image: "/src/assets/Microsoft Surface Book.jpg",
      rating: 5,
      category: "Tablets"
    },
    {
      id: 4,
      name: "Apple iPhone 16 Pro Max",
      price: 780000,
      originalPrice: 1440000,
      image: "/src/assets/Apple debuts iPhone 16 Pro and iPhone 16 Pro Max.jpg",
      rating: 3,
      category: "Smartphones"
    },
    {
      id: 5,
      name: "Samsung S22 New Design",
      price: 640000,
      originalPrice: 950000,
      image: "/src/assets/Samsung S22 New Design.jpg",
      rating: 5,
      category: "Smartphones"
    },
    {
      id: 6,
      name: "RazorBlade Gaming Headphone",
      price: 245000,
      originalPrice: 300000,
      image: "/src/assets/Amazon_com_ Headphones & Earbuds_ Electronics_ Earbud Headphones, Over-Ear Headphones, On-Ear Headphones & More.jpg",
      rating: 4,
      category: "Accessories"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    
    // Show alert notification
    alert(`✅ ${product.name} has been added to cart!`);
    
    // Display's the product name in the console of your browser
    console.log(`Added ${product.name} to cart`);
  };

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fa-solid fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };
  
  return (
    <div className="ecommerce-products">
      <div className="products-header">
        <div className="header-content">
          <h1>Featured Products</h1>
          <p>Discover our latest collection of premium electronics</p>
        </div>
        <NavLink to="/ProductPage" className="view-all-btn" title="Product" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View All Products <i className="fa-solid fa-arrow-right"></i></NavLink>       
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-badges">
                <span className="discount-badge">
                  -{calculateDiscount(product.originalPrice, product.price)}%
                </span>
                <span className="category-badge">{product.category}</span>
              </div>
              <button 
                className="wishlist-btn"
                aria-label="Add to wishlist"
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>

            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              
              <div className="product-rating">
                <div className="stars">
                  {renderStars(product.rating)}
                </div>
                <span className="rating-text">({product.rating}.0)</span>
              </div>

              <div className="product-pricing">
                <span className="current-price">
                  {formatPrice(product.price)}
                </span>
                <span className="original-price">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>

              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="products-footer">
        <p>Showing {products.length} products</p>
        <div className="cart-summary">
          <span className="cart-count">
            <i className="fa-solid fa-cart-shopping"></i>
            {cart.length} items in cart
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Items;