import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import Card from '../../Card'
const OurProduct = () => {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  async function getData() {
    try {
      const res = await axios.get("http://localhost:3000/");
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
   getData()
  }, [])
  
  return (
    <section id='our-product'>
      <div className="header">
  <h3>POPULAR PRODUCTS</h3>
  <h2>Our Products</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
</div>
<div className="container">
  <div className="row">
    
      {
        IsLoading ? <p>loading...</p> : data && data.map(x=><div key={x._id} className="col-lg-4 col-md-6 col-12"><Card {...x}/></div>)
      }

    
  </div>
</div>
    </section>
  )
}

export default OurProduct