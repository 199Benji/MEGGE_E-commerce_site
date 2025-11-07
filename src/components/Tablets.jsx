import React from 'react'
import { useState } from 'react'
import './Tablets.css';

const Tablets = () => {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Apple ipad mini",
      price: 740000,
      originalPrice: 1640000,
      image: "/src/assets/download (21).jpg",
      rating: 4,
      category: "Tablets"
    },
    {
      id: 2,
      name: "Asus ROG Flow Z13",
      price: 1000000,
      originalPrice: 1900000,
      image: "/src/assets/CES 2022_ Asus' ROG Flow Z13 is a bonkers Windows tablet that you can hook to an RTX 3080.jpg",
      rating: 5,
      category: "Tablets"
    },
    {
      id: 3,
      name: "Microsoft Surface Book",
      price: 1000000,
      originalPrice: 1700000,
      image: "/src/assets/Microsoft Surface Book.jpg",
      rating: 5,
      category: "Tablets"
    },
    {
      id: 4,
      name: "Samsung Galaxy Tab A9",
      price: 830000,
      originalPrice: 1500000,
      image: "/src/assets/EasyAcc Custodia Cover Compatibile con Samsung Galaxy Tab A9+ _ A9 Plus 11 Pollici 2023 SM-X210_ X215_ X216 Tablet, Nero.jpg",
      rating: 4,
      category: "Tablets"
    },
    {
      id: 5,
      name: "Lenovo Tab p12 Pro",
      price: 640000,
      originalPrice: 950000,
      image: "/src/assets/Lenovo Tab P12 Pro AMOLED Launched in India ( Snapdragon 870 _ 8GB ram _ 256GB storage ).jpg",
      rating: 3,
      category: "Tablets"
    },
    {
      id: 6,
      name: "Nubia RedMagic Gaming Tablet",
      price: 1550000,
      originalPrice: 1800000,
      image: "/src/assets/Nubia RedMagic Gaming Tablet vorgestellt.jpg",
      rating: 5,
      category: "Tablets"
    },
    {
      id: 7,
      name: "Red Magic Pad Gaming Tablet",
      price: 1340000,
      originalPrice: 1500000,
      image: "/src/assets/Red Magic Pad Gaming Tablet Unveiling Tomorrow in China.jpg",
      rating: 5,
      category: "Tablets"
    },
    {
      id: 8,
      name: "Xiaomi Pad 6",
      price: 640000,
      originalPrice: 950000,
      image: "/src/assets/Xiaomi Pad 6.jpg",
      rating: 4,
      category: "Tablets"
    },
    {
      id: 9,
      name: "Xiaomi Tablet Redmi Pad 2 4G",
      price: 350000,
      originalPrice: 650000,
      image: "/src/assets/Xiaomi Tablet Redmi Pad 2 4G, 11_, Android.jpg",
      rating: 4,
      category: "Tablets"
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
          <h1>Tablets</h1>
          <p>Non-stop Entertainments for yourself while using our premium tablets</p>
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

export default Tablets