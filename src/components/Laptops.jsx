import React from 'react'
import { useState } from 'react'
import './Laptops.css'


const Laptops = () => {

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
      price: 4000000,
      originalPrice: 4900000,
      image: "/src/assets/White crown best gaming laptop.jpg",
      rating: 5,
      category: "Laptops"
    },
    {
      id: 3,
      name: "Dell 7547 Inspiron",
      price: 1000000,
      originalPrice: 1700000,
      image: "/src/assets/DELL 7547 Inspiron 15 Inch High-End Laptop User Guide.jpg",
      rating: 3,
      category: "Laptops"
    },
    {
      id: 4,
      name: "HP Elitebook",
      price: 560000,
      originalPrice: 830000,
      image: "/src/assets/Dell Inspiron 14 – Intel Core i5 – 8GB RAM – 256GB SSD – Windows 11.jpg",
      rating: 3,
      category: "Laptop"
    },
    {
      id: 5,
      name: "Asus ROG Stix Scar 18",
      price: 3640000,
      originalPrice: 3950000,
      image: "/src/assets/download (19).jpg",
      rating: 5,
      category: "Laptop"
    },
    {
      id: 6,
      name: "RazorBlade Gaming Laptop",
      price: 2450000,
      originalPrice: 3000000,
      image: "/src/assets/download (20).jpg",
      rating: 5,
      category: "Laptop"
    },
    {
      id: 7,
      name: "HP Omen 16 Slim",
      price: 1340000,
      originalPrice: 1500000,
      image: "/src/assets/Incredible deal_ HP Omen 16 with Ryzen 7 6800H & RTX 3070 Ti discounted.jpg",
      rating: 4,
      category: "Laptop"
    },
    {
      id: 8,
      name: "Microsoft Surface Studio 2",
      price: 3640000,
      originalPrice: 3950000,
      image: "/src/assets/Microsoft Surface Laptop_ Overview.jpg",
      rating: 5,
      category: "Laptop"
    },
    {
      id: 9,
      name: "Lenovo Ultrafino Ideapad",
      price: 1550000,
      originalPrice: 1950000,
      image: "/src/assets/Lenovo Ultrafino Ideapad 81S90003BR vale a pena_.jpg",
      rating: 4,
      category: "Laptop"
    },
    {
      id: 10,
      name: "Asus ROG Zephyrus Gaming G16",
      price: 4740000,
      originalPrice: 4950000,
      image: "/src/assets/White crown best gaming laptop.jpg",
      rating: 5,
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
          <h1>Laptops</h1>
          <p>Take a look at our newest collection of laptops and make the best choice for yourself</p>
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

export default Laptops