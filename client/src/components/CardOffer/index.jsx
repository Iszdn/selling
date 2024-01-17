import React from 'react'
import "./index.scss"
import { FaCloud } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const CardOffer = () => {
  return (
    <div className='col-lg-4 col-md-6 col-12'>
        <div className="card-serv">
<div className="img">
<FaCloud />
</div>

            <div className="content">
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <Link>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default CardOffer