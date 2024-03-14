import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Dialog, DialogContent, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { movieItem } from 'models';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { default as StarOutlineIcon, default as StarRateIcon } from '@mui/icons-material/StarRate';
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';


export interface Top10PageProps {
    popurarityItemList: movieItem[],
    number: number,
    activeStep: number
}

export default function Top10PageItem({
    popurarityItemList,
    number,
    activeStep

}: Top10PageProps) {
    const navigate = useNavigate()
    const [selectedStudent, setSelectedStudent] = useState<movieItem>();
    const [openDialog, setOpenDialog] = useState(false);
    const [starIndex, setStarIndex] = useState(0);

    const handleRatingClick = (movie: movieItem) => {
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
    const handleWatchList = (movie: movieItem) => {
        const storedDataString = localStorage.getItem('watchList');
        let storedData: { [key: string]: movieItem } = {};
        if (storedDataString !== null) {
            storedData = JSON.parse(storedDataString);
        }
        if (storedData[movie.imdb_id]) {
            delete storedData[movie.imdb_id];
            localStorage.setItem('watchList', JSON.stringify(storedData));
            toast.success(`Removed ${movie.title} from watch list successfully`);

        } else {
            storedData[movie.imdb_id] = movie;
            localStorage.setItem('watchList', JSON.stringify(storedData));
            toast.success(`Added ${movie.title} to watch list successfully`);

        }
    };
    const [isFocus, setIsFocus] = useState(false);
    let timeOutId: NodeJS.Timeout;

    const handleMouseEnter = () => {
        timeOutId = setTimeout(() => {
            setIsFocus(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeOutId);
        setIsFocus(false);
    };

    const style = {
        // position: "relative",
        transition: "all 0.5s",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
    };

    const focusStyle = {
        ...style,
        transform: "rotateY(180deg)",
    };
    // const StyledRating = styled(Rating)({
    //     '& .MuiRating-iconFilled': {
    //         color: '#ff6d75',
    //     },
    //     '& .MuiRating-iconHover': {
    //         color: '#ff3d47',
    //     },
    // });
    const [value, setValue] = useState<number | null>(0);

    return (
        <div style={{ maxWidth: '200px' }}>
            <Stack sx={{ position: 'relative', height: '300px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Box sx={isFocus ? focusStyle : style}>
                    <img
                        onClick={() => navigate(`/movie/id/${popurarityItemList[activeStep + number]?.imdb_id}`)}
                        src={popurarityItemList[activeStep + number]?.image_url}
                        alt="movie-img"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black', maxWidth: "200px", minHeight: '250px',
                            alignContent: 'center', justifyContent: 'center', alignItems: 'center'
                        }}
                        onError={(e) => {
                            const imgElement = e.currentTarget as HTMLImageElement;
                            imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Đặt nguồn của ảnh phụ trợ vào đây

                        }}
                    />
                </Box>



                <BookmarkIcon onClick={() => handleWatchList(popurarityItemList[activeStep + number])} sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                <AddIcon onClick={() => handleWatchList(popurarityItemList[activeStep + number])} sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
            </Stack>

            <Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1}>
                        <StarIcon sx={{ color: 'yellow', fontSize: '25px', left: '25px', top: 10 }} />
                        <Typography variant='h5' sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{popurarityItemList[activeStep + number]?.rating}</Typography>
                    </Stack>
                    <StarBorderIcon sx={{ color: 'blue' }} onClick={() => handleRatingClick(popurarityItemList[activeStep + number])} />
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseRating}
                    >

                        <Stack direction={'column'} sx={{
                            bgcolor: 'black', color: 'white'
                            , border: '1px solid white',
                            //  transform: 'translate(70%, 100%)',
                            width: '99%'
                        }}>
                            <Typography variant='h3' sx={{ textAlign: 'center', color: 'yellow' }}>
                                Rate {value} <StarIcon > </StarIcon> of
                            </Typography>
                            <DialogContent sx={{ textAlign: 'center', mx: '24px' }}>
                                <Typography variant='h4' sx={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>
                                    {selectedStudent?.title}
                                </Typography>
                                {/* <Stack direction="row" spacing={2} sx={{width:'100%'}}>
                                    {starsArray}
                                </Stack> */}
                                <Stack spacing={10}
                                    sx={{
                                        '& > legend': { mt: 2 },
                                        justifyContent: "center"
                                        , alignContent: 'center',
                                        alignItems: "center"
                                    }}
                                >
                                    <Rating value={value} emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white', }} />}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }} name="customized-10" defaultValue={2} max={10} />

                                </Stack>
                            </DialogContent>
                            {/* <Button fullWidth sx={{ color: 'white', backgroundColor: starIndex > 0 ? 'red' : 'gray' }} onClick={() => handleCloseRating()}>
                                RATE
                            </Button> */}
                        </Stack>
                    </Dialog>

                </Stack>
                <Box>
                    <h4 style={{
                        textAlign: "left", display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", textDecoration: 'bold', color: 'white', marginTop: '0%', height: '3em'

                    }}>
                        {popurarityItemList[activeStep + number]?.title.substring(0, 32)}
                    </h4>
                </Box>
                <Button onClick={() => handleWatchList(popurarityItemList[activeStep + number])}
                    fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#31304D', height: '50px', opacity: '90%' }}>
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
                <Button onClick={() => navigate(`/movie/id/${popurarityItemList[activeStep + number]?.imdb_id}`)}
                    fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#black', height: '50px', opacity: '90%' }}>
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
            </Stack >
        </div >
    )
}