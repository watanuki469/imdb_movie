import { useAppDispatch, useAppSelector } from "app/hooks";
import PopularPage from "components/pages/PopularPage";
import Top10Page from "components/pages/Top10Page";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface PopularItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function PopularItemPageDashBoard({
  popurarityList
}: PopularItemPageDashBoardProps) {
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
    <div style={{ backgroundColor: "black", position: "relative", width: '80%', marginLeft: '13%' }}>
      <PopularPage popurarityItemList={popurarityItemList} />
    
    </div >

  );
}