import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './offerBanner.css';
const OfferBanner = () => {
    return (
        <div className="offer">
            <Container>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                            We are On Sale 30%
                    </Typography>
                    <Typography variant='h2' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                    BE THE FIRST TO
                    GET LIMITED EDITIONS
                    </Typography>
                    <button className="button"><Link to="/explore">Shop Now</Link></button>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default OfferBanner;