import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const Products = ({isLimited}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => { 
            if(isLimited) {
                const product = [...data]
                const newproducts = product.slice(0, 6)
                setProducts(newproducts)
            }
            else{
                setProducts(data)
            }
        })
    } , [isLimited])
    return (
        <Box>
            <Grid container spacing={3}>
                {
                    products.map(product => <SingleProducts product={product} key={product._id}/>)
                }
                
            </Grid>
        </Box>
    );
};

export default Products;