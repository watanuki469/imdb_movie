import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { genres } from 'models';
import { useNavigate } from "react-router-dom";


export interface GenrePageProps {
  genresList: genres[];
}

export default function GenrePage({
  genresList

}: GenrePageProps) {

  let navigate = useNavigate();
  return (

    <div style={{ width: '100%', justifyContent: "center", textAlign: 'center', alignContent: 'center' }} >
      {/* <Box
        sx={{
          display: 'grid',
          columnGap: 5,
          rowGap: 5,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }} > */}
      <Grid sx={{ mt: 3 }} rowSpacing={2}
        container spacing={{ xs: 3, md: 6 }} columns={{ xs: 4, sm: 4, md: 12 }} justifyContent="left" alignContent='left'>
        {genresList.map((item, index: number) =>
          <Grid item xs={2} sm={6} md={3}
            key={index} sx={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'grid' }}>
            <Button variant="contained" size="large" onClick={() => navigate(`/movie/byGen/${item.genre}`)}
              sx={{
                fontWeight: '700', textTransform: 'uppercase'
                , minHeight: '1rem', width: { xs: '8rem', sm: '10rem', md: '12rem' }, ':hover': {
                  bgcolor: 'red',
                  color: 'white',
                },
                background: "linear-gradient(180deg,grey,transparent) border-box",
                border: "2px solid transparent",
                backgroundColor: 'black',
                borderRadius: '1rem',
                '--Grid-borderWidth': '1px', borderColor: 'pink',
                display: 'flex', // Hiển thị button và icon theo chiều ngang
                alignItems: 'center', // Căn chỉnh theo chiều dọc
                justifyContent: 'center', // Căn chỉnh theo chiều ngang
                textAlign: 'center', // Căn chỉnh nội dung văn bản theo giữa
                whiteSpace: 'nowrap'
                // gap: '0.5rem'
              }}>
              {(() => {
                switch (item.genre) {
                  case 'Adventure':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-beam' })} style={{ color: 'yellow' }} />;
                  case 'Fantasy':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })} style={{ color: 'yellow' }} />;
                  case 'Crime':
                    return <FontAwesomeIcon icon={icon({ name: 'face-rolling-eyes' })} style={{ color: 'yellow' }} />;
                  case 'Drama':
                    return <FontAwesomeIcon icon={icon({ name: 'face-meh-blank' })} style={{ color: 'yellow' }} />;
                  case 'Comedy':
                    return <FontAwesomeIcon icon={icon({ name: 'face-kiss-wink-heart' })} style={{ color: 'yellow' }} />;
                  case 'Animation':
                    return <FontAwesomeIcon icon={icon({ name: 'face-dizzy' })} style={{ color: 'yellow' }} />;
                  case 'Sci-Fi':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-wink' })} style={{ color: 'yellow' }} />;
                  case 'Sport ':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })} style={{ color: 'yellow' }} />;
                  case 'Action':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh' })} style={{ color: 'yellow' }} />;
                  case 'Thriller':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue' })} style={{ color: 'yellow' }} />;
                  case 'Mystery':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-stars' })} style={{ color: 'yellow' }} />;
                  case 'Western':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-beam' })} style={{ color: 'yellow' }} />;
                  case 'Romance':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-hearts' })} style={{ color: 'yellow' }} />;
                  case 'Biography':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-wide' })} style={{ color: 'yellow' }} />;
                  case 'Horror':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-beam-sweat' })} style={{ color: 'yellow' }} />;
                  case 'War':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-squint-tears' })} style={{ color: 'yellow' }} />;
                  case 'Musical':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue-wink' })} style={{ color: 'yellow' }} />;
                  case 'History':
                    return <FontAwesomeIcon icon={icon({ name: 'face-kiss-beam' })} style={{ color: 'yellow' }} />;
                  case 'Music':
                    return <FontAwesomeIcon icon={icon({ name: 'face-sad-tear' })} style={{ color: 'yellow' }} />;
                  case 'Documentary':
                    return <FontAwesomeIcon icon={icon({ name: 'face-sad-cry' })} style={{ color: 'yellow' }} />;
                  case 'Short':
                    return <FontAwesomeIcon icon={icon({ name: 'face-tired' })} style={{ color: 'yellow' }} />;
                  case 'Talk-Show':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })} style={{ color: 'yellow' }} />;
                  case 'Game-Show':
                    return <FontAwesomeIcon icon={icon({ name: 'face-meh' })} style={{ color: 'yellow' }} />;
                  case 'Reality-TV':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue' })} style={{ color: 'yellow' }} />;
                  case 'News':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-beam' })} style={{ color: 'yellow' }} />;
                  case 'Adult':
                    return <FontAwesomeIcon icon={icon({ name: 'face-flushed' })} style={{ color: 'yellow' }} />;


                  default:
                    return <FontAwesomeIcon icon={icon({ name: 'smile' })} style={{ color: 'yellow' }} />; // If no matching case is found, return null or another default value
                }
              })()}
              <>
                <span style={{ marginRight: '1rem' }}></span> {/* Adjust the margin as needed */}
                {item.genre}
              </>
            </Button>
          </Grid>

        )}
      </Grid>
      {/* </Box> */}
    </div >

  );
}