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

    return (
        <div>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Button fullWidth sx={{
                    bgcolor: 'black', height: '50px', padding: '10px', justifyContent: 'flex-start',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    <Diversity2Icon sx={{ color: 'yellow', height: '100%' }} />;
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
                <Grid item xs={12}>
                    <Stack direction='row' spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Button sx={{ color: 'white' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                               Back

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
                                {uniquePopurarityItemList.slice(0, 6).map((item, index) => (
                                    <Top10PageItem key={index} popurarityItemList={uniquePopurarityItemList} number={index} activeStep={activeStep} />
                                ))}
                            </Stack>
                        </Box>
                        <Box>
                            <Button sx={{ color: 'white' }} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                            <Button sx={{ color: 'white', mt: '40px'  }} size="small" onClick={handleLast} disabled={activeStep === maxSteps - 1}>
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