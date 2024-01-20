import React from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import  { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BasketContext } from '../../context/BasketContext';
const Basket = () => {
  const {basket,deleteBasket,decBasket,incBasket,}=useContext(BasketContext)
  const subtotal=basket.reduce((basketTotal,basketItem)=>basketTotal+(basketItem.price*basketItem.count),0)
  return (
    <>
        <Helmet>
    <title>Basket</title>
</Helmet>

<div className="basket">
  {
    basket.length===0 ? <div><h1>
      Cart is empty</h1></div> : <div className="container">
    <div className="row">

  
  {
    basket && basket.map(product=>
      <div className='card-pro col-lg-4'>
<div className="image">
  <img src={product.image} alt="" />
</div>
<div className="content">
  <h3>{product.title}</h3>
  <div className="raiting">
    <span><FaStar className='sari' /> 5.0</span>
    <span><FaRegHeart /> <FaHeart /></span>
  </div>
  <p>{product.desc}</p>
<div className="btnss">
<div className="btn" onClick={()=>deleteBasket(product)}>delete</div>
  <div className="btn2">
    View
  </div>
  <div>
  <p>{product.price}$</p>
<div className="btn" onClick={()=>incBasket(product)}>+</div>
<p>{product.count}</p>
<div className="btn" onClick={()=>decBasket(product)}>-</div>
  </div>

</div>
</div>
    </div>
      )
  }
  <div className="subtotal">
<p>Subtotal:{subtotal}$</p>
  </div>
  </div>
  </div>
  }
  
</div>
    </>
  )
}

export default Basket