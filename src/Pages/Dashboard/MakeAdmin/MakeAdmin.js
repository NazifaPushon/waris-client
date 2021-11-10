import { Button, Container, TextField } from '@mui/material';
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
            This is Make admin
            <Container>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                sx={{m:1}}
                label="Email"
                variant="standard"
                type="email"
                {...register("email" , { required: true })}
                />
                <br />
                {errors.email && <span>Email is required</span>}
                <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Container>
        </div>
    );
};

export default MakeAdmin;