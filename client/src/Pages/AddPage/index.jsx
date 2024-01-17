import React, { useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import FormAdd from '../../components/Formik'
import { MdDeleteOutline } from "react-icons/md";
const AddPage = () => {
const [data, setData] = useState([])
async function getData() {
   const res=await axios("http://localhost:3000/")
   setData(res.data)
}
  return (
    <>
<Helmet>
    <title>Add</title>
</Helmet>
<FormAdd getData={getData}/>
<div className='table'>
<div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>description</th>
        <th>price</th>
        <th>delete</th>

      </tr>
    </thead>
    <tbody>
     {
data && data.map(product=>

<tr>
        <th>{product.image}</th>
        <td>{product.title}</td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td ><MdDeleteOutline className='del'/></td>
      </tr>
    
    )

     }
     
    </tbody>
  </table>
</div>
</div>
    </>
  )
}

export default AddPage