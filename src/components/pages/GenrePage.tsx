import { Box, Button, Grid, Typography } from "@mui/material";
import { genres } from 'models';
import { Route, Routes, useNavigate } from "react-router-dom"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";


export interface GenrePageProps {
  genresList: genres[];
}

export default function GenrePage({
  genresList

}: GenrePageProps) {

  let navigate = useNavigate();
  const [page, setPage] = useState(1);


  return (

    <div style={{ width: '80%', marginLeft: '13%' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 5,
          rowGap: 5,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }} >
        {genresList.map(item =>
          <Button variant="contained" size="large" onClick={() => navigate(`/movie/byGen/${item.genre}`)}
            sx={{
              fontWeight: '600', textTransform: 'uppercase' 
              , minHeight: '1rem', width: '15rem', ':hover': {
                bgcolor: 'red',
                color: 'white',
              },
              background: "linear-gradient(180deg,grey,transparent) border-box",
              border: "2px solid transparent",
              backgroundColor: 'black',
              // paddingLeft: '1rem', paddingRight: '1rem',
              borderRadius: '1rem',
              '--Grid-borderWidth': '1px', borderColor: 'pink',

            }}>


            <Typography>
              {(() => {
                switch (item.genre) {
                  case 'Adventure':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-beam' })} style={{ color: 'yellow' }} />;
                  case 'Fantasy':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })}  style={{ color: 'yellow' }}/>;
                  case 'Crime':
                    return <FontAwesomeIcon icon={icon({ name: 'face-rolling-eyes' })}  style={{ color: 'yellow' }}/>;
                  case 'Drama':
                    return <FontAwesomeIcon icon={icon({ name: 'face-meh-blank' })}  style={{ color: 'yellow' }}/>;
                  case 'Comedy':
                    return <FontAwesomeIcon icon={icon({ name: 'face-kiss-wink-heart' })}  style={{ color: 'yellow' }}/>;
                  case 'Animation':
                    return <FontAwesomeIcon icon={icon({ name: 'face-dizzy' })}  style={{ color: 'yellow' }}/>;
                  case 'Sci-Fi':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-wink' })}  style={{ color: 'yellow' }}/>;
                  case 'Sport ':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })} style={{ color: 'yellow' }}/>;
                  case 'Action':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh' })}  style={{ color: 'yellow' }}/>;
                  case 'Thriller':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue' })}  style={{ color: 'yellow' }}/>;
                  case 'Mystery':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-stars' })}  style={{ color: 'yellow' }}/>;
                  case 'Western':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-beam' })}  style={{ color: 'yellow' }}/>;
                  case 'Romance':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-hearts' })} style={{ color: 'yellow' }} />;
                  case 'Biography':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-wide' })} style={{ color: 'yellow' }} />;
                  case 'Horror':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-beam-sweat' })} style={{ color: 'yellow' }} />;
                  case 'War':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-squint-tears' })} style={{ color: 'yellow' }} />;
                  case 'Musical':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue-wink' })} style={{ color: 'yellow' }}/>;
                  case 'History':
                    return <FontAwesomeIcon icon={icon({ name: 'face-kiss-beam' })} style={{ color: 'yellow' }}/>;
                  case 'Music':
                    return <FontAwesomeIcon icon={icon({ name: 'face-sad-tear' })}  style={{ color: 'yellow' }}/>;
                  case 'Documentary':
                    return <FontAwesomeIcon icon={icon({ name: 'face-sad-cry' })} style={{ color: 'yellow' }} />;
                  case 'Short':
                    return <FontAwesomeIcon icon={icon({ name: 'face-tired' })}  style={{ color: 'yellow' }}/>;
                  case 'Talk-Show':
                    return <FontAwesomeIcon icon={icon({ name: 'face-laugh-squint' })}  style={{ color: 'yellow' }}/>;
                  case 'Game-Show':
                    return <FontAwesomeIcon icon={icon({ name: 'face-meh' })} style={{ color: 'yellow' }} />;
                  case 'Reality-TV':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-tongue' })} style={{ color: 'yellow' }} />;
                  case 'News':
                    return <FontAwesomeIcon icon={icon({ name: 'face-grin-beam' })}  style={{ color: 'yellow' }}/>;
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
            </Typography>
          </Button>
        )}
      </Box>
    </div >

  );
}