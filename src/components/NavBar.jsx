import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavLink=styled(NavLink)({
    textDecoration:"none",
    fontSize:20,
    color:"#fff",
    "&.active":{
        padding:15,
        borderRadius:3,
        background:"navy"
    }

});

const NavBar=()=>{
    return(
        <AppBar position="static">
                <Container>
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h5">
                    Routing
                </Typography>
                <Box sx={{display:"flex",alignItems:"center",gap:"50px"}}>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="about">About</StyledNavLink>
                    <StyledNavLink to="contact">Contact</StyledNavLink>
                    <StyledNavLink to="career">Careers</StyledNavLink>
                </Box>
                </Toolbar>
                </Container>
            </AppBar>
    );
};
export default NavBar;