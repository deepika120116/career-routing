import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Container } from "@mui/material";
import AppBreadCrumbs from "../components/AppBreadCrumbs";

const RootLayout=()=>{
    return(
       <>
        <NavBar/>
        <Container sx={{p:3}}>
            <AppBreadCrumbs/>
        </Container>
        <Container sx={{p:5}}>
            <Outlet/>
        </Container>
       </> 
    );
};

export default RootLayout;