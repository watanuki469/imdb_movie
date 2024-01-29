import Diversity2Icon from '@mui/icons-material/Diversity2';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { movieItem } from 'models';
import { useState } from 'react';
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
        itemsToShow = 1;
    } else if (matchesSm) {
        itemsToShow = 2;
    } else if (matchesMd) {
        itemsToShow = 4;
    } else {
        // Mặc định hoặc xử lý cho các kích thước màn hình khác
        itemsToShow = 6; // Giả sử mặc định là 4 cho các kích thước khác
    }

    return (
        <div>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignContent: 'center', justifyContent: 'center' }}>
                <Button fullWidth sx={{
                    bgcolor: 'black', height: '50px', padding: '10px', justifyContent: 'center',
                    marginTop: '30px',
                    marginBottom: '30px',
                    alignContent: 'center',
                    textAlign: 'center'
                }}>
                    <Diversity2Icon sx={{ color: 'yellow', height: '100%' }} />;
                    <>
                        <Typography variant='h3' sx={{
                            color: 'white',
                            border: 'none',
                            fontWeight: 'bold',
                            marginLeft: '10px',
                            marginTop: '10px',
                            textAlign: 'center'
                        }}>
                            Top movies on IMDb this week
                        </Typography>

                    </>
                    {/* <PlayArrowIcon  sx={{ color: 'yellow', height: '100%'  }} /> */}
                </Button>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Button sx={{ color: 'white' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back:{activeStep}

                            </Button>
                            <Button sx={{ color: 'white', mt: '40px' }} size="small" onClick={handleBackFirst} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}

                                First
                            </Button>
                        </Box>


                        <Box sx={{ px: 3, objectFit: 'contain', width: '100%', bgcolor: 'black' }}>
                            <Stack spacing={3.3} direction="row" sx={{ width: '100%', height: '60vh' }}>
                                {uniquePopurarityItemList.slice(0, itemsToShow).map((item, index) => (
                                    <Top10PageItem key={index} popurarityItemList={uniquePopurarityItemList} number={index} activeStep={activeStep} />
                                ))}
                            </Stack>
                        </Box>


                        <Box>
                            <Button sx={{ color: 'white' }} size="small" onClick={handleNext} disabled={activeStep >= 44}>
                                Next: {50-activeStep-6  }
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                            <Button sx={{ color: 'white', mt: '40px' }} size="small" onClick={handleLast} disabled={activeStep >= 44 }>
                                Latest
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        </Box>
                    </Stack>
                </Grid>

            </Grid>
        </div >

    );
}