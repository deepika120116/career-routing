import { Box, Divider, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const CareerDetails=()=>{
    // const {id}=useParams();
    // console.log(id);
    const fetchedData=useLoaderData();
    return(
        <>
            <Divider sx={{mx:20,my:5}}/>
            <Box>
                <Typography variant="h4">{fetchedData.title}</Typography>
                <Typography variant="h6" color="blue">{fetchedData.salary}</Typography>
                <Typography variant="body1" color="gray">{fetchedData.location}</Typography>
            </Box>
        </>
    );
};
export default CareerDetails;

export const jobDetails=async({params})=>{
    const {id}=params;
 
        const response=await fetch(`http://localhost:8000/careers/${id}`);
        if(!response.ok)
            throw new Error("Id not found");
        const jsonResponse=await response.json();
        return jsonResponse;
};