import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Card, CardContent, Dialog, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { movieItem } from 'models';
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PlayArrow } from "@mui/icons-material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


export interface KnowForPageProps {
  movieItemList: movieItem[],
  onEdit?: (movie: movieItem) => void;
}

export default function KnowForPage({
  movieItemList,
  onEdit
}: KnowForPageProps) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<movieItem>();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenClick = (item: movieItem) => {
    setSelectedMovie(item)
    setOpen(true)
  }
  const bull = (<Box sx={{ display: 'inline-block', mx: '6px', transform: 'scale(0.8)', color: 'white' }} >     • </Box>);

  const handleImageError = (e: any) => {
    const imgElement = e.currentTarget as HTMLImageElement;
    imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
  };
  const breakWord = (title: any) => {
    const words = title.split(' ');
    let lines = [];
    let line = '';
    words.forEach((word: any) => {
      if ((line + ' ' + word).trim().split(' ').length <= 3) {
        line = (line + ' ' + word).trim();
      } else {
        lines.push(line);
        line = word;
      }
    });
    lines.push(line);
    return lines;
  }

  const renderPopularity = (uniqueTitles: any[] = []) => {
    return (
      <Grid container spacing={0} justifyContent="flex-start">
        {movieItemList?.map((item: movieItem) => {
          // Kiểm tra xem item.title đã xuất hiện chưa
          if (!uniqueTitles.includes(item.title)) {
            // Nếu chưa xuất hiện, thêm vào mảng uniqueTitles và hiển thị
            uniqueTitles.push(item.title);
            return (
              <Grid item xs={6} sm={6} md={3} lg={2.4} key={item.title}>
                <Stack alignItems="center" sx={{
                  width: '100%',

                }}
                >
                  <Stack sx={{
                    position: 'relative', justifyContent: 'flex-start',
                    "&:hover .media-info": { opacity: 1, bottom: 0 },
                    "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
                    "&:hover img": { opacity: 0.7 }, // Thêm đoạn này để khi hover vào ảnh, opacity của ảnh sẽ mờ đi
                  }}>
                    <img
                      src={item.banner}
                      onError={handleImageError}
                      style={{
                        width: '100%',
                        height: "280px", objectFit: 'cover', backgroundColor: 'black',
                      }}
                      onClick={() => onEdit?.(item)}
                    />
                    <Box className="media-back-drop" sx={{ opacity: { xs: 1, md: 0 } }} />
                    <Button
                      className="media-play-btn"
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      sx={{
                        display: { xs: "none", md: "flex" },
                        opacity: 0,
                        transition: "all 0.3s ease",
                        position: "absolute",
                        top: "50%",
                        bgcolor: 'red',
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        "& .MuiButton-startIcon": { marginRight: "-4px" }
                      }}
                    />
                    <Box
                      className="media-info"
                      sx={{
                        transition: "all 0.3s ease",
                        opacity: { xs: 1, md: 0 },
                        position: "absolute",
                        bottom: { xs: 0, md: "-20px" },
                        width: "100%",
                        height: "max-content",
                        boxSizing: "border-box",
                        padding: { xs: "10px", md: "2rem 1rem" }
                      }}
                    >
                      <Stack spacing={{ xs: 1, md: 2 }} justifyContent={'flex-start'} sx={{ textAlign: "left" }}>
                        <Typography>{item.year}</Typography>
                        <Typography
                          variant="body1"
                          fontWeight="700"
                          sx={{
                            fontSize: "1rem",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>



                  {/* <Typography variant="h6" color="red">
                    {breakWord(item.title).map((line, index) => (
                      <Fragment key={index}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </Typography> */}
                </Stack>
              </Grid>
            );
          }
          // Nếu item.title đã xuất hiện, không hiển thị
          return null;
        })}
      </Grid>
    );
  };
  const [moviesPlay, setMoviesIsPlay] = useState(true);
  const handleMoviesClick = () => {
    setMoviesIsPlay(!moviesPlay);
  };

  return (
    <div style={{ width: '100%' }} id='knowfor'>
      <Stack direction={'column'} sx={{ mt: 3 }}>    {renderPopularity()}  </Stack>
      {/* <Stack direction={'row'} sx={{ width: '100%', display: 'flex' }} alignItems={'flex-start'} alignContent={'flex-start'} >
        <Stack direction={'row'} sx={{ flexWrap: 'wrap',alignItems: 'center' }}>
          <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
          <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
            Know For:
          </Typography>
          <Stack direction={'row'} sx={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'yellow', width: 'auto' }}>
          </Stack>
          <IconButton onClick={handleMoviesClick}>
            {moviesPlay ?
              <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
              :
              <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />}
          </IconButton>
        </Stack>
      </Stack>
      {moviesPlay ?
        <Stack direction={'column'} sx={{ mt: 3 }}>    {renderPopularity()}  </Stack> : <Stack>    </Stack>
      } */}

    </div>
  );
}