import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Backdrop, Box, Button, Card, CardContent, Dialog, Grid, Stack, Typography } from "@mui/material";
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
    imgElement.src = 'https://m.media-amazon.com/images/S/sash/N1QWYSqAfSJV62Y.png'; // Set the fallback image source here

  };
  const [visibleItems, setVisibleItems] = useState(10);

  const handleShowMore = () => {
    setVisibleItems(prevCount => prevCount + 10);
  };
  const handleShowAll = () => {
    setVisibleItems(movieItemList.length);
  };
  const handleShowLess = () => {
    setVisibleItems(10);
  };
  let style: any = {
    minWidth: {
      xs: "100px",
      md: "200px",
    },
    cursor: "pointer",
    transition: "all ease 0.5s",
    maxWidth: '200px', width: '100%', borderRadius: "100%",
    height: "200px",
    backgroundColor: 'gray',
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
    "&:hover": {
      transform: "scale(1.05) translateY(-15px)",
      zIndex: "997",
    },
  };

  // if (imgType === "Poster") {
  //   style = {
  //     ...style,
  //     "&:hover": {
  //       ...style["&:hover"],
  //       transform: "scale(1.1) translateY(-20px)",
  //     },
  //   };
  // }

  const renderPopularity = (uniqueTitles: any[] = []) => {
    return (
      <Grid container spacing={2} sx={{ mt: 6, overflow: 'hidden' }} justifyContent="flex-start">
        {movieItemList?.slice(0, visibleItems).map((item: actor) => {
          if (item && item.name && !uniqueTitles.includes(item.name)) {
            uniqueTitles.push(item.name);
            const imageUrl = item.image_url || "https://m.media-amazon.com/images/S/sash/N1QWYSqAfSJV62Y.png";
            return (
              <Grid item xs={6} md={3} lg={2.4} key={item.name}>
                <Stack direction={'column'} alignItems="center" position="relative"> {/* Set position to relative */}
                  {/* <img
                    onError={handleImageError}
                    src={item.image_url}
                    style={{
                      maxWidth: '200px', width: '100%',
                      height: "280px", objectFit: 'initial',
                      backgroundColor: 'gray',
                      position: "relative",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all ease 0.5s",
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
                    }}
                    onClick={() => onEdit?.(item)}

                  /> */}

                  <Box
                    sx={style}
                    onClick={() => navigate(`/actor/id/${item.imdb_id}`)}
                  >
                    <img
                      width="100%"
                      onError={handleImageError}
                      src={imageUrl}
                      style={{
                        borderRadius: "100%",
                        objectFit: "cover",
                        height: "auto", // Thiết lập chiều cao tự động
                        maxHeight: "200px", // Chiều cao tối đa
                        objectPosition: "center", // Đặt vị trí ảnh ở giữa
                        marginTop: "auto", // Dịch chuyển ảnh lên để che đi phần trắng phía trên
                        marginBottom: "auto",
                      }}
                    />
                  </Box>
                  <Box sx={{
                    // position: 'absolute',
                    width: "100%",
                    height: "max-content",
                    bottom: 0,
                    padding: "10px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    zIndex: 1,
                    textAlign: 'center',
                    color: "red"
                  }}>
                    <Typography sx={{ color: 'red', textAlign: 'center', bgcolor: "black", }}>
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
        <Stack direction='column' spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
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
            {
              movieItemList.length && (
                <Button variant="contained" onClick={handleShowLess} sx={{ mt: 2 }}>
                  Show Less
                </Button>
              )
            }

          </Stack>

        </Stack>
      </Grid>


    </div>
  );
}