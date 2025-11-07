import { useState } from 'react'
import MainLayout from './layout/MainLayout'
import ContactPage from './pages/ContactPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactPage />
    </>
  )
}

export default App
