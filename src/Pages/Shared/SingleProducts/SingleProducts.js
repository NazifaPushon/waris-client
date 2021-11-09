import { Button, Grid } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
const SingleProducts = ({product}) => {
    const history = useHistory();
    const {price , name ,img , des , _id} = product
    return (
        <Grid item xs={1} sm={3} md={4}>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>Price : $ {price}</p>
            <p>Description : {des}</p>
            <Button variant="contained" onClick={() => history.push(`/perchase/${_id}`)}>Perchase</Button>
        </Grid>
    );
};

export default SingleProducts;