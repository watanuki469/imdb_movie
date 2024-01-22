import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { People, Public, Stars, Theaters, VideoLibrary } from "@mui/icons-material";
import ReorderIcon from '@mui/icons-material/Reorder';
import TvIcon from '@mui/icons-material/Tv';
import { AppBar, Box, Button, Dialog, FormControl, Grid, IconButton, InputLabel, OutlinedInput, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import SearchDashBoard from 'components/dashboard/SearchDashBoard';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';


export function Header() {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleRemoveClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <>
            <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', p: 3, textAlign: 'center' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Grid container spacing={2} alignContent="center" alignItems="center">
                        <Grid item xs={1} >
                            <Button onClick={() => navigate('/')}
                                fullWidth sx={{
                                    bgcolor: 'yellow',
                                    color: 'black',
                                    textAlign: 'center',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '36px',
                                    fontFamily: 'sans-serif',
                                    padding: '10px 20px',
                                    height: '50px',
                                    textTransform: 'none',
                                    overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                    whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                    textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                    ':hover': {
                                        bgcolor: 'black',
                                        color: 'blue',
                                        borderColor: 'red'
                                    },


                                }}>IMDb</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px' }}
                                onClick={() => handleRemoveClick()}>
                                < ReorderIcon sx={{ color: 'white' }} />
                                <>
                                    <span style={{ marginRight: '1rem' }}></span>
                                    <Typography sx={{
                                        display: 'flex', alignItems: 'center', color: 'white',
                                        border: 'none',
                                        fontWeight: 'bold',

                                    }}>
                                        Menu
                                    </Typography>
                                </>
                            </Button>

                        </Grid>

                        <Grid item xs={6} sx={{ alignItems: 'center', height: '50px', display: 'flex' }} >
                            <SearchDashBoard />
                        </Grid>
                        <Grid item xs={1} >
                            <Button onClick={() => navigate('/IMDbPro')} fullWidth sx={{
                                bgcolor: 'black',
                                color: 'white',
                                textAlign: 'center',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '24px',
                                fontFamily: 'sans-serif',
                                padding: '10px 20px',
                                height: '50px',
                                textTransform: 'none',
                                overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                            }}>IMDb <span style={{ color: 'blue' }}>Pro</span>
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', padding: '10px' }}>
                                <FontAwesomeIcon icon={icon({ name: 'calendar-plus' })} style={{ color: 'white', height: '70%' }} />;
                                <>
                                    <Typography sx={{
                                        display: 'flex', alignItems: 'center', color: 'white',
                                        border: 'none',
                                        fontWeight: 'bold',
                                        marginLeft: '10px',
                                        marginTop: '10px',
                                    }}>
                                        Watch List
                                    </Typography>
                                </>
                            </Button>

                        </Grid>

                        <Grid item xs={1} >
                            <Button fullWidth sx={{
                                bgcolor: 'black',
                                color: 'white',
                                textAlign: 'center',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '24px',
                                fontFamily: 'sans-serif',
                                padding: '10px 20px',
                                height: '50px',
                                textTransform: 'none',
                                overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                textOverflow: 'ellipsis', // Hiển thị dấu elipsis

                            }}>Sign In</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <FormControl fullWidth sx={{ m: 1, width: 200, bgcolor: 'black', color: 'red' }} >
                                <InputLabel id="demo-multiple-checkbox-label"
                                    sx={{ color: 'white', textAlign: 'center', alignContent: "center" }}>EN</InputLabel>

                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    // multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    sx={{ color: 'white' }}
                                >
                                </Select>
                            </FormControl>

                        </Grid >

                    </Grid >
                </AppBar >
            </Box >
            {/* Remove dialog */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: 'black'
                    }
                }}
            >
                <Grid sx={{ display: 'flex' }} container rowSpacing={3}>
                    <Grid item xs={6} sx={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <Button onClick={() => navigate('/')} sx={{
                            marginTop: '3rem',
                            bgcolor: 'yellow',
                            color: 'black',
                            textAlign: 'center',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '36px',
                            fontFamily: 'sans-serif',
                            padding: '10px 20px',
                            height: '50px',
                            textTransform: 'none',
                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                            ':hover': {
                                bgcolor: 'yellow',
                                color: 'blue',
                            },
                        }}>IMDb</Button>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                        <Button onClick={() => handleClose()} sx={{
                            marginTop: '3rem',
                            bgcolor: 'yellow',
                            color: 'black',
                            textAlign: 'center',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '36px',
                            fontFamily: 'sans-serif',
                            padding: 'auto',
                            height: '50px',
                            textTransform: 'none',
                            borderRadius: '100%',
                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis(...)
                            ':hover': {
                                bgcolor: 'yellow',
                                color: 'blue',
                            },


                        }}>X</Button>
                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button
                            fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < Theaters fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none',
                                    fontWeight: 'bold',

                                }}>
                                    Movies
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <IconButton color="inherit" sx={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Release Calendar</Typography>
                                {/* <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top Movies</Typography> */}
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/Popular')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Movies</Typography>
                                {/* <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Browse Movies By Genre</Typography> */}
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top Box Office</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Showtimes & Ticked</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Movies News</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>India Movie Spotlight</Typography>
                            </IconButton>
                        </Stack>

                    </Grid>

                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 7 }}>
                            < TvIcon fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none',
                                    fontWeight: 'bold',

                                }}>
                                    TV Show
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>

                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What's on TV & Streaming</Typography>
                            </IconButton>

                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top 250 TV Shows</Typography>
                            </IconButton>

                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular TV Shows</Typography>
                                {/* <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Browse TV Shows By Genre</Typography> */}

                            </IconButton>

                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>TV News</Typography>

                            </IconButton>

                        </Stack>

                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < Stars fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none',
                                    fontWeight: 'bold',

                                }}>
                                    Awards & Event
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Oscars</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Emmys</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Best Of 2023</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Holiday Picks</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Starmeter Awards</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Awards Central</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Festival Central</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>All Event</Typography>
                            </IconButton>
                        </Stack>


                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < People fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none',
                                    fontWeight: 'bold',

                                }}>
                                    Celebs
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Born Today</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Celebs</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Celebrity News</Typography>
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: -7 }}>
                            < VideoLibrary fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white', border: 'none', fontWeight: 'bold',
                                }}>
                                    Watch
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What to Watch</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Latest Trailers</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Originals</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Picks</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Podcasts</Typography>
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < Public fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none',
                                    fontWeight: 'bold',

                                }}>
                                    Community
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Help Center</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Contributor Zone</Typography>
                            </IconButton>
                            <IconButton color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography onClick={() => navigate('/NotFound')} variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Polls</Typography>
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}