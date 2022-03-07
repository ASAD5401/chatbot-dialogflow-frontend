import React, { useState } from 'react'
// import {useHistory} from "react-router-dom";
// import React from 'react';
// import { useFormik } from 'formik';
// import formik  from 'formik';
import * as yup from 'yup';
// import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
// import { baseurl } from '../../core';

// import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [userName,setUserName]=useState()
    const [password,setPassword]=useState()

    const submit = (values) => {
        console.log("values", values)


        axios.post(`http://localhost:7001/api/v1/login`,
            {
                email: values.email,
                password: values.password
            }, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);


            })
            .catch(error => {
                alert('Incorrect email or password')
            })



    }
    return (
        <div>
            <h1></h1>

                  <div className="container">

<div className="row m-5 no-gutters shadow-lg">
  <div className="col-md-6 d-none  bg-light d-md-block">
    <div style={{ fontFamily: "Impact, Haettenschweiler" }}>    
      <h1 className="m-5"><center>Branch Manager</center></h1>
    </div><br /><br />
    <div className="mx-2" style={{ color: "grey", textAlign: "center" }}>
    </div>
    <div className="pic1" ><center>
      <img style={{ height: "300px" }} src=" https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png " /></center>
    </div>
  </div>
  <div className="col-md-6  p-5" style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}>
    <h2 className="pb-4" style={{ fontFamily: "cursive", marginBottom: "10px" }}><center><b> WELCOME BRANCH MANAGER LOGIN </b></center></h2><br />
    <div className="form-style">
      <form onSubmit={()=>submit()}
    //   {formik.handleSubmit}
      >
        <div className="form-group pb-3">
          <TextField
            id="outlined-basic"
            name="email"
            label="email"
            className="inputbox"
            // value={formik.values.email}
            // onChange={formik.handleChange}

            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            variant="outlined" />

        </div>
        <div className="form-group pb-3">
          <TextField
            id="outlined-basic"
            name="password"
            label="password"
            type="password"
            className="inputbox"
            // value={formik.values.password}
            // onChange={formik.handleChange}

            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
            variant="outlined" />

        </div>
        <div className="d-flex align-items-center justify-content-between">
        </div><br />
        <div className="pb-2">
          <button type="submit" id="userbtn" className=" btn-dark w-100 font-weight-bold mt-2">LOGIN</button>
        </div>
      </form>

    </div>

  </div>
</div>
</div>
        </div>
    )
}
export default LoginForm;


