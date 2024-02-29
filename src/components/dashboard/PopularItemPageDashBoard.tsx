import { useAppDispatch, useAppSelector } from "app/hooks";
import PopularPage from "components/pages/PopularPage";
import Top10Page from "components/pages/Top10Page";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface PopularItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function PopularItemPageDashBoard({
  popurarityList
}: PopularItemPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const popurarityItemList = useAppSelector(selectmovieItemList)

  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set());

  // useEffect(() => {
  //   (async () => {
  //     if (popurarityList) {
  //       await popurarityList.map(item => {
  //         dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
  //       })
  //     }
  //   })()

  // }, [dispatch, popurarityList])
 

  useEffect(() => {
    if (popurarityList && popurarityList.length > 0 &&popurarityItemList.length<50) {
      // Fetch data for each IMDb ID that hasn't been loaded yet
      popurarityList.forEach(item => {
        if (!loadedIds.has(item.imdb_id)) {
          dispatch(movieItemActions.fetchmovieItemList(item.imdb_id));
          // Add the IMDb ID to the set of loaded IDs
          setLoadedIds(prevLoadedIds => new Set(prevLoadedIds).add(item.imdb_id));
        }
      });
    }
  }, [dispatch, popurarityList, loadedIds]);




  return (
    <div style={{ backgroundColor: "black", position: "relative", width: '80%', marginLeft: '13%' }}>
      <PopularPage popurarityItemList={popurarityItemList} />

    </div >

  );
}