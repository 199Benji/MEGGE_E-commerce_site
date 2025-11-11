import React from 'react'
import { useState } from 'react'
import './Androids.css'

const Androids = () => {

  const [cart, setCart] = useState([]);
  
    const products = [
      {
        id: 1,
        name: "Samsung S22",
        price: 440000,
        originalPrice: 640000,
        image: "/src/assets/Samsung S22 New Design.jpg",
        rating: 5,
        category: "Laptops"
      },
      {
        id: 2,
        name: "Redmi Note 13 Pro",
        price: 400000,
        originalPrice: 490000,
        image: "/src/assets/download (23).jpg",
        rating: 4,
        category: "Laptops"
      },
      {
        id: 3,
        name: "REDMAGIC 8 Pro",
        price: 1000000,
        originalPrice: 1700000,
        image: "/src/assets/REDMAGIC 8 Pro Matte_Black, 12 GB RAM + 256 GB Gaming Smartphone.jpg",
        rating: 5,
        category: "Laptops"
      },
      {
        id: 4,
        name: "Samsung S24 Ultra",
        price: 690000,
        originalPrice: 830000,
        image: "/src/assets/SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Yellow.jpg",
        rating: 5,
        category: "Laptop"
      },
      {
        id: 5,
        name: "Samsung S25 Ultra",
        price: 950000,
        originalPrice: 1400000,
        image: "/src/assets/download (33).jpg",
        rating: 5,
        category: "Laptop"
      },
      {
        id: 6,
        name: "Google Pixel 9",
        price: 380000,
        originalPrice: 520000,
        image: "/src/assets/Google pixel 9.jpg",
        rating: 5,
        category: "Laptop"
      },
      {
        id: 7,
        name: "Nokia Air 2025",
        price: 260000,
        originalPrice: 350000,
        image: "/src/assets/Nokia Air 2025, Price, Features.jpg",
        rating: 3,
        category: "Laptop"
      },
      {
        id: 8,
        name: "Vivo Y19s",
        price: 170000,
        originalPrice: 250000,
        image: "/src/assets/vivo Y19s.jpg",
        rating: 2,
        category: "Laptop"
      },
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
          <h1>Androids</h1>
          <p>Find the perfect Android to power your unique digital life.</p>
        </div>
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
}

export default Androids