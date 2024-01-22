import { LinearProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleStarPage from 'components/pages/SingleStarPage';
import { StarActions, selectStarList, selectStarLoading } from 'features/star/starSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function StarPage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()

  const starList = useAppSelector(selectStarList)

  useEffect(() => {
    dispatch(StarActions.fetchStarList(imdb_id))
  }, [imdb_id])
  const loading = useAppSelector(selectStarLoading);


  return (
    <div>
      <SingleStarPage starList={starList} />

    </div>
  );
}