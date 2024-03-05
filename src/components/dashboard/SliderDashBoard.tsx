import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { popularityActions, selectPopularityList } from "features/popularity/popularitySlice";
import { useEffect } from 'react';
import SliderItemPageDashBoard from "./SliderItemPageDashBoard";

export default function SliderDashBoard() {

  const popurarityList = useAppSelector(selectPopularityList);

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(popularityActions.fetchPopularityList({}))
  }, [])

  // useEffect(() => {
  //   console.log('popurarity list' + popurarityList);
  // }, [popurarityList])

  return (
    <div>
      <Box sx={{bgcolor: "black", position: "relative"}}>
        <SliderItemPageDashBoard popurarityList={popurarityList} />
      </Box>
    </div>
  );
}