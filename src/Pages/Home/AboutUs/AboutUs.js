import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
        <Container className="my-5 py-5">
            <Box>
                <Grid container spacing={4} className="align-items-center">
                    <Grid item xs={12} md={4}>
                    <Typography variant='h5' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                            About US 
                    </Typography>
                    <Typography variant='h3' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                        HOW YOUR FAVOURITE WARIS STARTED 
                    </Typography>
                    <Typography variant='p' component="div" gutterBottom  style={{fontFamily:'Jost, sans-serif'}} className="py-4">
                    The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. They come in different sizes and colors, and all feature a stainless steel back — leaving enough space for a personalized engraving. The engraving service is complimentary with any watch from the Lawson series.
                    </Typography>
                   <button className="button3">
                        <Link to='/explore'>Shop Now</Link>
                   </button>
                   </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/hMM5MdC/carpenter-posing-on-his-workplace-in-carpentry-workshop-e1635258960967-727x1024.jpg" alt="" className="img-fluid" />
                        <div className="text-center mt-3">
                            <h4>Json Walker</h4>
                            <h5>Owner</h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/mF6cLCR/modern-artisan-posing-in-workshop-e1635260600632.jpg" alt="" className="img-fluid" />
                        <div className="text-center mt-3">
                            <h4>Albert Roger</h4>
                            <h5>Watch Maker</h5>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;