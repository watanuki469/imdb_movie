import { PlayArrow } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleMovieAward from "components/pages/SingleMovieAward";
import SingleMoviePage from 'components/pages/SingleMoviePage';
import { movieAwardActions, selectmovieAwardList } from 'features/movieAward/movieAwardSlice';
import { selectSingleMovieList, singleMovieActions } from 'features/singleMovie/singleMovieSlice';
import { movieAward } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function SinglePage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()
  const singleList2 = useAppSelector(selectSingleMovieList)
  const movieAward = useAppSelector(selectmovieAwardList)


  useEffect(() => {
    dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))

  }, [imdb_id])

  useEffect(() => {
    dispatch(movieAwardActions.fetchmovieAwardList(imdb_id))

  }, [imdb_id])

  useEffect(() => {
    const genreCount = countType(movieAward);
    setTypeCount(genreCount);

  }, [movieAward]);
  const [typeCount, setTypeCount] = useState<Record<string, number>>({});

  type Type = | ' ';

  function countType(TypeList: movieAward[]): Record<string, number> {
    const keyCounting: Record<string, number> = {};
    TypeList.forEach((movie) => {
      // type key
      const keyName: Type = movie.type as Type;
      // Nếu thể loại đã tồn tại, tăng giá trị đếm lên 1; ngược lại, tạo mới với giá trị 1.
      keyCounting[keyName] = (keyCounting[keyName] || 0) + 1;
    })
    return keyCounting;

  }

  return (
    <div>
      <SingleMoviePage singleList={singleList2} />

      <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', p: 1, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
          <Stack direction={'column'}>
            <Stack alignContent={'flex-start'} alignItems={'flex-start'}>

              <Button sx={{ alignItems: 'flex-start', alignContent: 'flex-start', height: '50px' }}>
                <Divider sx={{ border: '5px solid yellow', marginRight: '10px' }} orientation="vertical" />
                <Stack direction={'row'} alignContent={'center'} alignItems={'center'}>
                  <Typography sx={{ color: 'white', border: 'none', fontWeight: 'bold', fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', } }}>
                    <b>Movie Award</b>:
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                    }} >

                    {Object.entries(typeCount)
                      .filter(([type, count]) => type !== 'undefined') // Filter out entries with type 'Halloween'
                      .map(([type, count], index, array) => (
                        <Typography key={index} sx={{ fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'white' }}>
                          {`${count} ${type}${index !== array.length - 1 ? ' & ' : ''}`}
                        </Typography>

                      ))}
                    <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />

                    {/* </List> */}
                  </Box>

                </Stack>
              </Button>

            </Stack>
            <Stack direction={'row'}>
              <SingleMovieAward awardList={movieAward} />
            </Stack>
          </Stack>
        </AppBar>

      </Box>


    </div>
  );
}