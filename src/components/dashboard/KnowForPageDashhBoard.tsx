import { useAppDispatch, useAppSelector } from 'app/hooks';
import { knowForActions, selectknowForList } from 'features/knowfor/knowForSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KnowForItemPageDashBoard from './KnowForItemPageDashBoard';
import { Typography } from '@mui/material';

export default function KnowForPageDashBoard() {

  const { imdb_id } = useParams<{imdb_id: string }>()
  // const { imdb_id } = useParams();
  const dispatch = useAppDispatch()
  const movieList = useAppSelector(selectknowForList);

  useEffect(() => {
    dispatch(knowForActions.fetchknowForList(imdb_id))
  }, [imdb_id])

  return (
    <div>
      {/* <Typography variant='h3' sx={{color:'white',textAlign:'center'}}>{genre} Movie</Typography> */}
      <KnowForItemPageDashBoard movieList={movieList} />
    </div>


  );
}