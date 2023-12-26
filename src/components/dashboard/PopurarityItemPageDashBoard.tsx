import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import PopurarityPage from "components/pages/PopularityPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface PopurarityItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function PopurarityItemPageDashBoard({
  popurarityList
}: PopurarityItemPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const popurarityItemList = useAppSelector(selectmovieItemList)
  let navigate = useNavigate();
  const handleChangePage = async (movie: movieItem) => {
    navigate(`/movie/id/${movie.imdb_id}`)

  }

  useEffect(() => {
    (async () => {
      if (popurarityList) {
        await popurarityList.map(item => {
          dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
        })
      }
    })()

  }, [popurarityList])

  return (
    <div style={{backgroundColor: "black", position: "relative", width: '80%', marginLeft: '13%' }}>
        <PopurarityPage popurarityItemList={popurarityItemList} onEdit={handleChangePage} />

    </div >

  );
}