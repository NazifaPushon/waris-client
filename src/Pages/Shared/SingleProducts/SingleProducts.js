import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
const SingleProducts = ({product}) => {
    const history = useHistory();
    const {price , name ,img , des , _id} = product
    return (
        <Grid item xs={12} sm={6} md={4} className="text-center">
            <Box className="p-2 border">
            <img src={img} alt="" style={{width:"100%"}}/>
            <Box className="p-3">
            <h3 className="my-3" style={{color:grey[800]}}>{name}</h3>
            <p style={{color:grey[600]}} className="fs-4 fw-bold">$ {price}</p>
            <p style={{color:grey[800] , fontSize:'17px'}}> {des}</p>
            <button className="button2" onClick={() => history.push(`/perchase/${_id}`)}>Perchase</button>
            </Box>
            </Box>
        </Grid>
    );
};

export default SingleProducts;