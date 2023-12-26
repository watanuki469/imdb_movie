import { Box, CircularProgress } from '@mui/material';
import { Footer, Header2 } from 'components/common';
import MoviePageDashBoard from "components/dashboard/MoviePageDashBoard";
import { useState } from "react";


export function MovieLayout() {

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <Header2 />
        <MoviePageDashBoard />
        <div className={`${loading ? "block" : "hidden"} `}>
          <CircularProgress disableShrink />
        </div>
        <Footer />
      </Box>



    </div >
  );
};


