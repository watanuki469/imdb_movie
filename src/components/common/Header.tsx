import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Avatar, Box, Button, Container, Dialog, Divider, Drawer, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, Toolbar, Typography } from "@mui/material";
import SearchDashBoard from 'components/dashboard/SearchDashBoard';
import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Clear, Loop, Search } from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StarsIcon from '@mui/icons-material/Stars';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ReorderIcon from '@mui/icons-material/Reorder';
import TvIcon from '@mui/icons-material/Tv';
import { Label, People, Public, Stars, Theaters, VideoLibrary } from "@mui/icons-material";
import { login, logout } from 'features/auth/authSlice';
import { useAppDispatch } from 'app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';


export function Header() {
    const dispatch = useAppDispatch();
    dispatch(login({ username: '', password: '', }));

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
    const drawerWidth = 280;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const [openLang, setOpenLang] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDrawer = () => {
        setOpenLang(!openLang);
    };

    const handleLanguageSelect = (language: any) => {
        setSelectedLanguage(language);
        toggleDrawer();
    };

    const languageList = ['English', 'Japanese', 'Vietnamese'];
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const toggleMenu = (menu: any) => {
        if (selectedMenu === menu) {
            setSelectedMenu('');
            setMenuOpen(false);
        } else {
            setSelectedMenu(menu);
            setMenuOpen(true);
        }
    };

    const getMenuContent = (menu: any) => {
        switch (menu) {
            case 'Movies':
                return ['Release Calendar', 'Most Popular Movies', 'Top Box Office'
                    , 'Showtimes & Ticked', 'Movies News', 'India Movie Spotlight'];
            case 'TV Shows':
                return ['Whats on TV & Streaming', 'Top 250 TV Shows', 'Most Popular TV Shows', 'TV News'];
            case 'Watch':
                return ['What to Watch', 'Latest Trailers', 'IMDb Originals', 'IMDb Picks', 'IMDb Podcasts'];
            case 'Awards & Events':
                return ['Oscars', 'Emmys', 'Best Of 2023', 'Holiday Picks', 'Starmeter Awards', 'Awards Central', 'Festival Central', 'All Event'];
            case 'Celebs':
                return ['Born Today', 'Most Popular Celebs', 'Celebrity News'];
            case 'Community':
                return ['Help Center', 'Contributor Zone', 'Polls'];
            default:
                return [];
        }
    };

    const handleItemClick = (item: any) => {
        switch (selectedMenu) {
            case 'Movies':
                if (item === 'Release Calendar') {
                    navigate('/NotFound');
                } else if (item === 'Most Popular Movies') {
                    navigate('/Popular');
                } else if (item === 'Top Box Office') {
                    navigate('/NotFound');
                } else if (item === 'Showtimes & Ticked') {
                    navigate('/NotFound');
                } else if (item === 'Movies News') {
                    navigate('/NotFound');
                } else if (item === 'India Movie Spotlight') {
                    navigate('/IndiaMovieSpotlight');
                } else {
                    navigate('/NotFound');
                }
                break;

            case 'TV Shows':
                if (item === 'Whats on TV & Streaming') {
                    navigate('/TVStreaming');
                } else if (item === 'Top 250 TV Shows') {
                    navigate('/Top250TVShows');
                } else if (item === 'Most Popular TV Shows') {
                    navigate('/PopularTVShows');
                } else if (item === 'TV News') {
                    navigate('/TVNews');
                } else {
                    navigate('/NotFound');
                }
                break;

            case 'Watch':
                if (item === 'What to Watch') {
                    navigate('/WhatToWatch');
                } else if (item === 'Latest Trailers') {
                    navigate('/LatestTrailers');
                } else if (item === 'IMDb Originals') {
                    navigate('/IMDbOriginals');
                } else if (item === 'IMDb Picks') {
                    navigate('/IMDbPicks');
                } else if (item === 'IMDb Podcasts') {
                    navigate('/IMDbPodcasts');
                } else {
                    navigate('/NotFound');
                }
                break;

            case 'Awards & Events':
                if (item === 'Oscars') {
                    navigate('/Oscars');
                } else if (item === 'Emmys') {
                    navigate('/Emmys');
                } else if (item === 'Best Of 2023') {
                    navigate('/BestOf2023');
                } else if (item === 'Holiday Picks') {
                    navigate('/HolidayPicks');
                } else if (item === 'Starmeter Awards') {
                    navigate('/StarmeterAwards');
                } else if (item === 'Awards Central') {
                    navigate('/AwardsCentral');
                } else if (item === 'Festival Central') {
                    navigate('/FestivalCentral');
                } else if (item === 'All Event') {
                    navigate('/AllEvent');
                } else {
                    navigate('/NotFound');
                }
                break;

            case 'Celebs':
                if (item === 'Born Today') {
                    navigate('/BornToday');
                } else if (item === 'Most Popular Celebs') {
                    navigate('/PopularCelebs');
                } else if (item === 'Celebrity News') {
                    navigate('/CelebrityNews');
                } else {
                    navigate('/NotFound');
                }
                break;

            case 'Community':
                if (item === 'Help Center') {
                    navigate('/HelpCenter');
                } else if (item === 'Contributor Zone') {
                    navigate('/ContributorZone');
                } else if (item === 'Polls') {
                    navigate('/Polls');
                } else {
                    navigate('/NotFound');
                }
                break;

            default:
                break;
        }
        setMenuOpen(false);
    };
    const handleLogout = () => {
        dispatch(logout());
        navigate('/Login');
    };
    const [email, setEmail] = useState(localStorage.getItem('email') || ''); // Lấy giá trị email từ local storage nếu có
    const stringToColor = (str: any) => {
        let hash = 0;
        let i;

        for (i = 0; i < str.length; i += 1) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    };
    const [anchorUserEl, setAnchorUserEl] = useState<null | HTMLElement>(null);
    const openUser = Boolean(anchorUserEl);
    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorUserEl(event.currentTarget);
    };
    const handleUserClose = () => {
        setAnchorUserEl(null);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Movies', 'TV Shows', 'Watch', 'Awards & Events', 'Celebs', 'Community'].map((text, index) => (
                    <Fragment key={text}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => toggleMenu(text)}>
                                <ListItemIcon>
                                    {index === 0 && <LocalMoviesIcon />}   {index === 1 && <TvIcon />}
                                    {index === 2 && <VideoLibraryIcon />}     {index === 3 && <StarsIcon />}
                                    {index === 4 && <PeopleAltIcon />}       {index === 5 && <PublicIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                {menuOpen && selectedMenu === text ? <ArrowDropUpIcon
                                    sx={{ padding: '10px', cursor: 'pointer' }}
                                    onClick={() => toggleMenu(text)} /> : <ArrowDropDownIcon
                                    sx={{ padding: '10px', cursor: 'pointer' }} onClick={() => toggleMenu(text)}
                                />}
                            </ListItemButton>

                        </ListItem>
                        {menuOpen && selectedMenu === text && getMenuContent(text).map((item, index) => (
                            // <ListItem disablePadding onClick={() => handleItemClick(item)}>
                            //     <ListItemIcon></ListItemIcon>
                            //     <ListItem key={index} >
                            //         <ListItemText primary={item} sx={{ cursor: 'pointer' }} />
                            //     </ListItem>
                            // </ListItem>
                            <ListItem disablePadding key={item}>
                                <ListItemButton onClick={() => handleItemClick(item)}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary={item} sx={{ cursor: 'pointer' }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Fragment>
                ))}
            </List>
            <Divider />
            <List sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: "large", fontWeight: 'bold' }}>IMDbPro</Typography>
                    <Typography>For industry Professionals</Typography>
                </Box>
                <LaunchIcon sx={{ padding: '10px' }} />
            </List>
            <List sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: 'large', fontWeight: 'bold' }}>Language</Typography>
                    <Typography>{selectedLanguage}</Typography>
                </Box>
                <ArrowDropDownIcon sx={{ padding: '10px', cursor: 'pointer' }} onClick={toggleDrawer} />
            </List>
            <Drawer anchor="left" open={openLang} onClose={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}>
                <List>
                    {languageList.map((language) => (
                        <Typography key={language} sx={{ cursor: 'pointer', padding: '10px' }} onClick={() => handleLanguageSelect(language)}>
                            {language}
                        </Typography>
                    ))}
                </List>
            </Drawer>
        </div>
    );

    return (
        <>
            <Box display="flex" alignContent="center" sx={{ m: 'auto', p: 1, textAlign: 'center' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {isSearchOpen ? (
                                <Grid container spacing={2} alignContent="center" alignItems="center">
                                    <Grid item xs={12} >
                                        <Stack direction={'row'}>
                                            <SearchDashBoard />
                                            <button style={{
                                                backgroundColor: 'black', border: 'none'
                                            }} className="clear-icon" onClick={handleCloseSearch}>
                                                <Clear sx={{ color: 'white' }} />
                                            </button>
                                        </Stack>

                                    </Grid>
                                </Grid>
                            ) : (
                                <Stack direction={'row'} sx={{ flexGrow: 1, bgcolor: 'black' }}>
                                    <Stack direction={'row'} sx={{ alignItems: 'center', }}>
                                        <IconButton
                                            color="inherit" aria-label="open drawer"
                                            edge="start"
                                            onClick={handleDrawerToggle}
                                            sx={{ mr: 2, display: { sm: 'none' } }}
                                        >
                                            <ReorderIcon />
                                        </IconButton>
                                        <Box
                                            component="nav"
                                            sx={{
                                                width: { sm: drawerWidth }, flexShrink: { sm: 0 },
                                                display: { xs: 'flex', sm: 'none' },
                                            }}
                                            aria-label="mailbox folders"
                                        >
                                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                                            <Drawer
                                                // container={container}
                                                variant="temporary"
                                                open={mobileOpen}
                                                onTransitionEnd={handleDrawerTransitionEnd}
                                                onClose={handleDrawerClose}
                                                ModalProps={{
                                                    keepMounted: true, // Better open performance on mobile.
                                                }}
                                                sx={{
                                                    display: { xs: 'block', sm: 'none', md: 'none' },
                                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                                }}
                                            >
                                                {drawer}
                                            </Drawer>
                                            <Drawer
                                                variant="permanent"
                                                sx={{
                                                    display: { xs: 'none', sm: 'block' },
                                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                                }}
                                                open
                                            >
                                                {drawer}
                                            </Drawer>
                                        </Box>
                                        <Button onClick={() => navigate('/')}
                                            sx={{
                                                mr: 1,
                                                bgcolor: 'yellow', color: 'black', textAlign: 'center',
                                                border: 'none', fontWeight: 'bold', fontSize: '20px',
                                                fontFamily: 'sans-serif', height: '50px',
                                                textTransform: 'none', overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                ':hover': {
                                                    bgcolor: 'black',
                                                    color: 'blue', borderColor: 'red'
                                                }
                                            }}>IMDb</Button>
                                    </Stack>


                                    <Button
                                        sx={{
                                            alignItems: 'center', bgcolor: 'black', height: '50px', mr: 1,
                                            display: { xs: 'none', md: 'flex' }
                                        }}
                                        onClick={() => handleRemoveClick()}>
                                        < ReorderIcon sx={{ color: 'white' }} />

                                        <Typography sx={{
                                            display: 'flex', alignItems: 'center', color: 'white',
                                            border: 'none', fontWeight: 'bold',
                                        }}>
                                            Menu
                                        </Typography>

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
                                        <Button  onClick={() => navigate('/WatchList')} sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', padding: '5px' }}>
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
                                    <Button
                                        sx={{ display: { xs: 'none', md: 'flex' } }}
                                    >
                                        <FormControl sx={{
                                            width: '100%', height: '100%', bgcolor: 'black', color: 'red', mt: '10px',
                                            textAlign: 'center', alignContent: 'center', alignItems: 'center',
                                        }}>
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
                                    {/* // <Grid item xs={1} ml="auto" mr="auto" > */}
                                    <Stack direction="row" sx={{ alignItems: 'center', ml: 'auto', }} >
                                        <Search sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleSearchClick} />
                                        {/* <Button
                                            onClick={handleLogout}
                                            sx={{
                                                bgcolor: 'black', color: 'white', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '16px', fontFamily: 'sans-serif', textTransform: 'none', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                                            }}>
                                            <Avatar
                                                sx={{
                                                    backgroundColor: stringToColor(email),
                                                    width: 40,
                                                    height: 40
                                                }}
                                                children={`${email.split(" ")[0][0]}`}
                                            />
                                        </Button> */}
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleUserClick}
                                        >
                                            <Avatar
                                                sx={{
                                                    backgroundColor: stringToColor(email),
                                                    width: 40,
                                                    height: 40
                                                }}
                                                children={`${email.split(" ")[0][0]}`}
                                            />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorUserEl}
                                            open={openUser}
                                            onClose={handleUserClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleUserClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleUserClose}>Watch List</MenuItem>
                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                        </Menu>


                                    </Stack>

                                    {/* // <Grid item xs={1} ml="auto" sx={{ flexGrow: 1 }}
                                    // > */}

                                    <Button onClick={() => navigate('/')}
                                        sx={{
                                            ml: 'auto',
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
                fullScreen open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: 'black'
                    }
                }}
            >
                <Grid sx={{ display: 'flex' }} container rowSpacing={3}>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                        <Button onClick={() => navigate('/')} sx={{
                            marginTop: '3rem', bgcolor: 'yellow', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: '10px 20px', height: '50px', textTransform: 'none',
                            ':hover': {
                                bgcolor: 'yellow',
                                color: 'blue',
                            },
                        }}>IMDb</Button>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'left' }}>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                        <Button onClick={() => handleClose()} sx={{
                            marginTop: '3rem', bgcolor: 'yellow', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                            ':hover': {
                                bgcolor: 'yellow', color: 'blue',
                            },


                        }}>X</Button>
                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center', cursor: 'pointer' }}>
                        <Button
                            fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < Theaters fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <>
                                <span style={{ marginRight: '1rem' }}></span>
                                <Typography variant='h3' sx={{
                                    display: 'flex', alignItems: 'center', color: 'white',
                                    border: 'none', fontWeight: 'bold',
                                }}>  Movies
                                </Typography>

                            </>
                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <Box onClick={() => navigate('/NotFound')} sx={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Release Calendar</Typography>
                            </Box>
                            <Box onClick={() => navigate('/Popular')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Movies</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top Box Office</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Showtimes & Ticked</Typography>
                            </Box>
                            {/* <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Movies News</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>India Movie Spotlight</Typography>
                            </Box> */}
                        </Stack>

                    </Grid>

                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
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
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What's on TV & Streaming</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Top 250 TV Shows</Typography>
                            </Box>

                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular TV Shows</Typography>
                            </Box>

                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>TV News</Typography>
                            </Box>

                        </Stack>

                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
                            < Stars fontSize="large" sx={{ color: 'yellow', height: '500px' }} />
                            <span style={{ marginRight: '1rem' }}></span>

                            <Typography variant='h4' sx={{
                                display: 'flex', alignItems: 'center', color: 'white',
                                border: 'none',
                                fontWeight: 'bold',

                            }}>
                                Awards & Event
                            </Typography>


                        </Button>
                        <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Oscars</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Emmys</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Best Of 2023</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Holiday Picks</Typography>
                            </Box>
                            {/* <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Starmeter Awards</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Awards Central</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Festival Central</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>All Event</Typography>
                            </Box> */}
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
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Born Today</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Most Popular Celebs</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Celebrity News</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sx={{ color: 'white', alignContent: 'center', textAlign: 'center' }}>
                        <Button fullWidth sx={{ display: 'flex', alignItems: 'center', bgcolor: 'black', height: '50px', mt: 3 }}>
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
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>What to Watch</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Latest Trailers</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')}  sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Originals</Typography>
                            </Box>
                            {/* <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Picks</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>IMDb Podcasts</Typography>
                            </Box> */}
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
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Help Center</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Contributor Zone</Typography>
                            </Box>
                            <Box onClick={() => navigate('/NotFound')} sx={{ ':hover': { textDecoration: 'underline' } }}>
                                <Typography variant='h5' sx={{ color: 'white', alignContent: 'center', textAlign: 'center', mt: 2 }}>Polls</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Dialog >
        </>
    );
}