import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
const CareerLayout=()=>{
    return(
        <>
            <Typography variant="body1" color="gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque iste explicabo maiores animi possimus ad non, odio corporis ipsam saepe a voluptatem dignissimos modi, molestias at, ab repellendus provident nulla!</Typography>
            <Container sx={{p:5}}>
                <Outlet/>
            </Container>
        </>
    );
};
export default CareerLayout;