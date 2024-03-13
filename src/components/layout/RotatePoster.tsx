import React, { useState } from "react";
import { Box } from "@mui/material";

export const RotatePoster = ({
  title,
  poster,
  children,
}: {
  title: string;
  poster: string | null;
  children: React.ReactNode;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  let timeOutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timeOutId = setTimeout(() => {
      setIsFocus(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeOutId);
    setIsFocus(false);
  };

  const style = {
    position: "relative",
    transition: "all 0.5s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
  };

  const focusStyle = {
    ...style,
    transform: "rotateY(180deg)",
  };

  return (
    <Box
      width={{ xs: "250px", md: "500px" }}
      height={{ xs: "350px", md: "700px" }}
      mt={{ xs: 5, md: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box width="100%" height="100%" sx={isFocus ? focusStyle : style}>
        <img
          width="100%"
          height="100%"
          src={`${poster}`}
          style={{
            position: "absolute",
            borderRadius: "8px",
            backfaceVisibility: "hidden",
          }}
          alt={title}
        />
        <Box
          width="100%"
          height="100%"
          p={4}
          color="#e7e7e7"
          sx={{
            position: "absolute",
            borderRadius: "8px",
            transform: "rotateY(180deg) scaleX(-1)",
            backfaceVisibility: "hidden",
            background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${poster})`,
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              transform: "scaleX(-1)",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};