import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const PageNotFound=()=>{
    return(
        <>
            <Typography variant="h4">Page Not found</Typography>
            <Typography variant="body1" color="gray">Go to <Link to="/">Main Page</Link></Typography>
        </>
    );
};
export default PageNotFound;