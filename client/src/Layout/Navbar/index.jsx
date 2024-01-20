import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import "./index.scss"
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
const Navbar = () => {
const [open, setOpen] = useState(false)
  const {basket}=useContext(BasketContext)
  const {wish}=useContext(WishlistContext)
  console.log(open);
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
          <NavLink to="/wish" activeClassName="active"><span><FaRegHeart /></span><span className='wish'>{wish.length}</span></NavLink>
        </li>
        <li>
          <NavLink to="/basket" activeClassName="active"><span><AiOutlineShoppingCart /></span><span className='wish'>{basket.length}</span></NavLink>
        </li>
      </ul>
    </div>
    <div className="bar" onClick={()=>setOpen(!open)}>
      bar
    </div>
  
    
  </div>  

      <div className={`${open ? "activex" : ""} nav-media `}>
<button className='btn' onClick={()=>setOpen(!open)}><MdClose /></button>
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
    
</div>
    </nav>
  )
}

export default Navbar