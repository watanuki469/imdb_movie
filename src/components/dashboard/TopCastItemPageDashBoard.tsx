import { useAppDispatch, useAppSelector } from "app/hooks";
import KnowForPage from "components/pages/knowForPage";
import MovieItemPage from "components/pages/movieItemPage";
import TopCastPage2 from "components/pages/TopCastPage2";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { selecttopCastList, topCastActions } from "features/topcast/topCastSlice";
import { Movie, actor, cast, movieItem } from 'models';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface TopCastItemPageDashBoardProps {
  movieList: cast[]
}

export default function TopCastItemPageDashBoard ({
  movieList
}: TopCastItemPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selecttopCastList)

  let navigate = useNavigate();
  const handleChangePage = async (movie: actor) => {
    navigate(`/actor/id/${movie.imdb_id}`)
  }
  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (movieList && movieList.length > 0) {
      // Fetch data for each IMDb ID that hasn't been loaded yet
      movieList.forEach(item => {
        if (!loadedIds.has(item.actor.imdb_id)) {
          dispatch(topCastActions.fetchtopCastList(item.actor.imdb_id));
          // Add the IMDb ID to the set of loaded IDs
          setLoadedIds(prevLoadedIds => new Set(prevLoadedIds).add(item.actor.imdb_id));
        }
      });
    }
  }, [dispatch, movieList, loadedIds]);


  return (
    <div >
      <TopCastPage2 movieItemList={movieItemList} onEdit={handleChangePage} />
    </div >


  );
}