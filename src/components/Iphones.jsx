import React from 'react'
import { useState } from 'react'
import './Iphones.css';

const Iphones = () => {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      price: 1440000,
      originalPrice: 1940000,
      image: "/src/assets/download (29).jpg",
      rating: 5,
      category: "Laptops"
    },
    {
      id: 2,
      name: "iPhone 17 pro Max",
      price: 4000000,
      originalPrice: 4900000,
      image: "/src/assets/Actualité _ iPhone 17 Pro & Pro Max _ 4 bonnes raisons d’attendre les futurs modèles premium d’Apple.jpg",
      rating: 5,
      category: "Laptops"
    },
    {
      id: 3,
      name: "iPhone 16 Teal Design",
      price: 1000000,
      originalPrice: 1700000,
      image: "/src/assets/Apple iPhone 16 Plus 256GB - Teal _ Jacamo.jpg",
      rating: 3,
      category: "Laptops"
    },
    {
      id: 4,
      name: "iPhone 16 Blue Design",
      price: 560000,
      originalPrice: 830000,
      image: "/src/assets/download (30).jpg",
      rating: 3,
      category: "Laptop"
    },
    {
      id: 5,
      name: "iPhone 15",
      price: 950000,
      originalPrice: 1400000,
      image: "/src/assets/Apple Iphone 15 Plus Black Back And Side View HD PNG.jpg",
      rating: 5,
      category: "Laptop"
    },
    {
      id: 6,
      name: "iPhone 11 Silver Design",
      price: 380000,
      originalPrice: 520000,
      image: "/src/assets/айфон 11.jpg",
      rating: 4,
      category: "Laptop"
    },
    {
      id: 7,
      name: "iPhones XR ",
      price: 260000,
      originalPrice: 350000,
      image: "/src/assets/MOCCA Strong Magnetic for iPhone XR Phone Case, [Compatible with Magsafe][Mil-Grade Drop Protection] Slim Thin Translucent Matte Protective Cover Case for iPhone XR Case 6_1'', Black.jpg",
      rating: 3,
      category: "Laptop"
    },
    {
      id: 8,
      name: "iPhone 7",
      price: 170000,
      originalPrice: 250000,
      image: "/src/assets/Apple's new iPhone cases make me wish I had an iPhone 7.jpg",
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
          <h1>iPhones</h1>
          <p>Experience the pinnacle of iPhone innovation and design.</p>
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

export default Iphones