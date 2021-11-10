import { Button, Rating, TextField } from "@mui/material";
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
    <div>
      this is review page
      <form onSubmit={handleSubmit}>
        <Rating
          name="rating"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          placeholder="Give some review"
          name="reviewDes"
          onChange={handleChange}
        />
        <br />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default Review;
