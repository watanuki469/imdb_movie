import { PlayArrow } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import ActorBioPages from 'components/pages/ActorBioPages';
import { ActorActions, selectActorList } from 'features/actor/actorSlice';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useParams } from 'react-router-dom';



export function ActorBio() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()

  const starList = useAppSelector(selectActorList)

  useEffect(() => {
    dispatch(ActorActions.fetchActorList(imdb_id))
  }, [imdb_id])
  const [moviesPlay, setMoviesIsPlay] = useState(true);

  const handleMoviesClick = () => {
    setMoviesIsPlay(!moviesPlay);
  };

  return (
    <div id="biography-section">
      <Stack direction={'column'} sx={{ mt: 3, width: '100%' }}>
        <ActorBioPages starList={starList} />
      </Stack>
      {/* <Stack alignContent={'center'} alignItems={'center'} direction={'row'}>
        <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
        <Typography sx={{
          textAlign: 'left', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
          color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }
        }}>
          Did you know
        </Typography>
        <Stack direction={'row'} alignContent={'center'} alignItems={'center'}>
          <IconButton onClick={handleMoviesClick}>
            {moviesPlay ?
              <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
              :
              <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />}
          </IconButton>
        </Stack>

      </Stack>
      {moviesPlay ?
        <Stack direction={'column'} sx={{ mt: 3, width: '100%' }}>
          <ActorBioPages starList={starList} />
        </Stack>
        : <Stack></Stack>
      } */}

    </div >
  );
}