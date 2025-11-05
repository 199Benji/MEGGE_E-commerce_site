import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppRoutes from '../AppRoutes';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default MainLayout