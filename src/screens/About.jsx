
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const About=()=>{
    const [user,setUser]=useState('Test');
    const handleUser=()=>{
        console.log("clicked");
        setUser(null);
    };
    if(!user){
        return <Navigate to="/" replace={true}/>
    }
    return(
        <>
            <Typography variant="h3">About</Typography>
            <Typography variant="body1" color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias nostrum perferendis maxime omnis fugit dolorem. Eum facilis accusamus eius iure, ad ex provident accusantium doloribus vero ab, laboriosam et?
            </Typography>
            <Box>
                <Button variant='contained' onClick={handleUser}>Logout</Button>
            </Box>
        </>
    );
};
export default About;