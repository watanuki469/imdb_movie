import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleStarPage from 'components/pages/SingleStarPage';
import { StarActions, selectStarList } from 'features/star/starSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function StarPage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()

  const starList = useAppSelector(selectStarList)

  useEffect(() => {
    dispatch(StarActions.fetchStarList(imdb_id))
  }, [imdb_id])


  return (
    <div>
      <SingleStarPage starList={starList} />

    </div>
  );
}