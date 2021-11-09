import { Grid } from '@mui/material';
import React from 'react';

const SingleProducts = ({product}) => {
    const {price , name ,img , des} = product
    return (
        <Grid item xs={1} sm={3} md={4}>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>Price : $ {price}</p>
            <p>Description : {des}</p>
        </Grid>
    );
};

export default SingleProducts;