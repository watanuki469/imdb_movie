import { useAppDispatch, useAppSelector } from "app/hooks";
import Top10Page from "components/pages/Top10Page";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Top10ItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function Top10ItemPageDashBoard({
  popurarityList
}: Top10ItemPageDashBoardProps) {
  const dispatch = useAppDispatch()
  const popurarityItemList = useAppSelector(selectmovieItemList)
  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set());

  let navigate = useNavigate();
  const handleChangePage = async (movie: movieItem) => {
    navigate(`/movie/id/${movie.imdb_id}`)

  }

  // useEffect(() => {
  //   (async () => {
  //     if (popurarityList) {
  //       await popurarityList.map(item => {
  //         dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
  //       })
  //     }
  //   })()

  // }, [popurarityList])
  useEffect(() => {
    if (popurarityList && popurarityList.length > 0  &&popurarityItemList.length<50) {
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
    <div style={{ backgroundColor: "black", position: "relative", width: '100%' }}>
      <Top10Page popurarityItemList={popurarityItemList} />
    
    </div >

  );
}