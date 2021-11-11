import { Button, Container, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register , handleSubmit,  formState: { errors } , reset} = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/addProducts' , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)  
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    icon:"success",
                    title:"Product added successfully"
                })
                reset()
            }
            console.log(data)
        })
    }
    return (
        <Box sx={{width:{sm:1 ,md:'50%'} , mx:'auto'}}>
       <Container>
      <Box
        sx={{
          border: 1,
          borderColor: grey[900],
          p: "2rem",
        }}
      >
        <Box>
          <Typography variant="h4">Add a new product</Typography>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="name"
              label="Product Name"
              variant="standard"
              type="text"
              sx={{ width: 1, m: 1 }}
              {...register("name" , { required: true })}
            />
            {errors.name && <span> name is required</span>}
            <TextField
              id="email"
              label="Price "
              variant="standard"
              type="number"
              sx={{ width: 1, m: 1 }}
              {...register("price" , { required: true })}
            />
            {errors.price && <span>price is required</span>}
            <TextField
              id="password"
              label="Img URl"
              variant="standard"
              type="text"
              sx={{ width: 1, m: 1 }}
              {...register("img" , { required: true })}
            />
            {errors.img && <span>Img Url  is required</span>}
            <TextField
              id="password2"
              label="Des"
              variant="standard"
              type="Text"
              multiline
              minRows={4}
              sx={{ width: 1, m: 1 }}
              {...register("des" , { required: true })}
            />
            {errors.des && <span>Description is required</span>}
            <Button
              color="inherit"
              style={{ backgroundColor: grey[900] }}
              sx={{ width: 1, color: "white", m: 1, p: 1 }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
        </Box>
    );
};

export default AddProduct;