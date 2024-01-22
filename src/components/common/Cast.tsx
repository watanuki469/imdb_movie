import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import MoviePage from 'components/dashboard/MovieItemPageDashBoard';
import CastPage from 'components/pages/CastPage';
import { castActions, selectCastList } from 'features/cast/castSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {

  const { imdb_id } = useParams<{ imdb_id: string }>()

  const castList = useAppSelector(selectCastList);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (imdb_id) {
      dispatch(castActions.fetchCastList(imdb_id))
    }
  }, [imdb_id])


  return (
    <div>
      <CastPage castList={castList} />
    </div>

  );
}