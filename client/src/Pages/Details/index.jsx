import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import  { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
  
const Details = () => {
  const {addBasket}=useContext(BasketContext)
  const {addWish,wish}=useContext(WishlistContext)
const [data, setData] = useState(null)
const {id}=useParams()
async function getId() {
  const res=await axios(`http://localhost:3000/${id}`)
  setData(res.data)
}
useEffect(() => {
 getId()
}, [])

  return (
    <>
        <Helmet>
    <title>details</title>
</Helmet>
    
    <div className="details">
{
  data && 
  <div className='card-pro'>
  <div className="image">
    <img src={data.image} alt="" />
  </div>
  <div className="content">
    <h3>{data.title}</h3>
    <div className="raiting">
      <span><FaStar className='sari' /> 5.0</span>
      <span onClick={()=>addWish(data)}> {
        wish.some(x=>x._id===data._id) ? <FaHeart /> :  <FaRegHeart />
        }  </span>
    </div>
    <p>{data.desc}</p>
  <div className="btnss">
    <div className="btn1" onClick={()=>addBasket(data)}>
      Cart
    </div>
    
  </div>
  </div>
      </div>
}
    </div>
    </>
  )
}

export default Details