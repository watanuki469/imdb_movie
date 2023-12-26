import { Box, } from "@mui/material";
import { Body, Footer, Header } from 'components/common';

export function AdminLayout() {
    // const classes = useStyles();

    return (
        <Box  sx={{ bgcolor: "black" }}>
            <Header />
            <Body />
            <Footer/>
        </Box>
    );
}