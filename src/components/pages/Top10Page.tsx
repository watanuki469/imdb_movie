import Diversity2Icon from '@mui/icons-material/Diversity2';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { movieItem } from 'models';
import { useEffect, useState } from 'react';
import Top10PageItem from './Top10PageItem';

export interface Top10PageProps {
    popurarityItemList: movieItem[];
}

export default function Top10Page({
    popurarityItemList

}: Top10PageProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    // const uniquePopurarityItemList = Array.from(new Set(popurarityItemList.map(item => item.title)))
    //     .map(title => popurarityItemList.find(item => item.title === title));

    const uniquePopurarityItemList: movieItem[] = [];
    const seenTitles = new Set<string>();

    //lọc bị trùng
    popurarityItemList.forEach((item: movieItem) => {
        if (!seenTitles.has(item.imdb_id)) {
            seenTitles.add(item.imdb_id);
            uniquePopurarityItemList.push(item);
        }
    });
    const maxSteps = uniquePopurarityItemList.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 6);
    };
    const handleLast = () => {
        setActiveStep(maxSteps - 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 6);
    };
    const handleBackFirst = () => {
        setActiveStep(0);
    };

    const matchesXs = useMediaQuery(theme.breakpoints.only('xs'));
    const matchesSm = useMediaQuery(theme.breakpoints.only('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.only('md'));

    let itemsToShow;
    if (matchesXs) {
        itemsToShow = 2;
    } else if (matchesSm) {
        itemsToShow = 2;
    } else if (matchesMd) {
        itemsToShow = 4;
    } else {
        // Mặc định hoặc xử lý cho các kích thước màn hình khác
        itemsToShow = 5; // Giả sử mặc định là 4 cho các kích thước khác
    }


    return (
        <div>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignContent: 'center', justifyContent: 'center' }}>

                <Stack direction={'row'} sx={{ justifyContent: "center", alignContent: 'center', alignItems: 'center', padding: '10px', height: 'auto' }}>

                    <Typography variant='h3' sx={{
                        color: 'white', border: 'none', fontWeight: 'bold', margin: '30px', textAlign: 'center', cursor: 'pointer'
                    }}>
                        Top movies on IMDb this week
                    </Typography>
                </Stack>

                {/* <PlayArrowIcon  sx={{ color: 'yellow', height: '100%'  }} /> */}
                <Grid item xs={12} >
                    <Stack direction='row' spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', mt: 4 }}>
                        <Box>
                            <Button sx={{
                                color: 'white',
                                // display: activeStep === 0 ? 'none' : 'inline-block'
                                display: 'inline-block'
                            }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                                        <Box sx={{
                                            width: 30, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white',
                                            position: 'absolute'

                                        }}>
                                            <KeyboardArrowLeft sx={{
                                                color: 'white', fontSize: 69,
                                                ':hover': {
                                                    color: 'yellow'
                                                },
                                            }} />
                                        </Box>
                                    </Box>
                                )}


                            </Button>
                            {/* <Button sx={{ color: 'white', mt: '40px' }} size="small" onClick={handleBackFirst} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}

                                First
                            </Button> */}
                        </Box>


                        <Box sx={{ objectFit: 'contain', width: '80%', bgcolor: 'black' }}>
                            <Stack spacing={1} direction="row" sx={{ width: '100%', height: '60vh', textAlign: 'center' }}>
                                {uniquePopurarityItemList.slice(0, itemsToShow).map((item, index) => (
                                    <Top10PageItem key={index} popurarityItemList={uniquePopurarityItemList} number={index} activeStep={activeStep} />
                                ))}
                            </Stack>
                        </Box>


                        <Box>
                            <Button sx={{
                                color: 'white',
                                // display: activeStep >= 44 ? 'none' : 'inline-block'
                                display: 'inline-block'
                            }} size="small" onClick={handleNext} disabled={activeStep >= 44}>

                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx={{
                                            width: 30, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white',

                                        }}>
                                            <KeyboardArrowRight sx={{
                                                color: 'white', fontSize: 69,
                                                ':hover': {
                                                    color: 'yellow'
                                                },
                                            }} />
                                        </Box>
                                    </Box>
                                )}
                            </Button>
                            {/* <Button sx={{ color: 'white', mt: '40px' }} size="small" onClick={handleLast} disabled={activeStep >= 44}>
                                Latest
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button> */}
                        </Box>
                    </Stack>
                </Grid>

            </Grid>
        </div >

    );
}