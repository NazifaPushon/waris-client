import { Button, Container, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const { register , handleSubmit,  formState: { errors } , reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin' , {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    icon:"success",
                    title:"Admin created"
                })
                reset()
            }
        })
    }
    return (
        <div>
            <Container>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="border w-50 mx-auto p-4 text-center">
                    <h1>Make An Admin</h1>
                <TextField
                sx={{my: 2, width:1}}
                label="Email"
                variant="standard"
                type="email"
                {...register("email" , { required: true })}
                />
                <br />
                {errors.email && <span>Email is required</span>}
                <Button type="submit" style={{background:grey[900] , color:"white" ,margin:'0 1rem' ,padding:'0.5rem 1rem'}} color="inherit">Submit</Button>
                </form>
            </Container>
        </div>
    );
};

export default MakeAdmin;