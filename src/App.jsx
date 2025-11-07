import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import { BrowserRouter } from 'react-router-dom'
import Items from './components/Items'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
    </>
  )
}

export default App
