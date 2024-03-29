import { KeyboardArrowRight, Movie } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import { default as StarOutlineIcon, default as StarRateIcon } from '@mui/icons-material/StarRate';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewListIcon from '@mui/icons-material/ViewList';
import { AppBar, Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, Divider, Fade, FormControl, FormControlLabel, Grid, IconButton, ListItemText, Menu, MenuItem, Popper, Radio, Stack, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { movieItem } from 'models';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export interface Top10PageProps {
    popurarityItemList: movieItem[];
}

export default function PopularPage({
    popurarityItemList
}: Top10PageProps) {

    let navigate = useNavigate()
    const [numberGen, setNumberGen] = useState(0);
    const [numberKey, setNumberKey] = useState(0);
    const [genreCount, setGenreCount] = useState<Record<string, number>>({});
    const [keyCount, setKeyCount] = useState<Record<string, number>>({});
    const [currentView, setCurrentView] = useState('detail'); // Default view is 'detail'

    const switchView = (view: any) => {
        setCurrentView(view);
    };

    const anchorRef = useRef(null);
    const [starIndex, setStarIndex] = useState(0);
    const [infoIndex, setInfoIndex] = useState(0);

    const [openDialog, setOpenDialog] = useState(false);
    const [openInfoDialog, setOpenInfoDialog] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<movieItem>();
    const handleRatingClick = (movie: movieItem) => {
        setSelectedStudent(movie)
        setOpenDialog(true);
    };
    const handleInfoClick = (movie: movieItem) => {
        setSelectedStudent(movie)
        setOpenInfoDialog(true);
    };

    const handleCloseRating = () => {
        setStarIndex(0)
        setOpenDialog(false);
    };
    const handleCloseInfo = () => {
        setInfoIndex(0)
        setOpenInfoDialog(false);
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
            key={index} selected={starIndex > index} hover={index <= hoveredIndex}
            onClick={() => handleStarClick(index)} onMouseEnter={() => handleStarHover(index)} onMouseLeave={() => handleStarHover(-1)}

        />
    ));
    const handleImageError = (e: any) => {
        const imgElement = e.currentTarget as HTMLImageElement;
        imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
    };

    const renderMovieItem = (movie: any, movieIndex: number, currentView: any, sortOrder: any) => {
        // Implement rendering logic based on the currentView (detail, grid, compact)
        if (movieIndex >= 50) {
            return null;
        }
        switch (currentView) {
            case 'detail':
                return (
                    // Render detail view
                    <Box key={movieIndex} sx={{ bgcolor: 'black', width: '100%' }}>
                        <Divider sx={{
                            width: '100%', borderRadius: 2, border: '2px solid gray', borderColor: 'divider', backgroundColor: 'background.paper',
                        }} />
                        <AppBar position="static" sx={{ bgcolor: 'black' }}>
                            <Toolbar>
                                <div key={movie.imdb_id} style={{ display: 'flex' }}>
                                    <div style={{ height: '100%' }}>
                                        {/* Left side - Image */}
                                        <img onError={handleImageError}
                                            src={movie.image_url} alt={movie.title} style={{ marginRight: '20px', maxWidth: '100px', marginTop: '10px', }}
                                            onClick={() => navigate(`/movie/id/${movie.imdb_id}`)}
                                        />
                                    </div>

                                    {/* Right side - Details */}

                                    <Stack sx={{ color: 'white' }} alignItems={'flex-start'}>
                                        <Typography variant='h6' sx={{ textAlign: 'center', color: 'gray', alignItems: 'center', }}>{`${movieIndex + 1}`}(-)</Typography>

                                        <Typography variant='h5'
                                            sx={{
                                                fontSize: "2rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                            }}
                                        >{`${movie.title}`}
                                        </Typography>

                                        <div style={{ display: 'flex' }}>
                                            <h4 style={{ marginRight: '20px' }}>Year: {movie.year}</h4>
                                            <h4 style={{ marginRight: '20px' }}>Length: {movie.movie_length}min</h4>
                                            <h4>Rating: {movie.content_rating}</h4>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {/* <span role="img" aria-label="Stars Icon">⭐</span> */}
                                                <StarRateIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ marginLeft: '5px' }}>{movie.rating}</Typography>
                                            </Box>
                                            <div>
                                                <Button sx={{ marginLeft: '25px' }} onClick={() => handleRatingClick(movie)}>
                                                    <StarRateIcon sx={{ color: 'blue' }} />
                                                    <Typography style={{ color: 'blue' }} ref={anchorRef}
                                                    >Rate
                                                    </Typography>

                                                </Button>

                                                <Dialog
                                                    open={openDialog}
                                                // anchorEl={anchorEl}
                                                // anchorEl={anchorRef.current}
                                                // transition
                                                // placement="bottom-start"

                                                >
                                                    <Button onClick={() => handleCloseRating()} sx={{
                                                        justifyContent: 'center', right: 0,
                                                        position: 'absolute', bgcolor: 'white', color: 'black',
                                                        textAlign: 'center', border: 'none', fontWeight: 'bold',
                                                        fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto',
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
                                                            <Stack direction="row" spacing={2}>
                                                                {starsArray}
                                                            </Stack>
                                                        </DialogContent>
                                                        <Button fullWidth sx={{ color: 'white', backgroundColor: starIndex > 0 ? 'red' : 'gray' }} onClick={() => handleCloseRating()}>
                                                            RATE
                                                        </Button>
                                                    </Stack>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </Stack>

                                </div>


                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <InfoIcon onClick={() => handleInfoClick(movie)} ref={anchorRef} sx={{ display: { xs: 'none', md: 'flex' } }} />
                                    <Popper open={openInfoDialog} anchorEl={anchorRef.current}
                                        transition
                                        sx={{
                                            left: '50%', // đặt Popper ở giữa theo chiều ngang
                                            top: '50%', // đặt Popper ở giữa theo chiều dọc
                                            transform: 'translate(20%, 1%)', // dịch chuyển Popper để nó chính xác ở giữa
                                        }}
                                    >
                                        <Button onClick={() => handleCloseInfo()} sx={{
                                            bgcolor: 'white', color: 'black', textAlign: 'center',
                                            top: 0,
                                            right: 0, border: 'none', fontWeight: 'bold', fontSize: '36px',
                                            fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%'
                                            , overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                            ':hover': {
                                                bgcolor: 'yellow',
                                                color: 'blue',
                                            },
                                            transform: 'translate(1250%, 10%)'

                                        }}>X</Button>
                                        <Stack direction={'column'} sx={{
                                            width: '900px', // Adjust the width as needed
                                            height: '500px', // Adjust the height as needed
                                            bgcolor: 'black !important', color: 'white', border: '0px solid black',
                                            // transform: 'translate(43%, 30%)', 
                                            backgroundColor: 'black'
                                        }}>
                                            <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
                                                <Toolbar>
                                                    <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                                        <img
                                                            src={selectedStudent?.banner}
                                                            style={{ height: "280px" }}

                                                        />
                                                        <Box marginLeft={'30px'}>
                                                            <Typography variant="h6" color="white">
                                                                {selectedStudent?.title}
                                                            </Typography>
                                                            <Typography variant="h6" color="white">
                                                                {selectedStudent?.year} {bull}
                                                                {selectedStudent?.movie_length}min {bull}
                                                                {selectedStudent?.content_rating}
                                                            </Typography>
                                                            <Stack direction={'row'}>
                                                                {selectedStudent?.gen.map((item: any, index) =>
                                                                    <Typography key={index}>
                                                                        {item.genre} {bull}
                                                                    </Typography>

                                                                )}
                                                            </Stack>

                                                            <Typography>
                                                                <Stack direction={'row'} alignItems={'center'}>
                                                                    <Typography style={{ marginLeft: '5px' }}><span role="img" aria-label="Stars Icon">⭐</span>{selectedStudent?.rating}/10</Typography>
                                                                    <Button sx={{ marginLeft: '5px' }} onClick={() => selectedStudent && handleRatingClick(selectedStudent)}>
                                                                        <StarRateIcon sx={{ color: 'blue' }} />
                                                                        <Typography style={{ color: 'blue' }} ref={anchorRef}>Rate</Typography>

                                                                    </Button>
                                                                </Stack>
                                                            </Typography>
                                                        </Box>

                                                    </Stack>


                                                    <Box sx={{ flexGrow: 1 }} />
                                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>  </Box>
                                                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                                                    </Box>
                                                </Toolbar>

                                            </AppBar>

                                            <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                                <Toolbar>
                                                    <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto' }}>
                                                        <Typography>
                                                            {selectedStudent?.description}
                                                        </Typography>
                                                    </Stack>
                                                </Toolbar>
                                            </Stack>
                                            <Stack direction={'row'}>
                                                <Toolbar sx={{ width: '100%' }}>

                                                    <Button fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%' }}>
                                                        < AddIcon sx={{ color: 'blue' }} />
                                                        <>
                                                            <span style={{ marginRight: '1rem' }}></span>
                                                            <Typography sx={{
                                                                display: 'flex', alignItems: 'center', color: '#7FC7D9',
                                                                border: 'none',
                                                                fontWeight: 'bold',

                                                            }}>
                                                                Watch List
                                                            </Typography>

                                                        </>
                                                    </Button>
                                                    <Box sx={{ margin: '0 10px' }} /> {/* Adjust the margin value as needed */}
                                                    <Button
                                                        onClick={() => navigate(`/movie/id/${selectedStudent?.imdb_id}`)}
                                                        fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%' }}>
                                                        < PlayArrowIcon sx={{ color: 'blue' }} />
                                                        <>
                                                            <span style={{ marginRight: '1rem' }}></span>
                                                            <Typography sx={{
                                                                display: 'flex', alignItems: 'center', color: 'white',
                                                                border: 'none',
                                                                fontWeight: 'bold',

                                                            }}>
                                                                Trailer
                                                            </Typography>
                                                        </>
                                                    </Button>
                                                </Toolbar>
                                            </Stack>
                                        </Stack>
                                    </Popper>
                                </Box>

                            </Toolbar>
                            <Stack alignContent={'flex-start'} alignItems={'flex-start'}>
                                <Toolbar>
                                    <Stack direction={'column'} sx={{ marginTop: '10px' }} >
                                        <Typography variant='h5'
                                            sx={{
                                                fontSize: "1rem",
                                                // fontWeight: "bold",
                                                fontFamily: "Arial, sans-serif",
                                                textTransform: 'capitalize',
                                                textAlign: 'left',
                                                marginTop: '10px'
                                            }}
                                        >
                                            {/* {`${movie.plot}`} */}
                                            {movie.plot}
                                        </Typography>
                                        <Stack>
                                            {/* <Stack direction={'row'} sx={{ marginTop: '10px', alignContent: 'flex-start', justifyContent: 'flex-start' }}>
                                                <div>
                                                    <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}> Director: <span style={{ color: 'red' }}>Emerald Fennell</span></Typography>
                                                    <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}> Stars:
                                                        <span style={{ marginLeft: '17px', color: 'blue' }}>Barry Keoghan</span>
                                                        <span style={{ marginLeft: '17px', color: 'blue' }}>Jacob Elordi</span>
                                                        <span style={{ marginLeft: '17px', color: 'blue' }}>Emma Watson</span>
                                                    </Typography>
                                                </div>
                                            </Stack> */}
                                            <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                                                <Stack direction={'row'} spacing={2} sx={{ fontWeight: 'bold' }}>
                                                    {/* {`${movie.gen.map((item: movieItem) =>
                                                        <Typography>{item.gen}
                                                        </Typography>
                                                    )}`} */}
                                                    Genre:
                                                    {movie.gen.map((item: any) => (
                                                        <Typography sx={{ color: 'blue', fontWeight: 'none', marginLeft: '5px', flexWrap: 'nowrap' }}>{item.genre}
                                                        </Typography>
                                                    ))}
                                                </Stack>

                                                <Typography sx={{ fontWeight: 'bold' }}> Votes: <span>103,682</span></Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Toolbar>

                            </Stack>

                        </AppBar>

                    </Box >
                );

            case 'grid':
                return (
                    <Grid item key={movieIndex} xs={6} sm={6} md={3} sx={{
                        display: { xs: 'none', md: 'flex' },
                        mt: 2, ml: { xs: '190px', sm: '190px', md: 'auto' }
                        , width: { xd: '400px', sm: '400px', md: 'auto' }
                    }}
                        spacing={{ xs: 2, sm: 4 }}
                    >
                        <div style={{
                            backgroundColor: 'white', height: '500px', objectFit: 'cover',
                            border: '8px solid black', width: '100%',

                        }}>

                            <Typography variant='h6' sx={{ color: 'black', textAlign: 'left' }}>{`${movieIndex + 1}`} <span>({movie.content_rating})</span></Typography>
                            <img
                                src={movie.image_url}
                                alt={movie.title}
                                style={{
                                    width: '100%', height: '200px', objectFit: 'cover',
                                }}
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    e.currentTarget.src = 'https://etalkindia.com/talk/attachment.php?attachmentid=472&d=1305371963'; // Replace with your fallback image path
                                    e.currentTarget.alt = 'Fail to load image'; // Replace with fallback title
                                }}
                            />
                            {/* <Stack direction={'column'} position={'static'} sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', alignItems: 'flex-start' }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <StarRateIcon sx={{ color: 'yellow' }} />
                                    <Typography style={{ marginLeft: '5px' }}>{movie.rating}
                                        <span style={{ color: 'gray', marginLeft: '10px' }}>({movie.popularity}k)</span>
                                    </Typography>
                                </Box>

                                <Button onClick={() => handleRatingClick(movie)} sx={{ alignItems: "flex-start", justifyContent: 'flex-start' }}>
                                    <StarRateIcon sx={{ color: 'blue' }} />
                                    <Typography style={{ color: 'blue' }} ref={anchorRef}>
                                        Rate
                                    </Typography>
                                </Button>
                            </Stack> */}
                            <Stack direction={'column'} sx={{ m: '10px' }}>
                                <Stack direction={'row'} >
                                    <StarRateIcon sx={{ color: 'yellow' }} />
                                    <Typography style={{ marginLeft: '5px' }}>{movie.rating}
                                        <span style={{ color: 'gray', marginLeft: '10px' }}>({movie.popularity}k)</span>
                                    </Typography>
                                </Stack>
                                <Stack onClick={() => handleRatingClick(movie)} direction={'row'} sx={{ marginTop: '5px' }}>
                                    <StarRateIcon sx={{ color: 'blue' }} />
                                    <Typography style={{ color: 'blue' }} ref={anchorRef}>
                                        Rate
                                    </Typography>
                                </Stack>

                            </Stack>
                            <div>
                                <Dialog
                                    open={openDialog}
                                // anchorEl={anchorEl}
                                // anchorEl={anchorRef.current}
                                // transition
                                // placement="bottom-start"
                                >
                                    <Button onClick={() => handleCloseRating()} sx={{
                                        position: 'absolute', bgcolor: 'red', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                        overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                        whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                        textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                        ':hover': {
                                            bgcolor: 'yellow',
                                            color: 'blue',
                                        },
                                        // transform: 'translate(1650%, 290%)'
                                    }}>X
                                    </Button>
                                    <Stack direction={'column'} sx={{
                                        bgcolor: 'black', color: 'white'
                                        , border: '1px solid white',
                                        //  transform: 'translate(125%, 100%)',
                                        width: '99%'
                                    }}>
                                        <Typography variant='h3' sx={{ textAlign: 'center', color: 'yellow' }}>
                                            Rate {starIndex} <StarIcon > </StarIcon> of
                                        </Typography>
                                        <DialogContent sx={{ textAlign: 'center', mx: '24px' }}>
                                            <Typography variant='h4' sx={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>
                                                {selectedStudent?.title}
                                            </Typography>
                                            <Stack direction="row" spacing={2} sx={{ width: '90%' }}>
                                                {starsArray}
                                            </Stack>
                                        </DialogContent>
                                        <Button fullWidth sx={{ color: 'white', backgroundColor: starIndex > 0 ? 'red' : 'gray' }} onClick={() => handleCloseRating()}>
                                            RATE
                                        </Button>
                                    </Stack>
                                </Dialog>
                            </div>
                            <Typography variant='h5'
                                sx={{
                                    color: 'black', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, textAlign: 'left', height: '2.4em', margin: '10px',
                                }}>{movie.title}
                            </Typography>
                            <Stack direction={'row'} sx={{ marginTop: '20px', marginLeft: '10px' }} alignContent={'left'} justifyContent={'left'}>
                                <Typography variant='subtitle1'
                                    sx={{
                                        color: '#29ADB2', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.4'
                                    }}>{movie.year}
                                </Typography>
                                <Box sx={{ margin: '0 10px' }} /> {/* Adjust the margin value as needed */}

                                <Typography variant='subtitle1'
                                    sx={{
                                        color: '#29ADB2', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.4'
                                    }}>{movie.movie_length} min
                                </Typography>
                            </Stack>
                            <Button onClick={() => handleInfoClick(movie)} ref={anchorRef}
                                sx={{
                                    color: 'blue', bgcolor: 'rgb(236,237,236)', textAlign: 'center', width: '90%', marginTop: '10px',
                                    fontWeight: 'bold'
                                }}>Detail</Button>
                            <Dialog
                                open={openInfoDialog} >
                                <Button onClick={() => handleCloseInfo()} sx={{
                                    bgcolor: 'white', color: 'black', textAlign: 'center',
                                    right: 0, border: 'none', fontWeight: 'bold', fontSize: '36px',
                                    fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%'
                                    , overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                    textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                    ':hover': {
                                        bgcolor: 'yellow', color: 'blue',
                                    },
                                    // transform: 'translate(610%, 150%)'

                                }}>X</Button>
                                <Stack direction={'column'} sx={{
                                    width: '100%', // Adjust the width as needed
                                    height: '500px', // Adjust the height as needed
                                    bgcolor: 'black !important', color: 'white', border: '0px solid black',
                                    // transform: 'translate(43%, 30%)',
                                    backgroundColor: 'black'
                                }}>
                                    <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
                                        <Toolbar>
                                            <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                                <img
                                                    src={selectedStudent?.banner}
                                                    style={{ height: "280px" }}

                                                />
                                                <Box marginLeft={'30px'}>
                                                    <Typography variant="h6" color="white">
                                                        {selectedStudent?.title}
                                                    </Typography>
                                                    <Typography variant="h6" color="white">
                                                        {selectedStudent?.year} {bull}
                                                        {selectedStudent?.movie_length}min {bull}
                                                        {selectedStudent?.content_rating}
                                                    </Typography>
                                                    <Stack direction={'row'}>
                                                        {selectedStudent?.gen.map((item: any, index) =>
                                                            <Typography key={index}>
                                                                {item.genre} {bull}
                                                            </Typography>

                                                        )}
                                                    </Stack>

                                                    <Typography>
                                                        <Stack direction={'row'} alignItems={'center'}>
                                                            <Typography style={{ marginLeft: '5px' }}><span role="img" aria-label="Stars Icon">⭐</span>{selectedStudent?.rating}/10</Typography>
                                                            <Button sx={{ marginLeft: '5px' }} onClick={() => selectedStudent && handleRatingClick(selectedStudent)}>
                                                                <StarRateIcon sx={{ color: 'blue' }} />
                                                                <Typography style={{ color: 'blue' }} ref={anchorRef}>Rate</Typography>
                                                            </Button>
                                                        </Stack>
                                                    </Typography>
                                                </Box>
                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
                                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
                                        </Toolbar>

                                    </AppBar>

                                    <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                        <Toolbar>
                                            <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto' }}>
                                                <Typography>
                                                    {selectedStudent?.description}
                                                </Typography>
                                            </Stack>
                                        </Toolbar>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Toolbar sx={{ width: '100%' }}>

                                            <Button fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%' }}>
                                                < AddIcon sx={{ color: 'blue' }} />
                                                <>
                                                    <span style={{ marginRight: '1rem' }}></span>
                                                    <Typography sx={{
                                                        display: 'flex', alignItems: 'center', color: '#7FC7D9',
                                                        border: 'none',
                                                        fontWeight: 'bold',

                                                    }}>
                                                        Watch List
                                                    </Typography>

                                                </>
                                            </Button>
                                            <Box sx={{ margin: '0 10px' }} /> {/* Adjust the margin value as needed */}
                                            <Button fullWidth sx={{
                                                fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px'
                                            }} onClick={() => navigate(`/movie/id/${selectedStudent?.imdb_id}`)}>
                                                < PlayArrowIcon sx={{ color: 'blue' }} />
                                                <>
                                                    <span style={{ marginRight: '1rem' }}></span>
                                                    <Typography sx={{
                                                        display: 'flex', alignItems: 'center', color: 'white',
                                                        border: 'none',
                                                        fontWeight: 'bold',

                                                    }}>
                                                        Trailer
                                                    </Typography>
                                                </>
                                            </Button>
                                        </Toolbar>
                                    </Stack>
                                </Stack>
                            </Dialog>

                        </div>

                    </Grid>
                );
            case 'compact':
                return (
                    <Box key={movieIndex} sx={{ flexGrow: 1, bgcolor: 'black', width: '100%' }}>
                        <Divider sx={{
                            width: '100%',
                            borderRadius: 2,
                            border: '2px solid gray',
                            borderColor: 'divider',
                            backgroundColor: 'background.paper',
                        }} />

                        <AppBar position="static" sx={{ bgcolor: 'black' }}>
                            <Toolbar>
                                <div key={movie.imdb_id} style={{ display: 'flex', alignItems: 'center' }}>

                                    {/* Left side - Image */}
                                    <img onError={handleImageError}
                                        src={movie.image_url} alt={movie.title} style={{
                                            marginRight: '20px', maxWidth: '100px', marginTop: '10px'
                                            , height: "100%"
                                        }} />

                                    {/* Right side - Details */}
                                    <Stack sx={{ color: 'white' }} alignItems={'flex-start'}>
                                        <Typography variant='h6'>{`${movieIndex + 1}`}</Typography>
                                        <Typography variant='h5'
                                            sx={{
                                                fontSize: "2rem",
                                                fontWeight: "bold",
                                                fontFamily: "Arial, sans-serif",
                                                textTransform: 'capitalize',
                                            }}
                                        >{`${movie.title}`}</Typography>

                                        <div style={{ display: 'flex' }}>
                                            <h4 style={{ marginRight: '20px' }}>Year: {movie.year}</h4>
                                            <h4 style={{ marginRight: '20px' }}>Length: {movie.movie_length}min</h4>
                                            <h4>Rating: {movie.content_rating}</h4>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {/* <span role="img" aria-label="Stars Icon">⭐</span> */}
                                                <StarRateIcon sx={{ color: 'yellow' }} />
                                                <Typography style={{ marginLeft: '5px' }}>{movie.rating}</Typography>
                                            </Box>
                                            <div>
                                                <Button sx={{ marginLeft: '25px' }} onClick={() => handleRatingClick(movie)}>
                                                    <StarRateIcon sx={{ color: 'blue' }} />
                                                    <Typography style={{ color: 'blue' }} ref={anchorRef}
                                                    >Rate</Typography>

                                                </Button>

                                                <Dialog
                                                    open={openDialog}
                                                // anchorEl={anchorEl}
                                                // anchorEl={anchorRef.current}
                                                // transition
                                                // placement="bottom-start"

                                                >
                                                    <Button onClick={() => handleCloseRating()} sx={{
                                                        position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                        overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                        whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                        textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                        ':hover': {
                                                            bgcolor: 'yellow',
                                                            color: 'blue',
                                                        },
                                                        // transform: 'translate(1650%, 290%)'
                                                    }}>X
                                                    </Button>
                                                    <Stack direction={'column'} sx={{
                                                        bgcolor: 'black', color: 'white'
                                                        , border: '1px solid white',
                                                        //  transform: 'translate(125%, 100%)',
                                                        width: '99%'
                                                    }}>
                                                        <Typography variant='h3' sx={{ textAlign: 'center', color: 'yellow' }}>
                                                            Rate {starIndex} <StarIcon > </StarIcon> of
                                                        </Typography>
                                                        <DialogContent sx={{ textAlign: 'center', mx: '24px' }}>
                                                            <Typography variant='h4' sx={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>
                                                                {selectedStudent?.title}
                                                            </Typography>
                                                            <Stack direction="row" spacing={2}>
                                                                {starsArray}
                                                            </Stack>
                                                        </DialogContent>
                                                        <Button fullWidth sx={{ color: 'white', backgroundColor: starIndex > 0 ? 'red' : 'gray' }} onClick={() => handleCloseRating()}>
                                                            RATE
                                                        </Button>
                                                    </Stack>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </Stack>

                                </div>

                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <InfoIcon onClick={() => handleInfoClick(movie)} ref={anchorRef} sx={{ display: { xs: 'none', md: 'flex' } }} />
                                    <Popper
                                        open={openInfoDialog}
                                    // anchorEl={anchorRef.current} transition 
                                    >
                                        <Button onClick={() => handleCloseInfo()} sx={{
                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center',
                                            right: 0, border: 'none', fontWeight: 'bold', fontSize: '36px',
                                            fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%'
                                            , overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                            ':hover': {
                                                bgcolor: 'yellow',
                                                color: 'blue',
                                            },
                                            transform: 'translate(450%, 70%)'

                                        }}>X</Button>
                                        <Stack direction={'column'} sx={{
                                            width: '900px', // Adjust the width as needed
                                            height: '500px', // Adjust the height as needed
                                            bgcolor: 'black !important', color: 'white', border: '0px solid black',
                                            transform: 'translate(23%, 14%)',
                                            backgroundColor: 'black'
                                        }}>
                                            <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
                                                <Toolbar>
                                                    <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                                        <img
                                                            src={selectedStudent?.banner}
                                                            style={{ height: "280px" }}

                                                        />
                                                        <Box marginLeft={'30px'}>
                                                            <Typography variant="h6" color="white">
                                                                {selectedStudent?.title}
                                                            </Typography>
                                                            <Typography variant="h6" color="white">
                                                                {selectedStudent?.year} {bull}
                                                                {selectedStudent?.movie_length}min {bull}
                                                                {selectedStudent?.content_rating}
                                                            </Typography>
                                                            <Stack direction={'row'}>
                                                                {selectedStudent?.gen.map((item: any, index) =>
                                                                    <Typography key={index}>
                                                                        {item.genre} {bull}
                                                                    </Typography>

                                                                )}
                                                            </Stack>

                                                            <Typography>
                                                                <Stack direction={'row'} alignItems={'center'}>
                                                                    <Typography style={{ marginLeft: '5px' }}><span role="img" aria-label="Stars Icon">⭐</span>{selectedStudent?.rating}/10</Typography>
                                                                    <Button sx={{ marginLeft: '5px' }} onClick={() => selectedStudent && handleRatingClick(selectedStudent)}>
                                                                        <StarRateIcon sx={{ color: 'blue' }} />
                                                                        <Typography style={{ color: 'blue' }} ref={anchorRef}>Rate</Typography>

                                                                    </Button>
                                                                </Stack>

                                                            </Typography>

                                                        </Box>

                                                    </Stack>


                                                    <Box sx={{ flexGrow: 1 }} />
                                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                                    </Box>
                                                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                                                    </Box>
                                                </Toolbar>

                                            </AppBar>

                                            <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto', mt: 2 }}>
                                                <Toolbar>
                                                    <Stack alignItems="left" direction={'row'} sx={{ margin: 'auto' }}>
                                                        <Typography>
                                                            {selectedStudent?.description}
                                                        </Typography>
                                                    </Stack>
                                                </Toolbar>
                                            </Stack>
                                            <Stack direction={'row'} sx={{ bgcolor: 'black', mt: '-1' }}>
                                                <Toolbar sx={{ width: '100%' }}>

                                                    <Button fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%' }}>
                                                        < AddIcon sx={{ color: 'blue' }} />
                                                        <>
                                                            <span style={{ marginRight: '1rem' }}></span>
                                                            <Typography sx={{
                                                                display: 'flex', alignItems: 'center', color: '#7FC7D9',
                                                                border: 'none',
                                                                fontWeight: 'bold',

                                                            }}>
                                                                Watch List
                                                            </Typography>

                                                        </>
                                                    </Button>
                                                    <Box sx={{ margin: '0 10px' }} /> {/* Adjust the margin value as needed */}
                                                    <Button fullWidth sx={{
                                                        fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%'
                                                        ,
                                                    }
                                                    }
                                                        onClick={() => navigate(`/movie/id/${selectedStudent?.imdb_id}`)}
                                                    >
                                                        < PlayArrowIcon sx={{ color: 'blue' }} />
                                                        <>
                                                            <span style={{ marginRight: '1rem' }}></span>
                                                            <Typography sx={{
                                                                display: 'flex', alignItems: 'center', color: 'white',
                                                                border: 'none',
                                                                fontWeight: 'bold',

                                                            }}>
                                                                Trailer
                                                            </Typography>
                                                        </>
                                                    </Button>
                                                </Toolbar>
                                            </Stack>
                                        </Stack>
                                    </Popper>
                                </Box>

                            </Toolbar>
                        </AppBar>

                    </Box >
                );

            default:
                return null;
        }

    };
    const bull = (<Box sx={{ display: 'inline-block', mx: '6px', transform: 'scale(0.8)', color: 'white' }}> • </Box>);


    useEffect(() => {
        const genreCount = countGenres(popurarityItemList);
        setGenreCount(genreCount);
        const totalGenreCount = Object.values(genreCount).reduce((acc, count) => acc + count, 0);
        setNumberGen(totalGenreCount);

        const keyCount = countKey(popurarityItemList);
        setKeyCount(keyCount);
        const totalKeyCount = Object.values(keyCount).reduce((acc, count) => acc + count, 0);
        setNumberKey(totalKeyCount);

    }, [popurarityItemList]);

    function countGenres(popurarityItemList: movieItem[]): Record<string, number> {
        const genreCount: Record<string, number> = {};

        popurarityItemList.forEach((movie) => {
            movie.gen.forEach((genre) => {
                const genreName = genre.genre;
                // Nếu thể loại đã tồn tại, tăng giá trị đếm lên 1; ngược lại, tạo mới với giá trị 1.
                genreCount[genreName] = (genreCount[genreName] || 0) + 1;
            });
        });
        return genreCount;

    }
    type Key = | ' ';
    function countKey(popurarityItemList: movieItem[]): Record<string, number> {
        const keyCounting: Record<string, number> = {};

        popurarityItemList.forEach((movie) => {
            movie.keywords.forEach((type) => {
                // type key
                const keyName: Key = type.keyword as Key;
                // Nếu thể loại đã tồn tại, tăng giá trị đếm lên 1; ngược lại, tạo mới với giá trị 1.
                keyCounting[keyName] = (keyCounting[keyName] || 0) + 1;
            });
        });
        return keyCounting;
    }

    const [openGenDialog, setOpenGenDialog] = useState(false);
    const handleDiaGenlogOpen = () => {
        setOpenGenDialog(true);
    };

    const handleDiaGenlogClose = () => {
        setOpenGenDialog(false);
    };
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

    const handleRemoveGenreFilter = (removedGenre: any) => {
        setSelectedGenres(selectedGenres.filter((genre) => genre !== removedGenre));

    };
    const handleRemoveKeyFilter = (removedGenre: any) => {
        setSelectedKeys(selectedKeys.filter((genre) => genre !== removedGenre));
    };


    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleRankingClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    const [selectedItem, setSelectedItem] = useState('All ');

    const handleItemClick = (item: string, event: React.MouseEvent<HTMLElement>) => {
        setSelectedItem(item);
        // Pass the event to handleRankingClick
        handleRankingClick(event);
    };

    type Genre = | 'Action' | 'Adventure' | 'Animation' | 'Biography' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Family' | 'Fantasy' | 'History' | 'Horror' | 'Music' | 'Musical' | 'Mystery' | 'Romance' | 'Sci-Fi' | 'Sport' | 'Thriller' | 'War' | 'Western';

    const handleGenreClick = (selectedGenre: Genre) => {
        if (selectedGenres.includes(selectedGenre)) {
            // If already selected, remove it
            setSelectedGenres(selectedGenres.filter((genre) => genre !== selectedGenre));

        } else {
            // If not selected, add it
            setSelectedGenres([...selectedGenres, selectedGenre]);
        }

    };
    const handleTypeClick = (selectedKey: Key) => {
        if (selectedKeys.includes(selectedKey)) {
            // If already selected, remove it
            setSelectedKeys(selectedKeys.filter((genre) => genre !== selectedKey));

        } else {
            // If not selected, add it
            setSelectedKeys([...selectedKeys, selectedKey]);
        }

    };

    const [applyFilter, setApplyFilter] = useState(false);
    const [filterType, setFilterType] = useState('');
    const handleFilterChange = (type: any) => {
        setApplyFilter(type !== 'none'); // Apply filter only if type is not 'none'
        // setApplyFilter(type); // Apply filter only if type is not 'none'
        setFilterType(type);
    };
    const isFilterApplied = applyFilter;

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const toggleSortOrder = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    };

    const sortedPopularityItemList = [...popurarityItemList].sort((a: any, b: any) => {
        const sortOrderFactor = sortOrder === 'asc' ? 1 : -1;
        return sortOrderFactor * (a.movieIndex - b.movieIndex);
    });

    const [displayedGenres, setDisplayedGenres] = useState(8); // Initial number of genres to display
    const handleLoadMore = () => {
        // Increase the number of displayed genres when "load more" is clicked
        setDisplayedGenres(displayedGenres + 40);
    };


    return (
        <div>
            <Box alignContent="center" sx={{ width: '100%', m: 'auto', Typography: 3, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <Stack direction="column" alignItems="flex-start" justifyContent='left'>
                            <Typography sx={{
                                color: 'white', fontSize: "2rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                ':hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                },
                            }}>IMDb Charts
                            </Typography>

                            <Stack direction={'row'} sx={{ width: '100%' }} alignItems={'center'}>
                                <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '40px' }} orientation="vertical" />
                                <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                                    Most Popular Movie
                                </Typography>
                            </Stack>
                            <Typography sx={{ color: 'white', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', }, }}>As determined by IMDb users</Typography>
                        </Stack>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}>

                                <Button
                                    sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                    <Typography sx={{ alignItems: 'center', color: 'white', border: 'none', fontWeight: 'bold', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', }, }}>
                                        Share
                                    </Typography>
                                    <ShareIcon sx={{ color: 'gray', alignContent: 'center', mt: '3px', fontSize: '60px' }} />
                                </Button>
                            </a>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} >
                    <Grid item xs={12} sm={6} md={8}>
                        <AppBar position="static" sx={{ bgcolor: 'black' }} >
                            <Toolbar >
                                <Stack direction="column" alignItems="flex-start" justifyContent='center'>
                                    <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}
                                    >
                                        {isFilterApplied ? '0 of ' : ''} {popurarityItemList.length} Movie
                                        {/* {isFilterApplied ? '0 of ' : ''} 50 Movie */}
                                    </Typography>
                                    <Stack
                                        sx={{
                                            display: 'grid', columnGap: 5, rowGap: 3, gridTemplateColumns: 'repeat(4, 1fr)',
                                        }} >

                                        <FilterListIcon fontSize='large' sx={{ bgcolor: 'blue', color: 'white', alignContent: 'center', mt: '3px', borderRadius: '100%', height: '50px', width: '50px' }} onClick={handleDiaGenlogOpen} />

                                        {selectedGenres.map((genre, index) => (
                                            <div key={genre} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <Typography sx={{ fontWeight: 'bold', marginRight: '5px' }}>
                                                    {genre}
                                                </Typography>
                                                <IconButton
                                                    size="small" onClick={() => handleRemoveGenreFilter(genre)}
                                                    sx={{ color: 'red', padding: 0 }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </div>
                                        ))
                                        }
                                        {/* Display selected genre with "X" icon */}

                                        {selectedKeys.map((genre, index) => (
                                            <div key={genre} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <Typography sx={{ fontWeight: 'bold', marginRight: '5px' }}>
                                                    {genre}
                                                </Typography>
                                                <IconButton
                                                    size="small" onClick={() => handleRemoveKeyFilter(genre)}
                                                    sx={{ color: 'red', padding: 0 }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </div>
                                        ))
                                        }
                                    </Stack>
                                    <Dialog open={openGenDialog} onClose={handleDiaGenlogClose} maxWidth={'lg'}
                                        keepMounted={true}
                                        PaperProps={{
                                            style: {
                                                background: 'linear-gradient(rgba(57, 36, 103, 0.5), rgba(57, 36, 103, 0.5)), #392467',
                                                // Gradient from transparent to #392467
                                            },
                                        }}
                                    >
                                        <DialogTitle sx={{ color: 'yellow', textTransform: 'uppercase', fontWeight: 'bold' }}>Genres and Counts</DialogTitle>
                                        <DialogContent>
                                            <Box
                                                sx={{
                                                    display: 'grid', columnGap: 3, rowGap: 3, gridTemplateColumns: 'repeat(4, 1fr)',
                                                }} >

                                                {Object.entries(genreCount).map(([genre, count]) => (
                                                    <Button key={genre} variant="contained" size="large" sx={{
                                                        textTransform: 'uppercase',
                                                        ':hover': { bgcolor: 'yellow', color: 'purple', },
                                                        background: `linear-gradient(180deg, ${selectedGenres.includes(genre as Genre) ? 'yellow' : 'grey'}, transparent) border-box`,
                                                        border: "2px solid transparent", backgroundColor: 'black', borderRadius: '1rem', '--Grid-borderWidth': '1px', borderColor: 'blue', margin: '5px',
                                                    }}
                                                        onClick={() => handleGenreClick(genre as Genre)}
                                                    >
                                                        <Typography>
                                                            {`${genre}: (${count})`}

                                                        </Typography>
                                                    </Button>
                                                ))}


                                                {/* </List> */}
                                            </Box>
                                            <Divider sx={{
                                                marginTop: '20px', width: '100%', maxWidth: '1100px', borderRadius: 2, border: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper',
                                            }} />
                                            <DialogTitle sx={{ color: 'yellow', textTransform: 'uppercase', fontWeight: 'bold' }}>IN THEATERS</DialogTitle>

                                            <Box
                                                sx={{
                                                    display: 'grid',
                                                }} >
                                                <Stack>
                                                    <Stack direction={'row'}>
                                                        <Stack direction={'row'} alignItems='center' alignContent={'center'}>
                                                            <Radio
                                                                icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite />}
                                                                checked={filterType === 'none'} onChange={() => handleFilterChange('none')}
                                                            />
                                                            <Typography variant='h5' sx={{ color: 'white' }}>None</Typography>
                                                        </Stack>

                                                        <Stack sx={{ marginLeft: '20px' }} direction={'row'} alignItems='center' alignContent={'center'}>
                                                            <Radio
                                                                icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite />}
                                                                checked={filterType === 'inTheaters'} onChange={() => handleFilterChange('inTheaters')}
                                                            />
                                                            <Typography variant='h5' sx={{ color: 'white' }}>
                                                                In theaters near you
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>

                                                    <Stack direction={'row'} alignItems='center' alignContent={'center'}>
                                                        <Radio
                                                            icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite />}
                                                            checked={filterType === 'In theaters with online ticketing'} onChange={() => handleFilterChange('In theaters with online ticketing')}
                                                        />
                                                        <Typography variant='h5' sx={{ color: 'white' }}>
                                                            In theaters with online ticketing
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                            <Divider sx={{
                                                marginTop: '20px', width: '100%', maxWidth: '1100px', borderRadius: 2,
                                                border: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper',
                                            }} />
                                            <DialogTitle sx={{ color: 'yellow', textTransform: 'uppercase', fontWeight: 'bold' }}>Movie Key</DialogTitle>

                                            <Box
                                                sx={{
                                                    // display: 'grid',
                                                    columnGap: 5, rowGap: 5, gridTemplateColumns: 'repeat(4, 1fr)',
                                                }} >
                                                <Box>
                                                    <Box sx={{
                                                        rowGap: 3, gridTemplateColumns: 'repeat(4, 1fr)',
                                                    }} >
                                                        {Object.entries(keyCount)
                                                            .slice(0, displayedGenres) // Display only the specified number of genres
                                                            .map(([genre, count]) => (
                                                                <Button
                                                                    key={genre}
                                                                    variant="contained"
                                                                    size="large"
                                                                    sx={{
                                                                        textTransform: 'uppercase', ':hover': { bgcolor: 'yellow', color: 'white' },
                                                                        background: `linear-gradient(180deg, ${selectedKeys.includes(genre as Key) ? 'yellow' : 'grey'
                                                                            }, transparent) border-box`,
                                                                        border: '2px solid transparent', backgroundColor: 'black', borderRadius: '1rem', '--Grid-borderWidth': '1px',
                                                                        borderColor: 'blue', margin: '5px',
                                                                    }}
                                                                    onClick={() => handleTypeClick(genre as Key)}
                                                                >
                                                                    <Typography>{`${genre}: (${count})`}         </Typography>
                                                                </Button>
                                                            ))}
                                                    </Box>
                                                    <Stack direction="row" alignContent={'center'} justifyContent={'center'} >
                                                        {displayedGenres < Object.entries(keyCount).length && (
                                                            <Button onClick={handleLoadMore} variant="outlined" size="large"
                                                                sx={{
                                                                    ':hover': { bgcolor: 'yellow', color: 'black', }, margin: '5px', width: '200px', textAlign: 'center',
                                                                    alignContent: 'center', justifyContent: 'center', color: 'purple', border: '2px solid blue', backgroundColor: 'white'
                                                                }}
                                                            >
                                                                Load More ({Object.entries(keyCount).length - displayedGenres})
                                                            </Button>
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </DialogContent>
                                    </Dialog>
                                </Stack>
                                <Box sx={{ flexGrow: 1 }} />
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Stack direction={'row'}>
                                        <Tooltip title="Detail View">
                                            <ViewListIcon fontSize='large' sx={{ color: 'yellow', alignContent: 'center', mt: '3px', fontSize: '40px' }} onClick={() => switchView('detail')} />
                                        </Tooltip>
                                        <Tooltip title="Grid View" sx={{ display: { xs: 'none', md: 'flex' } }}>
                                            <GridViewIcon fontSize='large' sx={{ color: 'yellow', alignContent: 'center', mt: '3px', fontSize: '40px' }} onClick={() => switchView('grid')} />
                                        </Tooltip>
                                        <Tooltip title="Compact View">
                                            <ViewHeadlineIcon fontSize='large' sx={{ color: 'yellow', alignContent: 'center', mt: '3px', fontSize: '40px' }} onClick={() => switchView('compact')} />
                                        </Tooltip>
                                    </Stack>
                                </div>

                            </Toolbar>
                        </AppBar>

                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {sortedPopularityItemList
                                .filter((movie) => {
                                    if (selectedGenres.length === 0) return true; // No genre filter
                                    // Check if every selected genre is present in the movie's genres
                                    const hasAllGenres = selectedGenres.every((genre) =>
                                        movie.gen.some((mGenre) => mGenre.genre === genre)
                                    );

                                    return hasAllGenres;
                                })
                                .filter((movie) => {
                                    if (selectedKeys.length === 0) return true; // No key filter

                                    // Check if every selected genre is present in the movie's genres
                                    const hasAllGenres = selectedKeys.every((keyword) =>
                                        movie.keywords.some((mGenre) => mGenre.keyword === keyword)
                                    );

                                    return hasAllGenres;
                                })
                                .filter((movie) => {
                                    // Check filters based on the checkboxes
                                    if (!applyFilter) return true; // No filter

                                    if (filterType === 'none') return true; // No filter

                                    if (filterType === 'inTheaters') {
                                        return null;
                                    }
                                    if (filterType === 'In theaters with online ticketing') {
                                        return null;
                                    }

                                    // Add more filters as needed

                                    return true;
                                })

                                .map((m, index) => renderMovieItem(m, index, currentView, sortOrder))}

                            {/* Conditional Rendering of SVG when no results */}
                            {popurarityItemList.length === 0 && (
                                <img src="https://filmfair.in/website/images/error_screens/no-result.png" style={{ width: '900px', height: '999px' }} alt="No Results" />
                            )}

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} key={selectedGenres.length}>
                        <AppBar position="static">
                            <Stack
                                direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} sx={{ bgcolor: 'black' }}

                            >
                                {/* <Typography variant='h3' sx={{ color: 'white' }}>
                                    You have rated
                                </Typography>
                                <Typography variant='h4' sx={{ color: 'white' }}>
                                    <span>0</span>/100 (0%)
                                </Typography> */}
                                {/* <FormControlLabel control={
                                    <Checkbox
                                        onClick={() => navigate('/IMDbPro')}
                                        // defaultChecked
                                        sx={{
                                            color: blue[800],
                                            '&.Mui-checked': {
                                                color: blue[600],
                                            },
                                        }}
                                    />} label="
                                        Hide titles you've rated"

                                /> */}

                            </Stack>

                        </AppBar>
                        <AppBar position="static" sx={{ bgcolor: 'black' }}>
                            <Stack direction={'column'}>
                                <Stack direction="column" alignItems="center" justifyContent='center'>
                                    <Button sx={{ display: 'flex', alignItems: 'flex-start', height: '50px' }}>
                                        <Divider sx={{ borderColor: 'yellow', border: '5px solid yellow' }} orientation="vertical" />

                                        <Typography sx={{ alignItems: 'center', color: 'white', marginLeft: '10px', border: 'none', fontWeight: 'bold', fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', }, }}>
                                            More to explore
                                        </Typography>
                                    </Button>
                                    <Stack alignContent={'flex-start'} alignItems={'flex-start'} direction={'column'} spacing={2}>
                                        <Typography sx={{ color: 'white', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}
                                        >
                                            {/* Charts */}
                                        </Typography>
                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Top Box Office (US)</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            From the past weekend
                                        </Typography>

                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                IMDb Top 250 Movies</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            As rated by regular IMDb voters.
                                        </Typography>

                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Top Rated English Movies</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            From the past weekend
                                        </Typography>

                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Most Popular TV Shows</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            As determined by IMDb users
                                        </Typography>

                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Top 250 TV Shows</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            Top 250 as rated by IMDb Users
                                        </Typography>

                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Lowest Rated Movies</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            Bottom 100 as voted by IMDb users
                                        </Typography>
                                        <Stack alignContent={'center'} direction={'row'} alignItems={'center'} sx={{ ':hover': { color: 'blue' } }}>
                                            <Typography sx={{ color: 'white', fontSize: "1.3rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                                Most Popular Celebs</Typography>
                                            <KeyboardArrowRight sx={{ color: 'white' }} />
                                        </Stack>
                                        <Typography sx={{ color: 'gray', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }, fontWeight: 'bold' }}>
                                            As determined by IMDb users

                                        </Typography>
                                    </Stack>

                                </Stack>
                                <Stack direction="column" alignItems="center" justifyContent='center' sx={{ marginTop: '50px' }}>
                                    <Button sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'flex-end' }}>
                                        <Divider sx={{ borderColor: 'yellow', border: '5px solid yellow' }} orientation="vertical" />
                                        <Typography sx={{
                                            ml: '10px',
                                            alignItems: 'center', color: 'white', border: 'none',
                                            fontWeight: 'bold', fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' }
                                        }}>
                                            Top Rated Genre
                                        </Typography>
                                    </Button>
                                    <Box
                                        sx={{
                                            columnGap: 3,
                                            rowGap: 3,
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            textAlign: 'left',
                                            mt: 3,
                                            alignItems: "flex-end",
                                            justifyContent: 'flex-end'


                                        }} >

                                        {Object.entries(genreCount).map(([genre, count]) => (
                                            <Button key={genre} variant="contained" sx={{
                                                textTransform: 'uppercase',
                                                ':hover': { bgcolor: 'yellow', color: 'purple', },
                                                background: `linear-gradient(180deg, ${selectedGenres.includes(genre as Genre) ? 'yellow' : 'grey'}, transparent) border-box`,
                                                border: "2px solid transparent", backgroundColor: 'black', borderRadius: '1rem', '--Grid-borderWidth': '1px', borderColor: 'yellow', margin: '7px',
                                            }}
                                                onClick={() => handleGenreClick(genre as Genre)}
                                            >
                                                {`${genre})`}
                                            </Button>
                                        ))}


                                        {/* </List> */}
                                    </Box>
                                </Stack>
                            </Stack>

                        </AppBar>
                        {/* <FormControl fullWidth sx={{ bgcolor: 'black', height: '100%' }} /> */}

                    </Grid>
                </Grid>
            </Box>

        </div >
    );
}
