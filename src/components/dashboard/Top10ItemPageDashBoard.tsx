import { useAppDispatch, useAppSelector } from "app/hooks";
import Top10Page from "components/pages/Top10Page";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface Top10ItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function Top10ItemPageDashBoard({
  popurarityList
}: Top10ItemPageDashBoardProps) {
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
    <div style={{ backgroundColor: "black", position: "relative", width: '100%' }}>
      <Top10Page popurarityItemList={popurarityItemList} />
    
    </div >

  );
}