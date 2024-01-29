import { AppBar, Container } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import SliderPage from "components/pages/SliderPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { movieItem, popularity } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface SliderItemPageDashBoardProps {
  popurarityList: popularity[]
}

export default function SliderItemPageDashBoard({
  popurarityList
}: SliderItemPageDashBoardProps) {
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
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <div style={{
          backgroundColor: "black", width: '100%',
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          maxHeight: "80%",

          top: 0,
          left: 0,
        }}>
          <SliderPage popurarityItemList={popurarityItemList} />
        </div >
      </Container>
    </AppBar>

  );
}