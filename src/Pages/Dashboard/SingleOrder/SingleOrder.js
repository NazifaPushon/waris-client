import { Button, Grid } from '@mui/material';
import React from 'react';

const SingleOrder = ({order , handleClick}) => {
    const {name , email , address , phone , product , _id} = order
    const {name : productName , img , price} = product
   
    return (
        <Grid item xs={12} sm ={6} md={4}>
            <img src={img} alt=""/>
            <h3>Product : {productName}</h3>
            <p>Price : $ {price}</p>
            <hr/>
            <h3>Your info</h3>
            <p> name : {name}</p>
            <p>email  : {email}</p>
            <p>Phone  : {phone}</p>
            <p>address  : {address}</p>
            <Button variant="contained" onClick={() =>  handleClick(_id)}>Calcel Order</Button>
        </Grid>
    );
};

export default SingleOrder;