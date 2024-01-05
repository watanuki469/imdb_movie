import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { movieItem } from 'models';
import { useState } from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Diversity2Icon from '@mui/icons-material/Diversity2';

export interface Top10PageProps {
    popurarityItemList: movieItem[];
}

export default function Top10Page({
    popurarityItemList

}: Top10PageProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = popurarityItemList.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 6);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 6);
    };


    return (
        <div>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Button fullWidth sx={{
                    bgcolor: 'black', height: '50px', padding: '10px', justifyContent: 'flex-start',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    <Diversity2Icon sx={{ color: 'yellow', height: '100%'  }} />;
                    <>
                        <Typography variant='h3' sx={{
                            color: 'white',
                            border: 'none',
                            fontWeight: 'bold',
                            marginLeft: '10px',
                            marginTop: '10px',
                        }}>
                            Top movies on IMDb this week
                        </Typography>

                    </>
                    {/* <PlayArrowIcon  sx={{ color: 'yellow', height: '100%'  }} /> */}
                </Button>
                <Grid item xs={12} >
                    <Stack direction='row' spacing={3}>
                        <Box sx={{ px: 3, objectFit: 'contain', width: '100%', bgcolor: 'black', position: 'relative' }}>
                            <Stack spacing={5.5} direction="row">
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 0]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 0]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 0]?.title.substring(0, 24)}...
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

                                </Stack>
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 1]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 1]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 1]?.title.substring(0, 24)}...
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

                                </Stack>
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 2]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 2]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 2]?.title.substring(0, 24)}...
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

                                </Stack>
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 3]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 3]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 3]?.title.substring(0, 24)}...
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

                                </Stack>
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 4]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 4]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 4]?.title.substring(0, 24)}...
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

                                </Stack>
                                <Stack spacing={2} alignItems="center">
                                    <Stack sx={{ position: 'relative' }}>
                                        <img
                                            src={popurarityItemList[activeStep + 5]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <BookmarkIcon sx={{ position: 'absolute', top: 0, left: 0, color: 'black', fontSize: '35px' }} />
                                        <AddIcon sx={{ position: 'absolute', top: 0, margin: '5px', left: 0, color: 'white', fontSize: '25px' }} />
                                    </Stack>

                                    <Stack>
                                        <Stack direction="row" spacing={5} >
                                            <Stack direction="row" spacing={1} >
                                                <StarIcon sx={{ color: 'yellow' }} />
                                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}> {popurarityItemList[activeStep + 5]?.rating}</Typography>
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


                                            }}>
                                                {popurarityItemList[activeStep + 5]?.title.substring(0, 24)}...
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

                                </Stack>

                            </Stack>


                        </Box>

                        <Button sx={{ position: 'absolute', top: '50%', left: -50, color: 'black', height: "30px", bgcolor: 'green' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            <Button sx={{ color: 'red' }}> Back </Button>
                        </Button>
                        <Button sx={{ position: 'absolute', top: '50%', right: 100, color: 'white', height: "30px", bgcolor: 'green' }} size="small" onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                        {/* </Grid> */}
                    </Stack>

                </Grid>
            </Grid>
        </div >

    );
}