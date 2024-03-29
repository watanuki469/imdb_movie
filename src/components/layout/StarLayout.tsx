import { Box, CircularProgress } from "@mui/material";
import { Footer, Header } from "components/common";
import { StarPage } from "components/common/StarPage";
import { useState } from "react";

export function StarLayout() {

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <Header />
        <StarPage />

        <div className={`${loading ? "hidden" : "hidden"} `}>
          <CircularProgress disableShrink sx={{ color: 'black' }} />
        </div>
        <Footer />
      </Box>
    </div >
  );
};

