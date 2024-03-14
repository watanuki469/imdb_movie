import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import MoviePage from 'components/dashboard/MovieItemPageDashBoard';
import { ActorActions, selectActorList } from 'features/actor/actorSlice';
import { movieActions, selectMovieList } from 'features/movie/movieSlice';
import { StarActions } from 'features/star/starSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopCastItemPageDashBoard from './TopCastItemPageDashBoard';
import { castActions, selectCastList } from 'features/cast/castSlice';

export default function TopCastPageDashBoard() {

  const { imdb_id } = useParams();

  const movieList = useAppSelector(selectCastList);
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (movieList && movieList.length > 0  ) {
      dispatch(castActions.fetchCastList(imdb_id))
    }

  }, [])

  return (
    <div>
      <Typography variant='h3' sx={{ color: 'white', textAlign: 'left' }}>Full Cast And Crew</Typography>
      <TopCastItemPageDashBoard movieList={movieList} />
    </div>


  );
}