import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path='/ContactPage' element={<ContactPage />} />
    </Route>
  ))


  return (
    <RouterProvider  router={router}/>
  )
}

export default App