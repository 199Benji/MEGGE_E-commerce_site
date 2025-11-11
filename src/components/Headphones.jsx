import React from 'react'
import { useState } from 'react'
import './Headphones.css';

const Headphones = () => {

  const [cart, setCart] = useState([]);
    
      const products = [
        {
          id: 1,
          name: "RazorBlade Gaming Headphone",
          price: 440000,
          originalPrice: 640000,
          image: "/src/assets/Amazon_com_ Headphones & Earbuds_ Electronics_ Earbud Headphones, Over-Ear Headphones, On-Ear Headphones & More.jpg",
          rating: 5,
          category: "Laptops"
        },
        {
          id: 2,
          name: "Asus Gaming Earbuds",
          price: 350000,
          originalPrice: 490000,
          image: "/src/assets/download (25).jpg",
          rating: 5,
          category: "Laptops"
        },
        {
          id: 3,
          name: "Baseus Earbuds Pro",
          price: 7000,
          originalPrice: 12000,
          image: "/src/assets/download (27).jpg",
          rating: 2,
          category: "Laptops"
        },
        {
          id: 4,
          name: "Sony Space Headphone Go 5",
          price: 19000,
          originalPrice: 30000,
          image: "/src/assets/2014 IF reward Sony.jpg",
          rating: 3,
          category: "Laptop"
        },
        {
          id: 5,
          name: "JBL Ultra Bass Headphone",
          price: 34000,
          originalPrice: 53000,
          image: "/src/assets/download (28).jpg",
          rating: 4,
          category: "Laptop"
        },
        {
          id: 6,
          name: "JBL Deep Bass Earbuds",
          price: 28000,
          originalPrice: 42000,
          image: "/src/assets/JBL wireless earbuds.jpg",
          rating: 4,
          category: "Laptop"
        },
        {
          id: 7,
          name: "Samsung Galaxy Buds3 Pro",
          price: 26000,
          originalPrice: 35000,
          image: "/src/assets/Samsung Galaxy Buds3 Pro_ The Wireless Earbuds Changing the Game.jpg",
          rating: 4,
          category: "Laptop"
        },
        {
          id: 8,
          name: "Wireless Beats By Dr Dre",
          price: 52000,
          originalPrice: 70000,
          image: "/src/assets/Wireless Beats by Dr Dre in Matte Black!! I need good quality headphones since I only get half the sound you do_ Remember that!!.jpg",
          rating: 3,
          category: "Laptop"
        },
        {
          id: 8,
          name: "Realme T110 Earbuds",
          price: 5200,
          originalPrice: 7000,
          image: "/src/assets/realme T110 True Wireless Earbuds, 10mm Dynamic Bass Driver, 38 Hours Playback, AI ENC Noise Cancellation, Lightweight in Ear Headphones, IPX5 Water Resistance, Bluetooth 5_4, Punk Black.jpg",
          rating: 3,
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
          <h1>Headphones</h1>
          <p>Immerse yourself in pure, powerful sound.</p>
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

export default Headphones