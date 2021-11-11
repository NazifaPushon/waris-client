import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SingleOrder = ({order , handleClick}) => {
    const {name , email , address , phone , product , _id , status} = order
    const {name : productName , img , price} = product
   console.log(order)
    return (
        <Grid item xs={12} sm ={6} md={4} style={{fontSize:'18px'}}>
            <img src={img} alt="" className="img-fluid"/>
            <Box className="p-3 border">
            <h3>Product : {productName}</h3>
            <p>Price : $ {price}</p>
            <p>Status : {status}</p>
            <hr/>
            <h3>Your info</h3>
            <p> name : {name}</p>
            <p>email  : {email}</p>
            <p>Phone  : {phone}</p>
            <p>address  : {address}</p>
            <button className="button3" onClick={() =>  handleClick(_id)}>Cancel Order</button>
            </Box>
        </Grid>
    );
};

export default SingleOrder;