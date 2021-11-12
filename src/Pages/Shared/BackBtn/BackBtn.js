import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useHistory } from 'react-router';

// this is a simple button for redirecting to home page
const BackBtn = () => {
    const history = useHistory();
    return (
        <div className="my-5">
            <Button  startIcon={<ArrowBackIcon />} style={{background:grey[900] , color:"white" ,margin:'0 1rem' ,padding:'0.5rem 1rem'}} color="inherit" onClick={() => history.push('/')}>
                     Go Back 
            </Button>
        </div>
    );
};

export default BackBtn;