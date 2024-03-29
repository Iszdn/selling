import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import FormAdd from "../../components/Formik";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
const AddPage = () => {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("")
  const [property, setProperty] = useState(null)
  async function getData() {
    try {
      const res = await axios.get("http://localhost:3000/");
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
async function deleteProd(id) {
  const res=await axios.delete(`http://localhost:3000/${id}`)
  getData()
}
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <FormAdd getData={getData} />
      <div className="filter">
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={()=>setProperty({name:"title",asc:true})} className="btn">a-z</button>
        <button onClick={()=>setProperty({name:"title",asc:false})} className="btn">z-a</button>
        <button onClick={()=>setProperty({name:"price",asc:true})} className="btn">inc</button>
        <button onClick={()=>setProperty({name:"price",asc:false})} className="btn">dec</button>
        <button onClick={()=>setProperty({name:"title",asc:null})} className="btn">default</button>
      </div>
      <div  className="table">
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
              {IsLoading ? (
                <p>loading...</p>
              ) : (
                data &&
                data
                .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
                .sort((a,b)=>{
                  if (property && property.asc===true) {
                    return a[property.name]<b[property.name] ? -1 : ((b[property.name]<a[property.name]) ? 1 : 0)
                  }
                  else if (property && property.asc===false) {
                    return a[property.name]>b[property.name] ? -1 : ((b[property.name]>a[property.name]) ? 1 : 0)
                  }
                  else{
                    return 0;
                  }
                })
                .map((product) => (
                  <tr key={product._id}> 
                    <th>{product.image}</th>
                    <td>{product.title}</td>
                    <td>{product.desc}</td>
                    <td>{product.price}</td>
                    <td>
                      <MdDeleteOutline className="del"  onClick={()=>deleteProd(product._id)}/>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPage;
