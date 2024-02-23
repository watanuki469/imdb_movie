import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label, People, Public, Stars, Theaters, VideoLibrary } from "@mui/icons-material";
import ReorderIcon from '@mui/icons-material/Reorder';
import TvIcon from '@mui/icons-material/Tv';
import { AppBar, Box, Button, Container, Dialog, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, Toolbar, Typography } from "@mui/material";
import SearchDashBoard from 'components/dashboard/SearchDashBoard';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Clear, Loop, Search } from "@mui/icons-material";

export function Header() {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleRemoveClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [personName, setPersonName] = useState<string[]>(['en']);
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const { target: { value } } = event;
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
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
    };

    return (
        <>
            <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', p: 1, textAlign: 'center' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {isSearchOpen ? (
                                <Grid container spacing={2} alignContent="center" alignItems="center">
                                    <Grid item xs={12} >
                                        <Stack direction={'row'}>
                                            <SearchDashBoard />
                                            <button style={{
                                                backgroundColor: 'black',
                                                border: 'none'
                                            }} className="clear-icon" onClick={handleCloseSearch}>
                                                <Clear sx={{ color: 'white' }} />
                                            </button>
                                        </Stack>

                                    </Grid>
                                </Grid>
                            ) : (
                                <Stack direction={'row'} sx={{ flexGrow: 1, bgcolor: 'black' }}>
                                    <Button onClick={() => navigate('/')}
                                        sx={{
                                            mr: 1,
                                            bgcolor: 'yellow', color: 'black', textAlign: 'center',
                                            border: 'none', fontWeight: 'bold', fontSize: '24px',
                                            fontFamily: 'sans-serif', height: '50px',
                                            textTransform: 'none', overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                            ':hover': {
                                                bgcolor: 'black',
                                                color: 'blue',
                                                borderColor: 'red'
                                            },
                                        }}>IMDb</Button>

                                    {/* <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                                    <Button
                                        sx={{
                                            alignItems: 'center', bgcolor: 'black', height: '50px', mr: 1,
                                            display: { xs: 'none', md: 'flex' }
                                        }}
                                        onClick={() => handleRemoveClick()}>
                                        < ReorderIcon sx={{ color: 'white' }} />
                                        <>

                                            <Typography sx={{
                                                display: 'flex', alignItems: 'center', color: 'white',
                                                border: 'none',
                                                fontWeight: 'bold',

                                            }}>
                                                Menu
                                            </Typography>
                                        </>
                                    </Button>



                                    {/* // <Grid item xs={6} sx={{ alignItems: 'center', height: '50px', bgcolor: 'black', display: { xs: 'none', md: 'flex' } }} > */}
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '100%' }}>
                                        <SearchDashBoard />

                                    </Box>

                                    {/* // <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' } }} > */}
                                    <Button onClick={() => navigate('/IMDbPro')} sx={{
                                        mr: 1, bgcolor: 'black', color: 'white', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '15px', fontFamily: 'sans-serif', textTransform: 'none',
                                        overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                        whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                        textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                        display: { xs: 'none', md: 'flex' }
                                    }}>IMDb <span style={{ color: 'blue' }}>Pro</span>
                                    </Button>
                                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', padding: '5px' }}>
                                            <FontAwesomeIcon icon={icon({ name: 'calendar-plus' })} style={{ color: 'white', height: '55%' }} />
                                            <>
                                                <Typography sx={{
                                                    display: 'flex', alignItems: 'center', color: 'white', border: 'none', fontWeight: '36px', marginLeft: '10px',
                                                    whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                }}>
                                                    Watch List
                                                </Typography>
                                            </>
                                        </Button>
                                    </Stack>

                                    {/* // <Grid item xs={1} ml="auto" mr="auto" > */}
                                    <Stack direction="row" sx={{ alignItems: 'center' , ml:'auto',}} >
                                        <Search sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleSearchClick} />
                                        <Button sx={{
                                            bgcolor: 'black',
                                            color: 'white',
                                            textAlign: 'center',
                                            border: 'none',
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                            fontFamily: 'sans-serif',
                                            textTransform: 'none',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}>Sign In
                                        </Button>

                                    </Stack>

                                    {/* // <Grid item xs={1} ml="auto" sx={{ flexGrow: 1 }}
                                    // > */}
                                    <Button sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <FormControl sx={{ width: '100%', height: '100%', bgcolor: 'black', color: 'red', mt: '10px' }}>
                                            <Select
                                                label="Agel" value={personName} onChange={handleChange} renderValue={(selected) => selected.join(', ')} MenuProps={MenuProps} variant="standard"
                                                sx={{ color: 'white', textAlign: 'center' }}
                                            >
                                                <MenuItem value="language" disabled>Language</MenuItem>
                                                <MenuItem value="en">English</MenuItem>
                                                <MenuItem value="vn">Vietnamese</MenuItem>
                                                <MenuItem value="jp">Japanese</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Button>
                                    <Button onClick={() => navigate('/')}
                                         sx={{
                                            ml:'auto',
                                            bgcolor: 'yellow', color: 'black', textAlign: 'center',
                                            border: 'none', fontWeight: 'bold', fontSize: '12px', fontFamily: 'sans-serif',
                                            padding: '10px 20px', height: '50px', textTransform: 'none',
                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                            display: { xs: 'flex', md: 'none' },
                                            ':hover': {
                                                bgcolor: 'black',
                                                color: 'blue',
                                                borderColor: 'red'
                                            }
                                        }}>Use App
                                    </Button>


                                </Stack>
                            )}


                        </Toolbar>
                    </Container>
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
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Release Calendar</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/Popular')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Movies</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top Box Office</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Showtimes & Ticked</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Movies News</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>India Movie Spotlight</Typography>
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

                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What's on TV & Streaming</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top 250 TV Shows</Typography>
                            </IconButton>

                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular TV Shows</Typography>
                            </IconButton>

                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>TV News</Typography>
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
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Oscars</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Emmys</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Best Of 2023</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Holiday Picks</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Starmeter Awards</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Awards Central</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Festival Central</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>All Event</Typography>
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
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Born Today</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Celebs</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Celebrity News</Typography>
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
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What to Watch</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Latest Trailers</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Originals</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Picks</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Podcasts</Typography>
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
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Help Center</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Contributor Zone</Typography>
                            </IconButton>
                            <IconButton onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Polls</Typography>
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}