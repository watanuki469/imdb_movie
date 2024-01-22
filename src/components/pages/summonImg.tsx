import { useAppDispatch, useAppSelector } from "app/hooks";
import SliderPage from "components/pages/SliderPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { award, movieItem, popularity } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface SliderItemPageDashBoardProps {
  popurarityList: award[]
}

export default function summonImg({
  popurarityList
}: SliderItemPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const popurarityItemList = useAppSelector(selectmovieItemList)

  useEffect(() => {
    (async () => {
      if (popurarityList) {
        await popurarityList.map(item => {
          dispatch(movieItemActions.fetchmovieItemList(item.movie.imdb_id))
        })
      }
    })()

  }, [popurarityList])

  return (
    <div style={{ backgroundColor: "black", position: "relative", width: '80%', marginLeft: '13%' }}>
      <SliderPage popurarityItemList={popurarityItemList} />
    </div >

  );
}