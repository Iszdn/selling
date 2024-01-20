import React from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from "axios"
import * as Yup from 'yup';
const FormAdd = ({ getData}) => {

  async function addData(values) {
    const res=await axios.post("http://localhost:3000/",values)
    getData()
  }

  return (
    <div className='container formadd'>
<Formik
      initialValues={{ image: '', title: '', desc: '',price:'' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .required('Required'),
        title: Yup.string()
          .max(80, 'Must be 20 characters or less')
          .required('Required'),
        desc: Yup.string().required('Required'),
        price: Yup.number().positive('number must be  positive ').required('Required')
      })}
      onSubmit={(values, { resetForm }) => {
addData(values)
        resetForm()
      }}
    >
      <Form>

        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <ErrorMessage  name="image" />

        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="desc">Description</label>
        <Field name="desc" type="desc" />
        <ErrorMessage name="desc" />

        <label htmlFor="price">Price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />
        <button className='btn' type="submit">Add</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd


