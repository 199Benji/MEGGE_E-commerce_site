import React from 'react'
import './ProductPage.css';
import Laptops from '../components/Laptops'
import Tablets from '../components/Tablets'
import Iphones from '../components/Iphones'


const ProductPage = () => {
  return (
    <>
      <Laptops />
      <Tablets />
      <Iphones />
    </>
  )
}

export default ProductPage