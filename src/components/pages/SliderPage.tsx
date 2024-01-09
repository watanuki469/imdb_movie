import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { movieItem } from 'models';
import { useState } from 'react';

export interface SliderPageProps {
    popurarityItemList: movieItem[];
}

export default function SliderPage({
    popurarityItemList

}: SliderPageProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    // const maxSteps = popurarityItemList.length
    const maxSteps = 50

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // const uniquePopurarityItemList: movieItem[] = [];
    // const seenTitles = new Set<string>();

    // popurarityItemList.forEach((item: movieItem) => {
    //     if (!seenTitles.has(item.title)) {
    //         seenTitles.add(item.title);
    //         uniquePopurarityItemList.push(item);
    //     }
    // });
    const removeDuplicateData = (popurarityItemList: any) => {
        // Sử dụng Set để đảm bảo các phần tử duy nhất
        const uniqueSet = new Set(popurarityItemList.map((item: any) => item.title));
        // Chuyển đổi Set thành mảng để có thể sử dụng các phương thức của mảng
        const uniqueArray = Array.from(uniqueSet);
        // Tạo một mảng mới chỉ chứa các phần tử không trùng lặp
        const result = uniqueArray.map((title) => popurarityItemList.find((item: any) => item.title === title));
        return result;
    };

    // Sử dụng hàm để loại bỏ các phần tử trùng lặp từ mảng movieItemList
    //   const uniqueMovieItemList = removeDuplicateData(popurarityItemList);
    const uniquePopurarityItemList = removeDuplicateData(popurarityItemList);


    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={7}>
                    <Box sx={{
                        paddingTop: {
                            xs: "130%",
                            sm: "80%",
                            md: "60%",
                            lg: "45%"
                        },
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        // src={uniquePopurarityItemList[activeStep] && uniquePopurarityItemList[activeStep].banner && uniquePopurarityItemList[activeStep]?.banner}
                        backgroundImage: `url(${uniquePopurarityItemList[activeStep]?.banner})`,


                    }} >
                        <div style={{ display: 'flex' }} >
                            <img
                                src={uniquePopurarityItemList[activeStep]?.image_url}
                                alt="movie-img"
                                style={{
                                    display: 'inline-flex',
                                }}

                            />
                            <Box sx={{ display: 'flex', bgcolor: 'black', height: '115px', alignSelf: 'flex-end', width: '100%' }}>
                                <PlayCircleOutlineIcon sx={{
                                    height: '100px', bgcolor: 'black', color: 'white', alignSelf: 'flex-end', width: '100px', margin: '6px'
                                    , ':hover': {
                                        bgcolor: 'black',
                                        color: 'yellow',
                                        borderColor: 'red'
                                    },
                                }} />
                                <div style={{ alignSelf: 'center', marginTop: '-6px' }}>
                                    <h2 style={{
                                        textAlign: "justify",
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        textDecoration: 'bold',
                                        color: 'white',

                                    }}>{uniquePopurarityItemList[activeStep]?.title}
                                    </h2>

                                    <div>
                                        <Typography sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            textAlign: "justify",
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            WebkitBoxOrient: "vertical",

                                        }}>{uniquePopurarityItemList[activeStep]?.description.substring(0, 120)}...</Typography>
                                    </div>
                                </div>
                                <h4 style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)', alignSelf: 'center', marginRight: '10px', width: '150px' }}>
                                    {uniquePopurarityItemList[activeStep]?.movie_length} min
                                </h4>
                            </Box>

                        </div>

                    </Box>

                 
                    <MobileStepper
                        sx={{ backgroundColor: 'transparent', color: 'blue' }}
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                sx={{ color: 'red' }}
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                <Button sx={{ color: 'red' }}> Back </Button>
                            </Button>
                        }

                    />
                </Grid>

                <Grid item xs={5} >
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4} direction="row" alignItems="center" sx={{ color: 'yellow' }}>
                            <Typography variant='h4'>  Up next</Typography>

                        </Stack>
                        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, objectFit: 'contain', display: 'block', width: '100%', bgcolor: 'black' }}>
                            <Stack spacing={4}>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Avatar variant="square" sx={{ width: '100px', height: '100%', overflow: 'hidden', objectFit: 'cover' }}>
                                        <img
                                            src={uniquePopurarityItemList[activeStep + 1]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Avatar>
                                    <Stack>
                                        <Box sx={{ display: 'flex' }}>
                                            <PlayCircleOutlineIcon sx={{
                                                height: '60px', bgcolor: 'black', color: 'white', width: '60px', margin: '6px', alignSelf: 'flex-end', mt: '1rem'
                                                , ':hover': {
                                                    bgcolor: 'black',
                                                    color: 'yellow',
                                                    borderColor: 'red'
                                                },
                                            }} />
                                            <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'flex-end' }}>
                                                {uniquePopurarityItemList[activeStep + 1]?.movie_length} min
                                            </h4>
                                        </Box>
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
                                                {uniquePopurarityItemList[activeStep + 1]?.title}
                                            </h4>
                                            <Typography sx={{
                                                color: 'gray',
                                                textAlign: "justify",
                                                display: "-webkit-box",
                                                overflow: "hidden",
                                                WebkitBoxOrient: "vertical",
                                                mt: '-1rem'
                                            }}>
                                                The Final Match And More</Typography>
                                        </Box>
                                    </Stack>

                                </Stack>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Avatar variant="square" sx={{ width: '100px', height: '100%', overflow: 'hidden', objectFit: 'cover' }}>
                                        <img
                                            src={uniquePopurarityItemList[activeStep + 2]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Avatar>
                                    <Stack>
                                        <Box sx={{ display: 'flex' }}>
                                            <PlayCircleOutlineIcon sx={{
                                                height: '60px', bgcolor: 'black', color: 'white', width: '60px', margin: '6px', alignSelf: 'flex-end', mt: '1rem'
                                                , ':hover': {
                                                    bgcolor: 'black',
                                                    color: 'yellow',
                                                    borderColor: 'red'
                                                },
                                            }} />
                                            <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'flex-end' }}>
                                                {uniquePopurarityItemList[activeStep + 2]?.movie_length} min
                                            </h4>
                                        </Box>
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
                                                {uniquePopurarityItemList[activeStep + 2]?.title}
                                            </h4>
                                            <Typography sx={{
                                                color: 'gray',
                                                textAlign: "justify",
                                                display: "-webkit-box",
                                                overflow: "hidden",
                                                WebkitBoxOrient: "vertical",
                                                mt: '-1rem'
                                            }}>
                                                Tell me your mood and feeling</Typography>
                                        </Box>
                                    </Stack>

                                </Stack>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Avatar variant="square" sx={{ width: '100px', height: '100%', overflow: 'hidden', objectFit: 'cover' }}>
                                        <img
                                            src={uniquePopurarityItemList[activeStep + 3]?.image_url}
                                            alt="movie-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Avatar>
                                    <Stack>
                                        <Box sx={{ display: 'flex' }}>
                                            <PlayCircleOutlineIcon sx={{
                                                height: '60px', bgcolor: 'black', color: 'white', width: '60px', margin: '6px', alignSelf: 'flex-end', mt: '1rem'
                                                , ':hover': {
                                                    bgcolor: 'black',
                                                    color: 'yellow',
                                                    borderColor: 'red'
                                                },
                                            }} />
                                            <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'flex-end' }}>
                                                {uniquePopurarityItemList[activeStep + 3]?.movie_length} min
                                            </h4>
                                        </Box>
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
                                                {uniquePopurarityItemList[activeStep + 3]?.title}
                                            </h4>
                                            <Typography sx={{
                                                color: 'gray',
                                                textAlign: "justify",
                                                display: "-webkit-box",
                                                overflow: "hidden",
                                                WebkitBoxOrient: "vertical",
                                                mt: '-1rem'
                                            }}>
                                                All Hail Britannia!!</Typography>
                                        </Box>
                                    </Stack>

                                </Stack>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Typography variant='h4' sx={{ color: 'white' }}>Browse trailer {'>'} </Typography>
                                </Stack>
                            </Stack>


                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </div >

    );
}