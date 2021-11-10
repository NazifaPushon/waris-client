import { Button, Container, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const {registerUser , singInWithGoogle} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { register , handleSubmit,  formState: { errors } , reset} = useForm();
    const onSubmit = data => {
        const {displayName , email ,password , password2} = data
        if(password !== password2){
            alert(" password dosent match")
        }else{
            registerUser(email , password , displayName , location , history)
            reset()
        }
    };
  return (
    <Container className="my-5">
      <Box
        sx={{
          width: "50%",
          mx: "auto",
          border: 1,
          borderColor: grey[900],
          p: "2rem",
        }}
      >
        <Box>
          <Typography variant="h4">Create Account</Typography>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="name"
              label="User Name"
              variant="standard"
              type="text"
              sx={{ width: 1, m: 1 }}
              {...register("displayName" , { required: true })}
            />
            {errors.displayName && <span>User name is required</span>}
            <TextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
              sx={{ width: 1, m: 1 }}
              {...register("email" , { required: true })}
            />
            {errors.email && <span>Email is required</span>}
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              sx={{ width: 1, m: 1 }}
              {...register("password" , { required: true })}
            />
            {errors.password && <span>Password is required</span>}
            <TextField
              id="password2"
              label="Confirem Password"
              variant="standard"
              type="password"
              sx={{ width: 1, m: 1 }}
              {...register("password2" , { required: true })}
            />
            {errors.password2 && <span>Password is required</span>}
            <Button
              color="inherit"
              style={{ backgroundColor: grey[900] }}
              sx={{ width: 1, color: "white", m: 1, p: 1 }}
              type="submit"
            >
              Register
            </Button>
          </form>
          <Typography variant="p" sx={{ textAlign: "center" }} component="div">
            <NavLink to="/login" style={{ color: grey[900] }}>
              Already has an account ? login
            </NavLink>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "25%", mx: "auto", my: 2 }}>
        <Button
          color="inherit"
          style={{ backgroundColor: "white" }}
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
    </Container>
  );
};

export default Register;
