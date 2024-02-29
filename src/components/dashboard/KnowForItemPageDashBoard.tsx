import { Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import KnowForPage from "components/pages/knowForPage";
import MovieItemPage from "components/pages/movieItemPage";
import { knowforItemActions, selectknowforItemList } from "features/knowforItem/knowforItemSlice";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie, knowFor, movieItem } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface KnowForPageDashBoardProps {
  movieList: knowFor[]
}

export default function KnowForItemPageDashBoard({
  movieList
}: KnowForPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selectknowforItemList)

  let navigate = useNavigate();
  const handleChangePage = async (movie: movieItem) => {
    navigate(`/movie/id/${movie.imdb_id}`)
  }
  useEffect(() => {
    if (movieList &&movieList.length<50) {
      movieList.map(item => {
        dispatch(knowforItemActions.fetchknowforItemList(item[0].imdb_id))
      })
    }
  }, [movieList])

  return (
    <div >
      <KnowForPage movieItemList={movieItemList} onEdit={handleChangePage} />
      
    </div >

  )
}