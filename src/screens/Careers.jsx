import { Typography, styled } from '@mui/material';
import { Link, useLoaderData } from 'react-router-dom';
import CareerList from '../components/CareerList';
const StyledLink=styled(Link)({
    textDecoration:"none"
})
const Careers=()=>{
    const careerInfo=useLoaderData()
    return(
        <>
        <Typography variant='h3'>Careers</Typography>
        {careerInfo && careerInfo.map(career=>{
            return (
                <StyledLink to={career.id.toString()} key={career.id}>
                <CareerList title={career.title} location={career.location}/>
                </StyledLink>
            )
        })}
        </>
    );
};
export default Careers;
export const careerLoader=async()=>{
const response=await fetch("http://localhost:8000/careers");
if(!response.ok)
    throw new Error("Job not found");
const jsonResponse=await response.json();
return jsonResponse;
};
