import { useAppDispatch, useAppSelector } from "app/hooks";
import KnowForPage from "components/pages/knowForPage";
import MovieItemPage from "components/pages/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie, movieItem } from 'models';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface MoviePageProps {
  movieList: Movie[]
}

export default function MoviePage ({
  movieList
}: MoviePageProps) {
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selectmovieItemList)

  let navigate = useNavigate();
  const handleChangePage = async (movie: movieItem) => {
    navigate(`/movie/id/${movie.imdb_id}`)
  }
  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set());

  // useEffect(() => {
  //   if (movieList) {
  //     movieList.map(item => {
  //       dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
  //     })
  //   }
  // }, [movieList])

  useEffect(() => {
    if (movieList && movieList.length > 0 &&movieList.length<50) {
      // Fetch data for each IMDb ID that hasn't been loaded yet
      movieList.forEach(item => {
        if (!loadedIds.has(item.imdb_id)) {
          dispatch(movieItemActions.fetchmovieItemList(item.imdb_id));
          // Add the IMDb ID to the set of loaded IDs
          setLoadedIds(prevLoadedIds => new Set(prevLoadedIds).add(item.imdb_id));
        }
      });
    }
  }, [dispatch, movieList, loadedIds]);


  return (
    <div >
      <MovieItemPage movieItemList={movieItemList} onEdit={handleChangePage} />
      {/* <KnowForPage movieItemList={movieItemList} onEdit={handleChangePage} /> */}
    </div >


  );
}