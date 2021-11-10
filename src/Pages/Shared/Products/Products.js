import { Container, Grid, Typography } from '@mui/material';
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
        <Container className="my-5">
            <Typography variant="h2" gutterBottom style={{fontFamily:'Jost, sans-serif' , fontWeight:"500"}} className="text-center ">Our Watches</Typography>
            <Grid container spacing={3}>
                {
                    products.map(product => <SingleProducts product={product} key={product._id}/>)
                }
                
            </Grid>
        </Container>
    );
};

export default Products;