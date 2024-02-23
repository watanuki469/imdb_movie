import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CategoryIcon from '@mui/icons-material/Category';
import FilterIcon from '@mui/icons-material/Filter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { AppBar, Badge, Box, Button, Divider, Grid, IconButton, LinearProgress, List, ListItem, Stack, Toolbar, Typography, makeStyles } from "@mui/material";
import { useAppSelector } from 'app/hooks';
import Cast from 'components/common/Cast';
import { selectSingleMovieListLoading } from 'features/singleMovie/singleMovieSlice';
import { movieItem, singleMovie } from 'models';
import { useNavigate } from "react-router-dom";


export interface SingleMoviePageProps {
    singleList: singleMovie[]
    //fix from movieItem
}

export default function SingleMoviePage({
    singleList,

}: SingleMoviePageProps) {
    const bull = (<span style={{ display: 'inline-block', marginLeft: '6px', marginRight: '6px', transform: 'scale(0.8)', color: 'white' }} >     • </span>);

    const handleChangePage = () => {

    };
    const loading = useAppSelector(selectSingleMovieListLoading)

    const renderPopularity = (popularity: number) => {
        const num = 5000 - popularity
        if (num <= 100) {
            return (
                <Box>
                    <Typography sx={{
                        color: "#A9A9A9", fontSize: "1.5rem",
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                        textTransform: 'capitalize'
                    }}>POPULARITY RATING</Typography>
                    <Button sx={{ display: 'flex' }}>
                        <Box>
                            <TrendingUpIcon sx={{ color: 'blue', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                        </Box>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{
                                color: "white", fontSize: "1.5rem",
                                fontWeight: "bold",
                                fontFamily: "Arial, sans-serif",
                                textTransform: 'capitalize'
                            }}> {num}</Typography>
                        </Box>
                    </Button>
                </Box>
            );
        } else {
            return null;
        }
    };
    const getRandomNumber = () => {
        // Generate a random number between 1 and 100
        return Math.floor(Math.random() * 100) + 1;
    };
    let navigate = useNavigate();
    const randomScore = getRandomNumber();
    const handleImageError = (e: any) => {
        const imgElement = e.currentTarget as HTMLImageElement;
        imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
    };
    const handleCastClick = () => {
        const casterElement = document.getElementById('caster');
        if (casterElement) {
            casterElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div>
            <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', textAlign: 'center', bgcolor: 'black' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" color="inherit"
                                onClick={handleCastClick}
                            >
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline'
                                    },
                                }}>Cast & crew {bull} </Typography>
                            </IconButton>

                            <IconButton size="large"
                                onClick={() => navigate('/')}
                                color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': { textDecoration: 'underline', },
                                }}> User reviews {bull}</Typography>
                            </IconButton>

                            <IconButton size="large" onClick={() => navigate('/')} color="inherit">
                                <Typography sx={{
                                    color: 'white',
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    fontFamily: "Arial, sans-serif",
                                    textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}> Trivia {bull}</Typography>
                            </IconButton>

                            <IconButton onClick={() => navigate('/')}
                                size="large" color="inherit">
                                <Typography sx={{
                                    color: 'white',
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    fontFamily: "Arial, sans-serif",
                                    textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}>FAQ </Typography>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem",
                                    fontWeight: "bold",
                                    fontFamily: "Arial, sans-serif",
                                    textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}> IMDbPro </Typography>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <Button sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                < CategoryIcon sx={{ color: 'white' }} />
                                <>
                                    <Typography onClick={() => handleChangePage()} sx={{
                                        alignItems: 'center', color: 'white',
                                        border: 'none',
                                        fontWeight: 'bold',
                                        fontSize: "1rem",
                                        fontFamily: "Arial, sans-serif",
                                        textTransform: 'capitalize',
                                        ':hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}>
                                        All Topic
                                    </Typography>
                                </>
                            </Button>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{
                                    ':hover': {
                                        textDecoration: 'underline', bgcolor: '#FFA1F5',
                                    },
                                }} >
                                <Badge color="error">
                                    <ShareIcon sx={{
                                        ':hover': {
                                            textDecoration: 'underline', bgcolor: '#FFA1F5',
                                        },
                                    }} />
                                </Badge>
                            </IconButton>

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Button sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                < CategoryIcon sx={{ color: 'white' }} />
                                <>
                                    <Typography onClick={() => handleChangePage()} sx={{
                                        alignItems: 'center', color: 'white',
                                        border: 'none',
                                        fontWeight: 'bold',
                                        fontSize: "1rem",
                                        fontFamily: "Arial, sans-serif",
                                        textTransform: 'capitalize',
                                        ':hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}>
                                        All Topic
                                    </Typography>
                                </>
                            </Button>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <ShareIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                    <Toolbar sx={{ mt: '30px' }}>
                        <Box>
                            {singleList.map((item, index) =>
                                <Stack key={index} sx={{ textAlign: 'left' }}>
                                    <Stack alignItems="left">
                                        <Typography variant="h4" color="white">
                                            {item.title}
                                        </Typography>

                                    </Stack>

                                    <Stack alignItems="left">
                                        <Typography variant="h6" color="#B0A695">
                                            {item.year}  {bull}   {item.content_rating}  {bull}   {item.movie_length} min
                                        </Typography>

                                    </Stack>
                                </Stack>
                            )}
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        {singleList.map((item, index) =>
                            <Stack key={index} direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex', textAlign: 'center' } }}>
                                <Box>
                                    <Typography sx={{
                                        color: '#B0A695', fontSize: "1rem",
                                        fontWeight: "bold",
                                        fontFamily: "Arial, sans-serif",
                                        textTransform: 'capitalize'
                                    }}>  IMDb RATING </Typography>
                                    <Button sx={{ display: 'flex' }}>
                                        < StarIcon sx={{ color: 'yellow', alignContent: 'center', mt: '3px', fontSize: '40px' }} />
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography sx={{ color: '#B0A695' }}> <span style={{ fontSize: '20px', color: 'white' }} > {item.rating}</span>/10 </Typography>
                                            <Typography sx={{ color: '#B0A695' }}>  842k </Typography>
                                        </Box>
                                    </Button>
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        color: '#B0A695', fontSize: "1rem",
                                        fontWeight: "bold",
                                        fontFamily: "Arial, sans-serif",
                                        textTransform: 'capitalize'
                                    }}> YOUR RATING </Typography>
                                    <Button sx={{ display: 'flex' }}>
                                        <Box>
                                            < StarBorderIcon sx={{ color: 'blue', alignContent: 'center', mt: '3px', fontSize: '40px' }} />

                                        </Box>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography sx={{
                                                color: "blue", fontSize: "1.5rem",
                                                fontWeight: "bold",
                                                fontFamily: "Arial, sans-serif",
                                                textTransform: 'capitalize'
                                            }}>  Rate </Typography>

                                        </Box>

                                    </Button>
                                </Box>

                                {/* <Box> */}
                                {renderPopularity(item.popularity)}
                                {/* </Box> */}
                            </Stack>
                        )}
                    </Toolbar>
                    <Toolbar>
                        {singleList.map((item, index) =>
                            <Grid key={index} container spacing={2}>
                                <Grid item xs={6} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            onError={handleImageError}
                                            src={item.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '65px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 3, color: 'white', fontSize: '45px' }} />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <iframe src={`${item.trailer}?autoplay=1`}
                                        width="100%" height="100%"
                                        title="Trailer" frameBorder="0"
                                    >nfkn
                                    </iframe>
                                </Grid>
                                <Grid item xs={12} md={2} columnSpacing={{ xs: 6, sm: 2, md: 3 }}
                                    sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
                                >
                                    <Stack sx={{ width: '100%', height: '100%' }} direction="column" justifyContent="center" alignItems="center">
                                        <Button fullWidth sx={{
                                            height: '50%',
                                            bgcolor: 'gray', 
                                            mb: 1,
                                            ':hover': {
                                                bgcolor: '#FFB6B9'
                                            },

                                        }}>
                                            <Stack sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                                <VideoLibraryIcon sx={{ color: 'white', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                                                <Typography sx={{
                                                    color: "yellow", fontSize: "1.5rem",
                                                    fontWeight: "bold",
                                                    fontFamily: "Arial, sans-serif",
                                                    textTransform: 'capitalize',
                                                }}>
                                                    {item.popularity} VIDEOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                        <Button fullWidth sx={{
                                            height: '50%',
                                            bgcolor: 'gray',
                                            mb: 1, ':hover': {
                                                bgcolor: '#FFB6B9'
                                            },
                                        }}>
                                            <Stack sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                                <FilterIcon sx={{ color: 'white', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                                                <Typography sx={{
                                                    color: "yellow", fontSize: "1.5rem",
                                                    fontWeight: "bold",
                                                    fontFamily: "Arial, sans-serif",
                                                    textTransform: 'capitalize',
                                                    display: { xs: 6, md: 3 }

                                                }}>
                                                    {item.movie_length} PHOTOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                    </Stack>


                                </Grid>
                                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <Button fullWidth sx={{
                                            bgcolor: 'gray',
                                            ':hover': {
                                                bgcolor: '#FFB6B9'
                                            }
                                        }}>
                                            <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <VideoLibraryIcon sx={{ color: 'white', mt: '3px', fontSize: '30px' }} />
                                                <Typography sx={{ color: "yellow", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
                                                    {item.popularity} VIDEOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <Button fullWidth sx={{
                                            bgcolor: 'gray',
                                            ':hover': { bgcolor: '#FFB6B9' }
                                        }}>
                                            <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <FilterIcon sx={{ color: 'white', mt: '3px', fontSize: '30px' }} />
                                                <Typography sx={{
                                                    color: "yellow", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif",
                                                    opacity: 'revert',
                                                }}>
                                                    {item.movie_length} PHOTOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                    <Grid item xs={5} sm={5} md={5}
                                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <img
                                            onError={handleImageError}
                                            src={item.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                                        />

                                    </Grid>
                                    <Grid item xs={7} sm={7} md={7}
                                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <Box key={index}
                                            sx={{
                                                columnGap: 3,
                                                rowGap: 3,
                                                gridTemplateColumns: 'repeat(4, 1fr)',
                                                textAlign: 'left',
                                                mt: 3,


                                            }} >
                                            {item.gen.map((item: any, index) =>
                                                <Button variant="contained" key={index}
                                                    onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                                                    sx={{

                                                        textTransform: 'uppercase', textAlign: 'center', minHeight: '1rem', ':hover': {
                                                            bgcolor: 'A9A9A9', color: 'black',
                                                        },
                                                        border: "2px solid transparent", padding: '10px', backgroundColor: 'black',
                                                        color: 'white', borderRadius: '1rem', borderColor: 'pink',
                                                        margin: '7px',
                                                        // textOverflow: 'ellipsis',

                                                    }}>
                                                    {item.genre}
                                                </Button>

                                            )}

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Toolbar>
                    <Toolbar>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {singleList.map((item, index) =>
                                <Box key={index}>
                                    {item.gen.map((item: any, index) =>
                                        <Button variant="contained" key={index}
                                            onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                                            sx={{
                                                mx: '6px',
                                                textTransform: 'uppercase', textAlign: 'center', minHeight: '1rem', width: '10rem', ':hover': {
                                                    bgcolor: 'yellow', color: 'black',
                                                },
                                                background: "linear-gradient(180deg,grey,transparent) border-box",
                                                border: "2px solid transparent", paddingLeft: '1rem', paddingRight: '1rem', backgroundColor: 'black',
                                                color: 'white', borderRadius: '1rem', '--Grid-borderWidth': '1px', borderColor: 'pink',

                                            }}>
                                            {item.genre}
                                        </Button>
                                    )}
                                </Box>
                            )}

                        </Box>

                    </Toolbar>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box >
                            {singleList.map((item, index) =>
                                <List key={index} sx={{
                                    width: '100%', borderRadius: 2, border: '1px solid', borderColor: 'divider',
                                }}>
                                    <Typography sx={{
                                        color: 'white', textAlign: 'left', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                        ':hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}>
                                        {item.plot}
                                    </Typography>

                                    <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                                    <div id='caster'>
                                        <Cast />
                                    </div>

                                </List>

                            )}
                        </Box>

                        <Box sx={{ right: 0 }}>
                            {singleList.map((item, index) =>
                                <Grid sx={{ display: { xs: 'none', md: 'block' } }} key={index}>
                                    <Stack direction="column" spacing={0} >
                                        <Button sx={{
                                            marginLeft: 'auto', display: 'flex', bgcolor: 'yellow', ':hover': { bgcolor: 'green', color: 'white', borderColor: 'red' },
                                        }}>
                                            < AddIcon sx={{ color: 'black', alignContent: 'center', mt: '3px', fontSize: '30px' }} />
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography sx={{
                                                    color: "black", fontSize: "0.8rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', textAlign: 'right'
                                                }}>  Add to watch list </Typography>
                                                <Typography sx={{ color: 'black', fontSize: '0.7rem', textAlign: 'right' }}>Added by 1{item.popularity}k user </Typography>

                                            </Box>
                                        </Button>
                                        <Box sx={{ ml: 'auto' }}>
                                            <Stack direction={'row'}>
                                                <Typography sx={{ color: 'blue', textAlign: 'right' }}>
                                                    <span style={{
                                                        color: "blue", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                                    }}>2k
                                                    </span>
                                                    User reviews
                                                </Typography>

                                                <Typography sx={{ color: 'blue' }}>
                                                    <span style={{
                                                        color: "blue", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                                    }}>150 </span>
                                                    Critic reviews
                                                </Typography>
                                            </Stack>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    <span style={{
                                                        color: "white", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', backgroundColor: 'green'
                                                    }}>{randomScore}  </span>
                                                    Metascore
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Stack>
                                </Grid >
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div >
    );
}