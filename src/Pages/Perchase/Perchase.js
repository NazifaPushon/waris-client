import { Button, Container, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Perchase = () => {
    const history = useHistory();
    const inputStyle = {
        width: '80%',
        margin: '1rem auto',
        display: 'block',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        backgroundColor:'white'
    }
    const { id } = useParams();
    const {user} = useAuth()
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, [id]);
    const onSubmit = (data) => {
        const order = {
            ...data,
            status:'pending',
            product:product
        }
        fetch('http://localhost:5000/orders' , {
            method:"POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    icon:"success",
                    title:"Product added successfully"
                })
                reset()
                history.push('/')
            }
        })
    }
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={6}>
                    <Box
                    sx={{
                        border: 1,
                        borderColor: pink[500],
                        p: "2rem",
                    }}
                >
                    <Typography variant="h4">Perchase </Typography>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            style={inputStyle}
                            placeholder="Email"
                            id="outlined-disabled"
                            defaultValue={user.email}
                            {...register("email" , { required: true })}
                        />
                        {errors.email && <span className="text-red-600">Email Is Required</span>}
                        <input
                            style={inputStyle}
                            placeholder="name"
                            defaultValue={user.displayName}
                            {...register("name" , { required: true })}
                        />
                        {errors.name && <span className="text-red-600">Email Is Required</span>}
                        <input
                            style={inputStyle}
                            placeholder="Phone"
                            type='number'
                            {...register("phone" , { required: true })}
                        />
                        {errors.phone && <span>Phone no is required</span>}
                        <textarea
                            style={inputStyle}
                            placeholder="Address"
                            {...register("address" , { required: true })}
                            row="3"
                        ></textarea>
                        {errors.address && <span>Address is required</span>}
                        <Button
                            color="inherit"
                            style={{
                                backgroundColor: pink[400],
                            }}
                            sx={{
                                width: 1,
                                color: "white",
                                m: 1,
                                p: 1,
                            }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
                <Box
                    sx={{
                        width: "25%",
                        mx: "auto",
                        my: 2,
                    }}
                ></Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Perchase;
