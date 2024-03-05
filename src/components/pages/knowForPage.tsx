import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Card, CardContent, Dialog, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { movieItem } from 'models';
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PlayArrow } from "@mui/icons-material";

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
              <Grid item xs={6} md={3} lg={2.4} key={item.title}>
                <Stack alignItems="center" sx={{ width: '100%' }}>
                  <img onError={handleImageError} src={item.banner}
                    style={{ height: "280px", maxWidth: '150px', objectFit: 'cover', backgroundColor: 'black', }}
                    onClick={() => onEdit?.(item)}
                  />
                  <Typography variant="h6" color="red">
                    {breakWord(item.title).map((line, index) => (
                      <Fragment key={index}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </Typography>
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
      <Stack direction={'row'} sx={{ width: '100%', display: 'flex' }} alignItems={'flex-start'} alignContent={'flex-start'} >
        {/* <Button sx={{ alignItems: 'flex-start', alignContent: 'flex-start', height: '50px' }}> */}
        <Stack direction={'row'} sx={{ flexWrap: 'wrap' }}>
          <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '40px' }} orientation="vertical" />
          <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
            Know For:
          </Typography>
          <Stack direction={'row'} sx={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'yellow', width: 'auto' }}>
          </Stack>
          {/* <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} /> */}
          <IconButton onClick={handleMoviesClick}>
            {moviesPlay ?
              <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />
              :
              <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />}
          </IconButton>
        </Stack>
        {/* </Button> */}
      </Stack>
      {moviesPlay ?
        <Stack direction={'column'} sx={{ mt: 3 }}>    {renderPopularity()}  </Stack> : <Stack>    </Stack>
      }

    </div>
  );
}