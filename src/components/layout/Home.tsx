import { Box, } from "@mui/material";
import { Body, Footer, Header } from 'components/common';
import SliderDashBoard from "components/dashboard/SliderDashBoard";
import Top10DashBoard from "components/dashboard/Top10DashBoard";
import SliderPage from "components/pages/SliderPage";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "./Admin";
import PopurarityDashBoard from "components/dashboard/PopurarityDashBoard";
import { MovieLayout } from "./Movie";
import { SingleMovie } from "./SingleMovie";
import { NotFound } from "./NotFound";
import PopularDashBoard from "components/dashboard/PopularDashBoard";
import { Pro } from "./Pro";
import { StarLayout } from "./StarLayout";

export function Home() {
    // const classes = useStyles();

    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLayout />} />
                <Route path="/popurarity" element={<PopurarityDashBoard />} />
                <Route path="/movie/byGen/:genre" element={<MovieLayout />} />
                <Route path="/movie/id/:imdb_id" element={<SingleMovie />} />
                <Route path='*' element={<NotFound />} />
                <Route path='IMDbPro' element={<Pro />} />
                <Route path='Popular' element={<PopularDashBoard />} />
                <Route path='/actor/id/:imdb_id' element={<StarLayout />} />
            </Routes>
        </div>
    );
}