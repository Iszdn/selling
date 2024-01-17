import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./index.scss"
const Card = () => {
  return (
    <div className='card-pro'>
<div className="image">
  <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt="" />
</div>
<div className="content">
  <h3>Wild West Hoodie</h3>
  <div className="raiting">
    <span><FaStar className='sari' /> 5.0</span>
    <span><FaRegHeart /> <FaHeart /></span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
<div className="btnss">
  <div className="btn1">
    Cart
  </div>
  <div className="btn2">
    View
  </div>
</div>
</div>
    </div>
  )
}

export default Card