import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from 'hamburger-react'
import "./index.scss"
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav id='navbar'> <div className="container">
<div className="navi">
 
    <div className="logo">
      <h3>Selling <span>.</span></h3>
    </div>
    <div className="navigations">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/prod" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/aboout" activeClassName="active">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/wish" activeClassName="active"><span><FaRegHeart /></span></NavLink>
        </li>
        <li>
          <NavLink to="/basket" activeClassName="active"><span><AiOutlineShoppingCart /></span></NavLink>
        </li>
      </ul>
    </div>
    <div className="bar">
    <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  
    
  </div>  
  {
isOpen &&
      <div className="nav-media">

    <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/prod" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/aboout" activeClassName="active">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/wish" activeClassName="active"><span><FaRegHeart /></span></NavLink>
        </li>
        <li>
          <NavLink to="/basket" activeClassName="active"><span><AiOutlineShoppingCart /></span></NavLink>
        </li>
      </ul>
    </div>
    }
</div>
    </nav>
  )
}

export default Navbar