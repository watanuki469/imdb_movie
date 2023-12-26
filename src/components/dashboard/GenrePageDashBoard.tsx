import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import GenrePage from "components/pages/GenrePage";
import { genreActions, selectGenreList } from "features/genre/genreSlice";
import { useEffect } from 'react';

export default function Dashboard() {

  const genreList = useAppSelector(selectGenreList);

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(genreActions.fetchGenreList({}))
  }, [])

  // useEffect(() => {
  //   console.log('genre list  ' + genreList);
  // }, [genreList])

  return (
    <div>
      <Box>
        <GenrePage genresList={genreList} />
      </Box>
    </div>
  );
}