import { Rating, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const [review , setReview] = useState({})
    const {user} = useAuth()
  const handleChange = (e) => {
      const value = e.target.value ;
      const feild = e.target.name ;
      const newReview = { ...review}
      newReview[feild] = value
      setReview(newReview)
     console.log(newReview);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newReview = {
      ...review ,
      name : user.displayName,
      email:user.email,
    }
    fetch('http://localhost:5000/review' , {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => { 
      if(data.acknowledged){
        Swal.fire({
          icon:'success',
          title:'Review added'
        })
        e.target.reset();
      }
    })
  }
  return (
    <Box sx={{width:{sm:1 ,md:'50%'} , mx:'auto'}}>
      <h1 className="text-center">Review Our Product</h1>
      <form onSubmit={handleSubmit} className="min-vw-50  max-vw-100 mx-auto text-center p-5 border border-3 border-dark" >
        <Rating
          className="fs-1"
          name="rating"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={5}
          className="w-100 my-4"
          placeholder="Give some review"
          name="reviewDes"
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="button2">Submit</button>
      </form>
    </Box>
  );
};

export default Review;
