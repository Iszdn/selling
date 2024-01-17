import React from 'react'
import "./index.scss"
import Card from '../../Card'
const OurProduct = () => {
  return (
    <section id='our-product'>
      <div className="header">
  <h3>POPULAR PRODUCTS</h3>
  <h2>Our Products</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
</div>
<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6 col-12">
<Card/>
    </div>
  </div>
</div>
    </section>
  )
}

export default OurProduct