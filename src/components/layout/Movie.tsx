import { Box, CircularProgress } from '@mui/material';
import { Footer, Header } from 'components/common';
import MoviePageDashBoard from "components/dashboard/MoviePageDashBoard";
import { useState } from "react";


export function MovieLayout() {

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <Header/>
        <MoviePageDashBoard />
        <div className={`${loading ? "hidden" : "hidden"} `}>
          <CircularProgress disableShrink sx={{ color: 'black' }} />
        </div>
        <Footer />
      </Box>



    </div >
  );
};


