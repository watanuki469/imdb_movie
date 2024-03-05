import { PlayArrow } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleMovieAward from "components/pages/SingleMovieAward";
import SingleMoviePage from 'components/pages/SingleMoviePage';
import SingleTech from "components/pages/SingleTech";
import { movieAwardActions, selectmovieAwardList } from 'features/movieAward/movieAwardSlice';
import { selectSingleMovieList, singleMovieActions } from 'features/singleMovie/singleMovieSlice';
import { TechActions, selectTechList } from "features/tech/techSlice";
import { movieAward } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { ProductActions, selectProductList } from "features/product/productSlice";
import SingleProduct from "components/pages/SingleProduct";

export function SinglePage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()
  const singleList2 = useAppSelector(selectSingleMovieList)
  const movieAward = useAppSelector(selectmovieAwardList)
  const techList = useAppSelector(selectTechList)
  const productList = useAppSelector(selectProductList)

  useEffect(() => {
    dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
  }, [imdb_id])

  useEffect(() => {
    dispatch(movieAwardActions.fetchmovieAwardList(imdb_id))
  }, [imdb_id])

  useEffect(() => {
    dispatch(TechActions.fetchTechList(imdb_id))
  }, [imdb_id])
  useEffect(() => {
    dispatch(ProductActions.fetchProductList(imdb_id))
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
  const [isPlay, setIsPlay] = useState(true);

  const handlePlayClick = () => {
    setIsPlay(!isPlay);
  };
  const [isProduct, setIsProduct] = useState(true);

  const handleProductClick = () => {
    setIsProduct(!isProduct);
  };
  const [moviesPlay, setMoviesIsPlay] = useState(true);

  const handleMoviesClick = () => {
    setMoviesIsPlay(!moviesPlay);
  };

  return (
    <div>
      <SingleMoviePage singleList={singleList2} />

      <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', p: 1, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
          <Stack direction={'column'}>
            <Stack alignContent={'flex-start'} alignItems={'flex-start'}>
              <Stack direction={'row'} sx={{ width: '100%' }} alignItems={'center'}>
                <Stack direction={'row'} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mt: 3 }}>
                  <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
                  <Typography id='award' sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                    Movie Award({movieAward.length - 1}):
                  </Typography>
                  {Object.entries(typeCount)
                    .filter(([type, count]) => type !== 'undefined')
                    .map(([type, count], index, array) => (
                      <Stack key={index} direction={'row'} sx={{ textAlign: 'left', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'yellow', width: 'auto' }}>
                        {`${count} ${type}${index !== array.length - 1 ? ' & ' : ''}`}
                      </Stack>
                    ))}
                  <IconButton onClick={handleMoviesClick}>
                    {moviesPlay ?
                      <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
                      :
                      <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />}
                  </IconButton>

                </Stack>

              </Stack>

            </Stack>
            {moviesPlay ?
              <Stack direction={'column'} sx={{ mt: 3 }}>
                <SingleMovieAward awardList={movieAward} />
              </Stack>
              : <Stack></Stack>
            }


            <Stack direction={'row'} sx={{ width: '100%' }} alignItems={'center'} id={'tech'}>
              <Stack direction={'row'} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mt: 3 }}>
                <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
                <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                  Technical Spec
                </Typography>
                <IconButton onClick={handlePlayClick}>
                  {isPlay ?
                    <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
                    :
                    <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />}
                </IconButton>
              </Stack>

            </Stack>
            {isPlay ?
              <SingleTech awardList={techList} /> :
              <Stack></Stack>
            }

            <Stack direction={'row'} sx={{ width: '100%' }} alignItems={'center'} id={'tech'}>
              <Stack direction={'row'} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mt: 3 }}>
                <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
                <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                 Production Location List
                </Typography>
                <IconButton onClick={handleProductClick}>
                  {isProduct ?
                    <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
                    :
                    <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />}
                </IconButton>
              </Stack>

            </Stack>
            {isProduct ?
              <SingleProduct awardList={productList} /> :
              <Stack></Stack>
            }

          </Stack>
        </AppBar>
      </Box>
    </div>
  );
}