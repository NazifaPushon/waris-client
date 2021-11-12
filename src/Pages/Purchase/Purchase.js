import { Button, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import BackBtn from "../Shared/BackBtn/BackBtn";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

//this is a Purchase page 
//use to Purchase a watch
const Purchase = () => {
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
    const {name , price ,des ,img} = product
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    //load data from server
    useEffect(() => {
        fetch(`https://gentle-forest-49473.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, [id]);

    // save data in server
    const onSubmit = (data) => {
        const order = {
            ...data,
            status:'pending',
            product:product
        }
        fetch('https://gentle-forest-49473.herokuapp.com/orders' , {
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
            <Header/>
            <Container className="my-5">
                <Grid container spacing={4} className="align-items-center">
                    <Grid item xs={12} md={6}>
                        <Box className="p-3 border" style={{fontSize:'18px'}}>
                            <img alt="" src={img} className="w-100"/>
                            <h3 className="my-3">Product : {name}</h3>
                            <p className="fs-5">Price : $ {price}</p>
                            <p>description : {des}</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box
                    sx={{
                        border: 1,
                        borderColor: grey[900],
                        p: "2rem",
                    }}
                >
                    <h1 className="text-center">Purchase </h1>
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
                                backgroundColor: grey[900],
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
                <BackBtn/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Purchase;
