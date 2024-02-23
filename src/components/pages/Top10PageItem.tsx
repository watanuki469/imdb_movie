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
    return (
        <div>
            <Stack sx={{ position: 'relative', height: '300px', }}>

                <img
                    onClick={() => navigate(`/movie/id/${popurarityItemList[activeStep + number]?.imdb_id}`)}
                    src={popurarityItemList[activeStep + number]?.image_url}
                    alt="movie-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                    onError={(e) => {
                        const imgElement = e.currentTarget as HTMLImageElement;
                        imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Đặt nguồn của ảnh phụ trợ vào đây

                    }}
                />


                <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
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
                    >
                        <Button onClick={() => handleCloseRating()} sx={{
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

                </Stack>
                <Box>
                    <h4 style={{
                        textAlign: "left",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        textDecoration: 'bold',
                        color: 'white',
                        marginTop: '0%',
                        height: '3em'

                    }}>
                        {popurarityItemList[activeStep + number]?.title.substring(0, 32)}
                    </h4>
                </Box>
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
            </Stack>
        </div>
    )
}