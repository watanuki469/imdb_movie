import { Box, CircularProgress } from "@mui/material";
import { Footer, Header, SinglePage } from "components/common";
import { useState } from "react";

export function SingleMovie() {

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <Header />
        <SinglePage />

        <div className={`${loading ? "hidden" : "hidden"} `}>
          <CircularProgress disableShrink sx={{ color: 'black' }} />
        </div>
        <Footer />
      </Box>
    </div >
  );
};

