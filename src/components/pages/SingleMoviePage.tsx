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
import { AppBar, Badge, Box, Button, Dialog, DialogContent, Divider, Grid, IconButton, LinearProgress, List, ListItem, Stack, Toolbar, Typography, makeStyles } from "@mui/material";
import { useAppSelector } from 'app/hooks';
import Cast from 'components/common/Cast';
import { selectSingleMovieListLoading } from 'features/singleMovie/singleMovieSlice';
import { movieItem, singleMovie } from 'models';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { default as StarOutlineIcon, default as StarRateIcon } from '@mui/icons-material/StarRate';
import { toast } from 'react-toastify';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export interface SingleMoviePageProps {
    singleList: singleMovie[]
    //fix from movieItem
}

export default function SingleMoviePage({
    singleList,

}: SingleMoviePageProps) {
    const bull = (<span style={{ display: 'inline-block', marginLeft: '6px', marginRight: '6px', transform: 'scale(0.8)', color: 'white' }} >     • </span>);

    const loading = useAppSelector(selectSingleMovieListLoading)

    const renderPopularity = (popularity: number) => {
        const num = 5000 - popularity
        if (num <= 100) {
            return (
                <Box>
                    <Typography sx={{
                        color: "#A9A9A9", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif",
                        textTransform: 'capitalize', whiteSpace: 'nowrap',
                    }}>POPULARITY </Typography>
                    <Button sx={{ display: 'flex' }}>
                        <Box>
                            <TrendingUpIcon sx={{
                                color: 'blue', alignContent: 'center', mt: '3px', fontSize: '40px',
                                alignItems: 'center'
                            }} />
                        </Box>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{
                                color: "white", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
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
    const handleAwardClick = () => {
        const casterElement = document.getElementById('award');
        if (casterElement) {
            casterElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleTechClick = () => {
        const casterElement = document.getElementById('tech');
        if (casterElement) {
            casterElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleProductClick = () => {
        const casterElement = document.getElementById('product');
        if (casterElement) {
            casterElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [selectedStudent, setSelectedStudent] = useState<singleMovie>();
    const [openDialog, setOpenDialog] = useState(false);
    const [starIndex, setStarIndex] = useState(0);


    const handleRatingClick = (movie: singleMovie) => {
        setSelectedStudent(movie)
        setOpenDialog(true);
    };
    const handleCloseRating = () => {
        setStarIndex(0)
        setOpenDialog(false);
    };
    const handleStarClick = (starIndex: any) => {
        setStarIndex(starIndex + 1); // Assuming 1-based indexing for stars

    };
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const handleStarHover = (hoveredIndex: number) => {
        setHoveredIndex(hoveredIndex);
    };

    const Star = ({ selected, hover, onClick, onMouseEnter, onMouseLeave }: { selected: boolean; hover: boolean; onClick: () => void; onMouseEnter: () => void; onMouseLeave: () => void }) => {
        return selected ? (
            <StarIcon sx={{ color: openDialog ? 'yellow' : 'white' }} onClick={onClick} />
        ) : (
            <StarOutlineIcon sx={{ color: hover ? 'yellow' : openDialog ? 'white' : 'white' }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        );
    };

    const starsArray = Array.from({ length: 10 }, (_, index) => (
        <Star
            key={index}
            selected={starIndex > index}
            hover={index <= hoveredIndex}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={() => handleStarHover(-1)}


        />
    ));
    const [isFavorite, setIsFavorite] = useState(false)


    // const handleWatchList = (movie: singleMovie) => {
    //     const storedDataString = localStorage.getItem('watchList');
    //     let storedData: { [key: string]: singleMovie } = {};
    //     if (storedDataString !== null) {
    //         storedData = JSON.parse(storedDataString);
    //     }
    //     if (storedData[movie.imdb_id]) {
    //         setIsFavorite(false)
    //         delete storedData[movie.imdb_id];
    //         localStorage.setItem('watchList', JSON.stringify(storedData));
    //         toast.success(`Removed ${movie.title} from watch list successfully`);

    //     } else {
    //         setIsFavorite(true)
    //         storedData[movie.imdb_id] = movie;
    //         localStorage.setItem('watchList', JSON.stringify(storedData));
    //         toast.success(`Added ${movie.title} to watch list successfully`);

    //     }
    // };

    const handleWatchList = (movie: singleMovie) => {
        const storedDataString = localStorage.getItem('watchList');
        let storedData: { [key: string]: singleMovie } = {};
        if (storedDataString !== null) {
            storedData = JSON.parse(storedDataString);
        }
        if (storedData[movie.imdb_id]) {
            setIsFavorite(false)
            delete storedData[movie.imdb_id];
            localStorage.setItem('watchList', JSON.stringify(storedData));
            toast.success(`Removed ${movie.title} from watch list successfully`);

        } else {
            setIsFavorite(true)
            storedData[movie.imdb_id] = movie;
            localStorage.setItem('watchList', JSON.stringify(storedData));
            toast.success(`Added ${movie.title} to watch list successfully`);

        }
    };


    const handleCheck = (movie: any) => {
        if (isFavorite) {
            return <FavoriteIcon sx={{ color: "blue" }} />
        } else {
            return <FavoriteBorderOutlinedIcon sx={{ color: 'red' }} />
        }

    }
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    const maxLength = 10;

    return (
        <div>
            <Box display="flex" sx={{
                width: {
                    base: "100%", // For extra small screens and up
                    sm: "100%",   // For small screens and up
                    md: "100%",   // For medium screens and up
                    lg: "111%",   // For large screens and up
                    xl: "100%",

                },
                ml: {
                    base: "0", // For extra small screens and up
                    sm: "0",   // For small screens and up
                    md: "0",   // For medium screens and up
                    lg: '-60px', // For large screens and up
                    xl: "0",
                }
            }}>
                <AppBar position="static" sx={{ bgcolor: '#4c3c3b' }}>
                    <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Stack direction={'row'}
                        // sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
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
                                onClick={handleAwardClick} color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': { textDecoration: 'underline', },
                                }}> Movie Award {bull}</Typography>
                            </IconButton>

                            <IconButton size="large" onClick={(handleTechClick)} color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}> Technical Spec {bull} </Typography>
                            </IconButton>

                            {/* <IconButton onClick={() => navigate('/')}
                                size="large" color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}>FAQ </Typography>
                            </IconButton> */}

                            <IconButton size="large" color="inherit"
                                onClick={(handleProductClick)}
                            >
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}> Product </Typography>
                            </IconButton>
                            {/* <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton> */}
                            {/* <Button sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                < CategoryIcon sx={{ color: 'white' }} />
                                <>
                                    <Typography onClick={() => handleChangePage()} sx={{
                                        alignItems: 'center', color: 'white', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                        ':hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}>
                                        All Topic
                                    </Typography>
                                </>
                            </Button> */}
                            {/* <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton> */}
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}>

                                <IconButton
                                    size="large" color="inherit"
                                    sx={{ ':hover': { textDecoration: 'underline', bgcolor: '#FFA1F5', }, }} >
                                    <Badge color="error">
                                        <ShareIcon sx={{
                                            ':hover': {
                                                textDecoration: 'underline', bgcolor: '#FFA1F5',
                                            },
                                        }} />
                                    </Badge>
                                </IconButton>
                            </a>

                        </Stack>
                        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Button sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                < CategoryIcon sx={{ color: 'white' }} />
                                <>
                                    <Typography sx={{
                                        alignItems: 'center', color: 'white', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
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
                        </Box> */}
                    </Toolbar>
                    <Toolbar>
                        <Box>
                            {singleList && singleList.length > 0 && singleList.map((item, index) =>
                                <Stack key={index} sx={{ textAlign: 'left' }}>
                                    <Stack alignItems="left">
                                        <Typography variant="h3" color="white">
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
                        {singleList && singleList.length > 0 && singleList.map((item, index) =>
                            <Stack key={index} direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex', textAlign: 'center' } }}>
                                <Box>
                                    <Typography sx={{
                                        color: '#B0A695', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                        , whiteSpace: 'nowrap',
                                    }}>  IMDb RATING </Typography>
                                    <Button sx={{ display: 'flex', alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                        < StarIcon sx={{ color: 'yellow', alignContent: 'center', mt: '3px', fontSize: '40px' }} />
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography sx={{ color: '#B0A695' }}> <span style={{ fontSize: '20px', color: 'white' }} > {item.rating}</span>/10 </Typography>
                                            <Typography sx={{ color: '#B0A695' }}>  842k </Typography>
                                        </Box>
                                    </Button>
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        color: '#B0A695', whiteSpace: 'nowrap', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                    }}> YOUR RATING </Typography>
                                    <Button onClick={() => handleRatingClick(item)} sx={{ display: 'flex' }}>
                                        <Box>
                                            < StarBorderIcon sx={{ color: 'blue', alignContent: 'center', mt: '3px', fontSize: '40px' }} />

                                        </Box>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography sx={{
                                                color: "blue", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                            }}>  Rate</Typography>

                                        </Box>

                                    </Button>

                                    <Dialog open={openDialog}
                                    >
                                        <Button onClick={() => handleCloseRating()} sx={{
                                            justifyContent: 'center', right: 0, position: 'absolute', bgcolor: 'white', color: 'black',
                                            textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto',
                                            height: '50px', textTransform: 'none', borderRadius: '100%',
                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                            // textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                            ':hover': {
                                                bgcolor: 'yellow',
                                                color: 'blue',
                                            },
                                            // transform: 'translate(1200%, 290%)'
                                        }}>X
                                        </Button>
                                        <Stack direction={'column'} sx={{
                                            bgcolor: 'black', color: 'white'
                                            , border: '1px solid white',
                                            //  transform: 'translate(70%, 100%)',
                                            width: '99%'
                                        }}>
                                            <Typography variant='h3' sx={{ textAlign: 'center', color: 'yellow' }}>
                                                Rate {starIndex} <StarIcon > </StarIcon> of
                                            </Typography>
                                            <DialogContent sx={{ textAlign: 'center', mx: '24px' }}>
                                                <Typography variant='h4' sx={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>
                                                    {selectedStudent?.title}
                                                </Typography>
                                                <Stack direction={'row'} spacing={1}
                                                    sx={{
                                                        flexWrap: 'wrap',
                                                        justifyContent: 'center'
                                                    }}>
                                                    {starsArray.map((star, index) => (
                                                        <Stack key={index} sx={{
                                                            flexBasis: `${100 / 6}%`,
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                        }}>
                                                            {star}
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            </DialogContent>
                                            <Button fullWidth sx={{ color: 'white', backgroundColor: starIndex > 0 ? 'red' : 'gray' }} onClick={() => handleCloseRating()}>
                                                RATE
                                            </Button>
                                        </Stack>
                                    </Dialog>
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
                                        <img onError={handleImageError} src={item.image_url} alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '65px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 3, color: 'white', fontSize: '45px' }} />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    {item.trailer ? (
                                        <iframe
                                            src={`${item.trailer}?autoplay=1`}
                                            width="100%" height="100%"

                                            title="Trailer" frameBorder="0"
                                        ></iframe>
                                    ) : (
                                        <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: "100%", minHeight: "200px" }}>Không có trailer được cung cấp</Stack>
                                    )}
                                </Grid>
                                <Grid item xs={12} md={2} columnSpacing={{ xs: 6, sm: 2, md: 3 }}
                                    sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
                                >
                                    <Stack sx={{ width: '100%', height: '100%' }} direction="column" justifyContent="center" alignItems="center">
                                        <Button fullWidth sx={{
                                            height: '50%',
                                            bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.2))',
                                            mb: 1,
                                            ':hover': {
                                                bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.3))',
                                            },

                                        }}>
                                            <Stack sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                                <VideoLibraryIcon sx={{ color: 'white', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                                                <Typography sx={{
                                                    color: "yellow", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                                }}>
                                                    {item.popularity} VIDEOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                        <Button fullWidth sx={{
                                            height: '50%',
                                            bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.2))',
                                            mb: 1, ':hover': {
                                                bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.3))',
                                            },
                                        }}>
                                            <Stack sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                                <FilterIcon sx={{ color: 'white', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                                                <Typography sx={{
                                                    color: "yellow", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', display: { xs: 6, md: 3 }
                                                }}>
                                                    {item.movie_length} PHOTOS
                                                </Typography>
                                            </Stack>
                                        </Button>
                                    </Stack>


                                </Grid>
                                <Stack direction={'row'} spacing={2} sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', mt: '0px' }}>
                                    <Button fullWidth sx={{
                                        bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.2))',

                                        ':hover': {
                                            bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.3))',
                                        }
                                    }}>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <VideoLibraryIcon sx={{ color: 'white', mt: '3px', fontSize: '30px' }} />
                                            <Typography sx={{ color: "yellow", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
                                                {item.popularity} VIDEOS
                                            </Typography>
                                        </Stack>
                                    </Button>

                                    <Button fullWidth sx={{
                                        bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.2))',

                                        ':hover': {
                                            bgcolor: 'rgba(var(--ipt-on-baseAlt-rgb, 255, 255, 255), var(--ipt-baseAlt-hover-opacity, 0.3))',
                                        }
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
                                </Stack>
                                <Stack direction={'row'} sx={{ width: '100%', mt: '10px', display: { xs: 'flex', md: 'none' } }}>
                                    {/* <Grid container spacing={2} sx={{ justifyContent: 'center', mt: '10px', display: { xs: 'flex', md: 'none' } }}>
                                    <Grid item xs={5} sm={5} md={5}
                                    > */}
                                    <img
                                        onError={handleImageError}
                                        src={item.image_url}
                                        alt="movie-img"
                                        style={{
                                            minWidth: 'auto', height: '100%', objectFit: 'cover', backgroundColor: 'black',
                                            maxHeight: '200px'
                                        }}
                                    />
                                    {/* </Grid>
                                    <Grid item xs={7} sm={7} md={7}
                                    > */}
                                    <Stack direction={'column'}>
                                        <Box key={index}
                                            sx={{
                                                columnGap: 3, rowGap: 3, gridTemplateColumns: 'repeat(4, 1fr)',
                                                textAlign: 'left',
                                            }} >
                                            {item.gen && item.gen.length > 0 && item.gen.map((item: any, index) =>
                                                <Button key={index}
                                                    onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                                                    sx={{
                                                        maxWidth: '50%',
                                                        textTransform: 'uppercase', textAlign: 'center', minHeight: '0.5rem', ':hover': {
                                                            bgcolor: 'A9A9A9', color: 'black',
                                                        },
                                                        border: "1px solid transparent", padding: '10px', backgroundColor: 'black',
                                                        color: 'white', borderColor: 'pink',
                                                    }}>
                                                    <Typography variant='h6'>
                                                        {item.genre}
                                                    </Typography>
                                                </Button>
                                            )}
                                        </Box>
                                        <Stack>
                                            <Typography>
                                                {item.plot.split(' ').slice(0, 20).join(' ')}
                                                <span>
                                                    {item.plot.split('').length > maxLength}
                                                    <span style={{ color: 'blue', cursor: 'pointer' }}>... Xem thêm </span>
                                                </span>
                                            </Typography>


                                        </Stack>


                                    </Stack>

                                    {/* </Grid>
                                </Grid> */}
                                </Stack>

                                <Stack direction={'row'} spacing={2} sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', mt: '0px' }}>
                                    <Button onClick={handleClick} fullWidth sx={{
                                        bgcolor: 'transparent'
                                        , alignItems: "center", justifyContent: 'flex-start'
                                    }}>
                                        <Stack direction={'column'}>
                                            <Stack direction={'row'} sx={{ marginLeft: '10px' }}>
                                                {isExpanded ? <KeyboardArrowUpIcon sx={{ color: 'white' }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} />}
                                                <Typography sx={{ color: 'white' }}>Top credit</Typography>
                                            </Stack>
                                            {isExpanded && <Cast />}

                                        </Stack>


                                    </Button>
                                </Stack>

                                <Grid item xs={12} sm={12} md={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <Box>
                                        <Stack direction="column"  >
                                            <Button fullWidth sx={{
                                                m: 'auto', display: 'flex', bgcolor: 'yellow', ':hover': { bgcolor: 'green', color: 'white', borderColor: 'red' },
                                            }} onClick={() => handleWatchList(item)}>
                                                {handleCheck(item.imdb_id)}
                                                <Box sx={{ textAlign: 'center' }} >
                                                    <Typography sx={{ color: 'black', fontSize: '0.7rem', textAlign: 'right' }}>Add
                                                        {/* by 1{item.popularity}k umser */}
                                                        to watch list
                                                    </Typography>
                                                </Box>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>

                                {/* <Stack direction={'row'} sx={{ display: { xs: 'flex', md: 'none' }, mt: 5, m: 'auto', bgcolor: 'red', width: '100%' }}> */}
                                {/* <Grid container spacing={2} > */}
                                <Grid item xs={12} sm={12} md={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <Stack direction={'row'} >
                                        <Grid item xs={4} sm={4} md={4}>
                                            <Typography sx={{ color: 'blue', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                                <span style={{
                                                    color: "blue", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                                }}>2k
                                                </span> <br />
                                                User reviews
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4}>
                                            <Typography sx={{ color: 'blue', whiteSpace: 'nowrap', textAlign: 'center' }}>
                                                <span style={{
                                                    color: "blue", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize'
                                                }}>150 </span> <br />
                                                Critic reviews
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4} sm={4} md={4}>
                                            <Typography>
                                                <span style={{
                                                    textAlign: 'center',
                                                    color: "white", fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', backgroundColor: 'green'
                                                }}>{randomScore}  </span> <br />
                                                Metascore
                                            </Typography>
                                        </Grid>

                                    </Stack>
                                </Grid>

                            </Grid>
                        )}
                    </Toolbar>
                    <Toolbar>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {singleList && singleList.length > 0 && singleList.map((item, index) =>
                                <Box key={index}>
                                    {item && item.gen && item.gen.length > 0 && item.gen.map((item: any, index) =>
                                        <Button variant="contained" key={index}
                                            onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                                            sx={{
                                                mx: '6px', mt: '-20px',
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
                    <Toolbar sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box >
                            {singleList && singleList.length > 0 && singleList.map((item, index) =>
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
                                    <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                                    <Typography sx={{
                                        color: 'white', fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', textAlign: 'left'
                                    }}>IMBb<span style={{ color: '#AED2FF' }}>Pro</span>
                                        <IconButton onClick={() => navigate('/IMDbPro')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            <span style={{ color: 'blue', fontWeight: 'normal' }}> See production info at IMDbPro</span>
                                        </IconButton>
                                    </Typography>
                                </List>

                            )}
                        </Box>

                        <Box sx={{ right: 0, display: { xs: 'none', md: 'block' } }}>
                            {singleList && singleList.length > 0 && singleList.map((item, index) =>
                                <Grid
                                    //  sx={{ display: { xs: 'none', md: 'block' } }} 
                                    key={index}>
                                    <Stack direction="column" spacing={0} alignItems={'flex-start'} >
                                        <Button sx={{
                                            marginLeft: 'auto', display: 'flex', bgcolor: 'yellow', ':hover': { bgcolor: 'green', color: 'white', borderColor: 'red' },
                                        }} onClick={() => handleWatchList(item)}>

                                            {handleCheck(item.imdb_id)}
                                            <Box sx={{ textAlign: 'center' }} >
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
            </Box >
        </div >
    );
}