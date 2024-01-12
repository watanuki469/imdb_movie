import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { movieItem } from 'models';
import { useNavigate } from 'react-router-dom';

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
    return (
        <div>
            <Stack sx={{ position: 'relative', height: '300px', width: '200px' }}>
                <a href='/'>
                    <img
                        src={popurarityItemList[activeStep + number]?.image_url}
                        alt="movie-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                        onError={(e) => {
                            const imgElement = e.currentTarget as HTMLImageElement;
                            imgElement.src = 'https://s3.tech12h.com/sites/default/files/styles/inbody400/public/field/image/no-image-available.jpg'; // Đặt nguồn của ảnh phụ trợ vào đây
                        }}
                    />
                </a>

                <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
            </Stack>

            <Stack>
                <Stack direction="row" spacing={5} >
                    <Stack direction="row" spacing={1} >
                        <StarIcon sx={{ color: 'yellow', fontSize: '25px', left: 5, top: 10 }} />
                        <Typography variant='h5' sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + number]?.rating}</Typography>
                    </Stack>
                    <StarBorderIcon sx={{ color: 'blue' }} />

                </Stack>
                <Box>
                    <h4 style={{
                        textAlign: "justify",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        textDecoration: 'bold',
                        color: 'white',
                        marginTop: '0%',
                        height: '3em'

                    }}>
                        {popurarityItemList[activeStep + number]?.title.substring(0, 32)}...
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
                <Button fullWidth sx={{ fill: 'currentcolor', display: 'flex', alignItems: 'center', bgcolor: '#black', height: '50px', opacity: '90%' }}>
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