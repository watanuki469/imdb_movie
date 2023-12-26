import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from "@mui/material";
import { Footer } from 'components/common';

export function NotFound() {
    let navigate = useNavigate();
    return (
        <Box sx={{ bgcolor: "black", position: "relative" }}>
            <Typography variant='h1' color={"white"}>Oops! Page not found</Typography>
            <Typography variant='h4' color={"white"}>The page you’re looking for doesn’t exist.  </Typography>
            <Button sx={{bgcolor:'red',color:'white'}} size='large'
            onClick={() => navigate("/")}
            >Go Home</Button>
            <Footer />
        </Box>
    );
}