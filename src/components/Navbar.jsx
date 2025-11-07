import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
        <NavLink to="/" title="Personal"><img src="./assets/Megge_logo.svg" alt="Logo" /></NavLink>
        <NavLink to="/" title="Personal">Home</NavLink>
         <NavLink to="/ContactPage" title="Contact">Contact me</NavLink>
         <NavLink to="/AboutPage" title="About">About</NavLink>
         <NavLink to="/ProductPage" title="Product">Product</NavLink>
        </nav>

        {/* GODSWILL THIS IS YOUR ROLE ADD STYLING TO THIS NAVIGATION 
        YOU CAN USE INDEX.CSS FOR THE STYLING 
        FOR THE LOGO I WILL MAKE SURE I GET THAT DONE THIS EVENING AND PUSH IT  */}
    </header>
  )
}

export default Navbar