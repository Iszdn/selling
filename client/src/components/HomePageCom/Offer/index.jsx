import React from 'react'
import "./index.scss"
import CardOffer from '../../CardOffer'
const Offer = () => {
  return (
   
      <setion id="offers">
<div className="header">
  <h3>OUR SERVICES</h3>
  <h2>We Offer Services</h2>
</div>
<div className="container">
  <div className="row">
    <CardOffer/>
    <CardOffer/>
    <CardOffer/>
    <CardOffer/>
    <CardOffer/>
    <CardOffer/>
  </div>
</div>

    </setion>
 
  )
}

export default Offer