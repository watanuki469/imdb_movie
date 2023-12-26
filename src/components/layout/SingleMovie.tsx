import { Box, CircularProgress } from "@mui/material";
import { Footer, SinglePage } from "components/common";
import { useState } from "react";

export function SingleMovie() {

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <SinglePage />

        <div className={`${loading ? "block" : "hidden"} `}>
          <CircularProgress disableShrink />
        </div>
        <Footer />
      </Box>
    </div >
  );
};

