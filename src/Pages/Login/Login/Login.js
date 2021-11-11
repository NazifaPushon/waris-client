import { Button, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const {login , singInWithGoogle} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { register , handleSubmit,  formState: { errors } , reset} = useForm();

    const onSubmit  = (data) => {
        const { email , password} = data
        login(email , password , location , history)
        reset()
    }
    return (
        <Box className="text-center my-5 px-2" sx={{width:{sm:1 ,md:'50%'} , mx:'auto'}}>
            <div className="">
            <Box className="text-center p-5 border border-2 border-dark">
                <Typography variant="h4">Login </Typography>
                <form action="" onSubmit={handleSubmit(onSubmit)}  >
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        type="email"
                        sx={{
                            width: 1,
                            m: 'auto',
                        }}
                        {...register("email" , { required: true })}
                    />
                    {errors.email && <span>User name is required</span>}
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        type="password"
                        sx={{
                            width: 1,
                            m: 'auto',
                        }}
                        {...register("password" , { required: true })}
                    />
                    {errors.password && <span>User name is required</span>}
                    <Button
                        color="inherit"
                        style={{
                            backgroundColor: grey[900],
                        }}
                        sx={{
                            width: 1,
                            color: "white",
                            my: 2,
                            p: 1,
                        }}
                        type="submit"
                        
                    >    
                        Login
                    </Button>
                </form>
                <Typography
                    variant="p"
                    sx={{
                        textAlign: "center",
                    }}
                    component="div"
                >
                    <NavLink
                        to="/register"
                        style={{
                            color: grey[900],
                        }}
                    >
                        New In here ? Register
                    </NavLink>
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "25%",
                    mx: "auto",
                    my: 2,
                }}
            >
                <Button
                    color="inherit"
                    style={{
                        backgroundColor: "white",
                    }}
                    sx={{
                        width: 1,
                        color: grey[900],
                        border: 1,
                        borderColor: grey[900],
                        borderRadius: 16,
                        p: 1,
                    }}
                    onClick={() => singInWithGoogle(location , history)}
                >
                    
                    Google Sign In
                </Button>
            </Box>
            </div>
        </Box>
    );
};

export default Login;
