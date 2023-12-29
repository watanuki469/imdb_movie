import { Box, } from "@mui/material";
import { Body, Footer, Header } from 'components/common';
import SliderDashBoard from "components/dashboard/SliderDashBoard";
import SliderPage from "components/pages/SliderPage";

export function AdminLayout() {
    // const classes = useStyles();

    return (
        <Box  sx={{ bgcolor: "black" }}>
            <Header />
            <SliderDashBoard/>
            <Body />
            <Footer/>
        </Box>
    );
}