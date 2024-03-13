import { PlayArrow } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, IconButton, Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
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
import { useTheme } from "@emotion/react";
import TopCastPageDashBoard from "components/dashboard/TopCastPageDashBoard";

export function SinglePage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()
  const singleList2 = useAppSelector(selectSingleMovieList)
  const movieAward = useAppSelector(selectmovieAwardList)
  const techList = useAppSelector(selectTechList)
  const productList = useAppSelector(selectProductList)
  const [fetchCompleted, setFetchCompleted] = useState(false);

  // useEffect(() => {
  //   // if (imdb_id && !singleList2.length) {
  //   if (imdb_id) {
  //     dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
  //   }
  // }, [imdb_id, dispatch])
  // useEffect(() => {
  //   let fetchTimer: NodeJS.Timeout;

  //   // Chỉ fetch nếu imdb_id thay đổi và fetch chưa hoàn thành
  //   if (imdb_id && !fetchCompleted) {
  //     dispatch(singleMovieActions.fetchSingleMovieList(imdb_id));

  //     // Đặt fetch đã hoàn thành thành true sau khi fetch
  //     setFetchCompleted(true);

  //     // Đặt fetchCompleted lại thành false sau 1 phút
  //     fetchTimer = setTimeout(() => {
  //       setFetchCompleted(false);
  //     }, 3000); // 1 phút = 60000 miligiây
  //   }

  //   // Cleanup để tránh memory leak
  //   return () => {
  //     clearTimeout(fetchTimer);
  //   };
  // }, [imdb_id, dispatch, fetchCompleted]);
  useEffect(() => {
    if (imdb_id) {
      dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
    }
  }, [imdb_id, dispatch])

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
  const theme = useTheme();
  const [value, setValue] = useState('one');
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const renderTabContent = (tabValue: any) => {
    switch (tabValue) {
      case 'one':
        return <SingleMovieAward awardList={movieAward} />
      case 'two':
        return   <SingleTech awardList={techList} /> 
      case 'three':
        return  <SingleProduct awardList={productList} /> 
      // case 'fourth':
      //   return (
      //     <Typography sx={{ bgcolor: 'red' }}>
      //       meom meo meo
      //     </Typography>
      //   );

      default:
        return null;
    }
  };

  return (
    <div>
      <SingleMoviePage singleList={singleList2} />
      <TopCastPageDashBoard/>

      <Box display="flex" alignContent="center" sx={{ width: '100%', m: 'auto', p: 1, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
          {/* <Stack direction={'column'}>
            <Stack alignContent={'flex-start'} alignItems={'flex-start'}>
              <Stack direction={'row'} sx={{ width: '100%' }} alignItems={'center'}>
                <Stack direction={'row'} sx={{ display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', mt: 3 }}>
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
                <Typography id={'product'} sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
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

          </Stack> */}
          <Toolbar sx={{ mt: '30px', width: '100%', overflowX: 'auto' }}>
            <Stack direction={'row'} sx={{ bgcolor: 'black' }}>
              <Stack>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary"
                  sx={{
                    bgcolor: 'black',
                    '& .MuiTab-root': {
                      alignItems: 'center', border: 0, cursor: 'pointer', display: 'flex', flexShrink: 0, height: '48px', justifyContent: 'center',
                      listStyle: 'none', outline: 0, padding: '0 1.5rem', textTransform: 'none', transition: 'all .15s, fontWeight 0',
                      color: 'white', fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: '#FC819E',
                      },
                    },
                    '& .Mui-selected': {
                      bgcolor: 'purple',
                    },
                  }}

                >
                  <Tab value="one" label={<span style={{ color: 'white' }}>Award & Nomine</span>} />
                  <Tab value="two" label={<span style={{ color: 'white' }}>Technical Spec</span>} />
                  <Tab value="three" label={<span style={{ color: 'white' }}>Production Locations</span>} />
                  {/* <Tab value="fourth" label={<span style={{ color: 'white' }}>FAQ</span>} /> */}
                  {/* <Tab value="five" label={<span style={{ color: 'white' }}>meomeo</span>} /> */}

                </Tabs>
              </Stack>
            </Stack>
          </Toolbar>
          {renderTabContent(value)}

        </AppBar>
      </Box>
    </div>
  );
}