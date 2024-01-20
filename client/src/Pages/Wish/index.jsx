import React from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import  { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
const Wish = () => {
  const {addBasket}=useContext(BasketContext)
  const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
        <Helmet>
    <title>wish</title>
</Helmet>

<div className="basket">
  <h2>Wishist</h2>
  {
    wish.length===0 ? <div><h1>
      Wishlist is empty</h1></div> : <div className="container">
    <div className="row">

  
  {
    wish && wish.map(product=>
      <div className='card-pro col-lg-4'>
<div className="image">
  <img src={product.image} alt="" />
</div>
<div className="content">
  <h3>{product.title}</h3>
  <div className="raiting">
    <span><FaStar className='sari' /> 5.0</span>
   
  </div>
  <p>{product.desc}</p>
<div className="btnss">
<div className="btn" onClick={()=>deleteWish(product)}>delete</div>
<div className="btn" onClick={()=>addBasket(product)}>cart</div>
  <div className="btn2">
    View
  </div>
  <div>
  <p>{product.price}$</p>

  </div>

</div>
</div>
    </div>
      )
  }
  
  </div>
  </div>
  }
  
</div>
    </>
  )
}

export default Wish