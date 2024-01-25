import { PlayArrow } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import ActorBioPages from 'components/pages/ActorBioPages';
import { ActorActions, selectActorList } from 'features/actor/actorSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



export function ActorBio() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()

  const starList = useAppSelector(selectActorList)

  useEffect(() => {
    dispatch(ActorActions.fetchActorList(imdb_id))
  }, [imdb_id])

  return (
    <div>
      <Stack alignContent={'flex-start'} alignItems={'flex-start'} direction={'row'}>
          {/* <Button sx={{ alignItems: 'flex-start', alignContent: 'flex-start', height: '50px' }}> */}
          <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '50px' }} orientation="vertical" />
          <Stack direction={'row'} alignContent={'center'} alignItems={'center'}>
            <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', } }}>
              <b>Did you know</b>
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
              }} >
              <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />

              {/* </List> */}
            </Box>

          </Stack>
          {/* </Button> */}
      </Stack>
      <ActorBioPages starList={starList} />

    </div>
  );
}