import { Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Grid key={review._id} item xs={12} md={4}>
                        <Rating name="read-only" value={parseInt(review.rating)} readOnly />
                        <p>Review : {review.reviewDes}</p>
                        <p>From : {review.name}</p>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;