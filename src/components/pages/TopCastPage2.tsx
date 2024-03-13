import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Card, CardContent, Dialog, Grid, Stack, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { actor, movieItem } from 'models';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';


export interface TopCastPageProps {
  movieItemList: actor[],
  onEdit?: (movie: actor) => void;
}

export default function TopCastPage2({
  movieItemList,
  onEdit
}: TopCastPageProps) {
  let navigate = useNavigate();


  // const handleImageError = (e: any) => {
  //   const imgElement = e.currentTarget as HTMLImageElement;
  //   imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
  // };
  const handleImageError = (e: any) => {
    const imgElement = e.currentTarget as HTMLImageElement;
    if (!imgElement.src || imgElement.src === 'null') {
      imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
    }
  };
  const [visibleItems, setVisibleItems] = useState(10);

  const handleShowMore = () => {
    setVisibleItems(prevCount => prevCount + 10);
  };
  const handleShowAll = () => {
    setVisibleItems(movieItemList.length);
  };

  const renderPopularity = (uniqueTitles: any[] = []) => {
    return (
      <Grid container spacing={2} sx={{ mt: 4, overflow: 'hidden' }} justifyContent="flex-start">
        {movieItemList?.slice(0, visibleItems).map((item: actor) => {
          if (item && item.name && !uniqueTitles.includes(item.name)) {
            uniqueTitles.push(item.name);
            return (
              <Grid item xs={6} md={3} lg={2.4} key={item.name}>
                <Stack alignItems="center">
                  <img
                    onError={handleImageError}
                    src={item.image_url}
                    style={{
                      maxWidth: '200px', width: '100%',
                      height: "280px", objectFit: 'initial',
                      backgroundColor: 'gray',
                    }}
                    onClick={() => onEdit?.(item)}
                  />
                  <Box sx={{
                    mt: '-40px',
                    width: "100%",
                    height: "max-content",
                    bottom: 0,
                    padding: "10px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    textAlign: 'textAlign' || "justify",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 'lines'
                  }}>
                    <Typography sx={{ color: 'red' }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Stack>

              </Grid>

            );
          }
          return null;
        })}
      </Grid>

    );
  };


  return (
    <div style={{ width: '100%' }}>
      <Grid item xs={12} >
        <Stack direction='column' spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {renderPopularity()}
          <Stack direction={'row'} spacing={4}>
            {
              visibleItems < movieItemList.length && (
                <Button variant="contained" onClick={handleShowMore} sx={{ mt: 2 }}>
                  Show More( {movieItemList.length - visibleItems} )
                </Button>
              )
            }
            {
              visibleItems < movieItemList.length && (
                <Button variant="contained" onClick={handleShowAll} sx={{ mt: 2 }}>
                  Show All
                </Button>
              )
            }

          </Stack>

        </Stack>
      </Grid>


    </div>
  );
}