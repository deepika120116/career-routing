import { Box, Typography, styled } from "@mui/material";
import { NavLink, Outlet } from 'react-router-dom';

const StyledContactNavLink=styled(NavLink)({
    textDecoration:"none",
    paddingTop:10,
    paddingLeft:40,
    paddingBottom:10,
    paddingRight:40,
    "&.active":{
        background:"navy",
    },
    background:"#1876D1",
    color:'#fff',
    fontSize:20,
    borderRadius:5
});
const ContactLayout=()=>{
    return(
        <>
        <Typography variant="h3">Contact</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptates sit suscipit? Quisquam qui laborum distinctio provident alias beatae facere, error, nobis quasi similique nostrum libero aspernatur itaque sequi suscipit?</Typography>

        <Box sx={{display:"flex", alignItems:"center",justifyContent:"center",my:5,gap:10}}>
            <StyledContactNavLink to="mail">Mail us</StyledContactNavLink>
            <StyledContactNavLink to="phone">Call us</StyledContactNavLink>
        </Box>
        <Outlet/>
    </>
    );
};
export default ContactLayout;