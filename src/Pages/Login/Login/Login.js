import { Button, Container, TextField, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
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
        <Container>
            <Box
                sx={{
                    width: "50%",
                    mx: "auto",
                    border: 1,
                    borderColor: pink[500],
                    p: "2rem",
                }}
            >
                <Typography variant="h4">Login </Typography>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        type="email"
                        sx={{
                            width: 1,
                            m: 1,
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
                            m: 1,
                        }}
                        {...register("password" , { required: true })}
                    />
                    {errors.password && <span>User name is required</span>}
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
                            color: pink[500],
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
                        color: pink[500],
                        border: 1,
                        borderColor: pink[500],
                        borderRadius: 16,
                        p: 1,
                    }}
                    type="submit"
                    onClick={() => singInWithGoogle(history,location)}
                >
                    
                    Google Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default Login;