import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./index.scss"
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
const Card = (product) => {
  const {addBasket}=useContext(BasketContext)
  const {addWish,wish}=useContext(WishlistContext)
  return (
    <div className='card-pro'>
<div className="image">
  <img src={product.image} alt="" />
</div>
<div className="content">
  <h3>{product.title}</h3>
  <div className="raiting">
    <span><FaStar className='sari' /> 5.0</span>
    <span onClick={()=>addWish(product)}> {
      wish.some(x=>x._id===product._id) ? <FaHeart className='red-heart'/> :  < FaRegHeart className='red-heart'/>
      }  </span>
  </div>
  <p>{product.desc}</p>
<div className="btnss">
  <div className="btn1" onClick={()=>addBasket(product)}>
    Cart
  </div>
  <div className="btn2">
  <Link to={product._id}>view</Link>  
  </div>
</div>
</div>
    </div>
  )
}

export default Card