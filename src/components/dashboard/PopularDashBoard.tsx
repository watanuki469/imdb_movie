import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { popularityActions, selectPopularityList } from "features/popularity/popularitySlice";
import { useEffect } from 'react';
import SliderItemPageDashBoard from "./SliderItemPageDashBoard";
import Top10ItemPageDashBoard from "./Top10ItemPageDashBoard";
import PopularItemPageDashBoard from "./PopularItemPageDashBoard";
import { Footer, Header } from "components/common";

export default function PopularDashBoard() {

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
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <Header />
        <PopularItemPageDashBoard popurarityList={popurarityList} />
        <Footer />

      </Box>
    </div>
  );
}