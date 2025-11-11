import React from 'react'
import './ProductPage.css';
import Laptops from '../components/Laptops'
import Tablets from '../components/Tablets'
import Iphones from '../components/Iphones'
import Androids from '../components/Androids';
import Headphones from '../components/Headphones';


const ProductPage = () => {
  return (
    <>
    <div class="page-intro">
      <h1 class="intro-heading">Where Innovation Meets <span class="highlight">You</span></h1>
      <p class="intro-subtitle">Discover the perfect blend of cutting-edge technology and thoughtful design</p>
    </div>
    
      <Laptops />
      <Tablets />
      <Iphones />
      <Androids />
      <Headphones />
    </>
  )
}

export default ProductPage