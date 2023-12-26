import { useAppDispatch, useAppSelector } from "app/hooks";
import MovieItemPage from "components/pages/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie, movieItem } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface MoviePageProps {
  movieList: Movie[]
}

export default function ({
  movieList
}: MoviePageProps) {
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selectmovieItemList)

  let navigate = useNavigate();
  const handleChangePage = async (movie: movieItem) => {
    navigate(`/movie/id/${movie.imdb_id}`)
   
  }
  useEffect(() => {
    if (movieList) {
      movieList.map(item => {
        dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
      })
    }
  }, [movieList])

  return (
    <div style={{ width: '80%', marginLeft: '13%' }}>
      <MovieItemPage movieItemList={movieItemList} onEdit={handleChangePage} />
    </div >


  );
}