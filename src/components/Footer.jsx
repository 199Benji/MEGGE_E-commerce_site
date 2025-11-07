import BackToTop from "./BackToTop"
import m from "./Footer.module.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <BackToTop />
    <footer className={m.footer}>
      <div className={m.container}>
        <div className={m.sub}>
          <div className={m.brand}><img src="src/assets/Megge_logo.svg" alt="Megge logo" /><h3>MEGGE</h3></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Vero obcaecati nam eligendi est id quos reprehenderit hic? Quidem quis repellendus adipisci, <br />eligendi facilis, provident esse velit atque, alias blanditiis impedit.</p>
          
          <div className={m.social}>
            <div className={m.div}><a href=""><i className="fa-brands fa-square-facebook"></i></a></div>
            <div className={m.div}><a href=""><i className="fa-brands fa-square-whatsapp"></i></a></div>
            <div className={m.div}><a href=""><i className="fa-brands fa-square-x-twitter"></i></a></div>
            <div className={m.div}><a href=""><i className="fa-brands fa-linkedin"></i></a></div>
            <div className={m.div}><a href=""><i className="fa-brands fa-tiktok"></i></a></div>
          </div>
        </div>

        <div className={m.sub}>
          <h3>Product</h3>
          <ul>
            <NavLink to="/">product one</NavLink>
            <NavLink to="/">product two</NavLink>
            <NavLink to="/">product three</NavLink>
            <NavLink to="/">product four</NavLink>
          </ul>
        </div>

         <div className={m.sub}>
          <h3>Useful Links</h3>
          <ul>
            <NavLink to="/">product yes</NavLink>
            <NavLink to="/">product one</NavLink>
            <NavLink to="/">product me</NavLink>
            <NavLink to="/">product one</NavLink>
          </ul>
        </div>

         <div className={m.sub}>
          <h3>Address</h3>
          <ul>
            <NavLink to="/">product one</NavLink>
            <NavLink to="/">product one</NavLink>
            <NavLink to="/">product one</NavLink>
            <NavLink to="/">product one</NavLink>
          </ul>
        </div>
      </div>
      <hr />

       <div className={m.last}>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer> 
    </>   
  )
}

export default Footer