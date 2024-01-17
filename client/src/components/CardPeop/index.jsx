import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const CardPeople = () => {
  return (
    <div className='cardleader col-lg-4 col-md-6 col-12'>
<div className="image">
  <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />

</div>
<h3>John Rooster</h3>
<h4>CO-FOUNDER, PRESIDENT</h4>
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
<div className="sosial">
  <span><FaFacebookF /></span>
  <span><FaTwitter /></span>
  <span><FaInstagram /></span>
  <span><FaLinkedinIn /></span>

    
    
    
</div>
    </div>
  )
}

export default CardPeople
