import InfoIcon from '@mui/icons-material/Info';
import { AppBar, Badge, Box, Button, Dialog, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { ActorBio } from 'components/common';
import { actor } from 'models';
import { Fragment, useState } from 'react';
import SingleStarMedia from './SingleStarMedia';
import KnowForPageDashBoard from 'components/dashboard/KnowForPageDashhBoard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryIcon from '@mui/icons-material/Category';
import { PlayArrow } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
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
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Label, People, Public, Stars, Theaters, VideoLibrary } from "@mui/icons-material";

export interface SingleStarPageProps {
    starList: actor[]
}

export default function SingleStarPage({
    starList,

}: SingleStarPageProps) {
    const [showMore, setShowMore] = useState(false);
    const clampValue = showMore ? 10 : 3;

    const handleLoadMore = () => {
        setShowMore(true);
    };

    const MovieImage = ({ imageUrl }: any) => {
        const [imageError, setImageError] = useState(false);

        const handleImageError = () => {
            setImageError(true);
        };
        if (imageUrl === null) {
            return (
                <img src={'data:image/jpeg;base64,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'} />
            );
        }

        // Check if the original image URL is a specific URL
        const isOriginalImage = imageUrl === 'https://m.media-amazon.com/images/S/sash/N1QWYSqAfSJV62Y.png';
        return (
            <div>
                <img
                    key={imageUrl}
                    src={imageError ? 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg' : (isOriginalImage ? 'data:image/jpeg;base64,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' : imageUrl)}
                    alt="movie-img"
                    style={{
                        width: '100%', height: '100%', objectFit: 'initial', backgroundColor: 'black',
                    }}
                    onError={handleImageError}
                />
            </div>
        );
    };
    const MovieBio = ({ partialBio, name }: any) => {
        // Check if partialBio is null
        const isPartialBioNull = partialBio === null;

        // Default text to display when partialBio is null
        const defaultText = `${name} was born in Paris, France, to British parents, Jacqueline Luesby and Chris Watson, both lawyers. She moved to Oxfordshire when she was five, where she attended the Dragon School. From the age of six,${name}
        knew that she wanted to be an actress and, for a number of years, she trained at the Oxford branch of Stagecoach Theatre Arts, a part-time theatre school where she studied singing, dancing and acting. By the age of ten, she had performed and taken the lead in various Stagecoach productions and school plays `

        return (
            <Typography
                sx={{
                    alignSelf: 'flex-start', color: 'white', fontSize: '1rem', fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif', textAlign: 'left', overflow: 'hidden', display: '-webkit-box',
                    WebkitLineClamp: isPartialBioNull ? 'unset' : clampValue,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {isPartialBioNull ? defaultText : partialBio}
            </Typography>
        );
    };
    const [openFAQDialog, setOpenFAQDialog] = useState(false);

    const handleFAQDialogOpen = () => {
        setOpenFAQDialog(true);
    };
    const handleFAQDialogClose = () => {
        setOpenFAQDialog(false);
    };
    const textStyle = {
        borderBottom: '2px solid white',
        paddingBottom: '2px', // Optional: Adjust the padding for better spacing
        display: 'inline-block', // Make sure the border only wraps the text
    };

    const calculateAge = (birthDate: any) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();

        // Check if birthday has occurred this year
        if (today.getMonth() < birthDateObj.getMonth()
            || (today.getMonth() === birthDateObj.getMonth()
                && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        return age;
    };
    const [moviesPlay, setMoviesIsPlay] = useState(true);

    const handleMoviesClick = () => {
        setMoviesIsPlay(!moviesPlay);
    };
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
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
            case 'Popular': return ['Videos', 'Bioraphy', 'Photos', 'Awards', 'News'];
            case 'Credits': return ['People involved in the production', "Whats on TV & Streaming", 'Top Cast & Crew', 'Award Winners', 'Full Cast & Crew'];
            case 'Did You Know': return ['Personals quotes', 'Trivia', 'FAQ', 'IMDb Picks', 'IMDb Podcasts'];
            case 'Related': return ['Collaborations', 'Externals sites', 'Other works', 'Publicity listings'];
            case 'Industry Professionals': return ['More at IMDbPro'];
            case 'Community': return ['Help Center', 'Contributor Zone', 'Polls'];
            default: return [];
        }
    };
    const handleBiographyClick = () => {
        const biographySection = document.getElementById('biography-section');
        if (biographySection) {
            window.scrollTo({
                top: biographySection.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    const handleKnowForClick = () => {
        const biographySection = document.getElementById('knowfor');
        if (biographySection) {
            window.scrollTo({
                top: biographySection.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    const handleAwardClick = () => {
        const biographySection = document.getElementById('awarrd');
        if (biographySection) {
            window.scrollTo({
                top: biographySection.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    const handleFAQClick = () => {
        const biographySection = document.getElementById('faq');
        if (biographySection) {
            window.scrollTo({
                top: biographySection.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    const DrawerList = (item: actor) => {
        return (
            <Box sx={{ width: '100 %' }} role="presentation"
            >
                <Stack direction="row" alignItems="center">
                    <img src={item.image_url} style={{ height: '100%', width: '60px' }} />
                    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack direction="column">
                            <Typography>{item.name}</Typography>
                            <Typography variant="h4">All Topic</Typography>
                        </Stack>
                        <CloseFullscreenIcon onClick={toggleDrawer(false)} sx={{ mr: '25px' }} />
                    </div>
                </Stack>
                <Divider />
                <List>
                    {['Popular', 'Credits', 'Did You Know', 'Related', 'Industry Professionals', 'Community'].map((text, index) => (
                        <Fragment key={text}>
                            {/* <ListItem disablePadding> */}
                            <ListItemButton onClick={() => toggleMenu(text)}>
                                <ListItemIcon>
                                    {index === 0 && <LocalMoviesIcon />}
                                    {index === 1 && <TvIcon />}
                                    {index === 2 && <VideoLibraryIcon />}
                                    {index === 3 && <StarsIcon />}
                                    {index === 4 && <PeopleAltIcon />}
                                    {index === 5 && <PublicIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                {menuOpen && selectedMenu === text ? <ArrowDropUpIcon
                                    sx={{ padding: '10px', cursor: 'pointer' }}
                                    onClick={() => toggleMenu(text)} /> : <ArrowDropDownIcon
                                    sx={{ padding: '10px', cursor: 'pointer' }} onClick={() => toggleMenu(text)}
                                />}
                            </ListItemButton>

                            {/* </ListItem> */}
                            {menuOpen && selectedMenu === text && getMenuContent(text).map((item, index) => (
                                <ListItem disablePadding key={item}>
                                    <ListItemButton >
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary={item} sx={{ cursor: 'pointer' }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Fragment>
                    ))}
                </List>
            </Box>
        )
    };



    return (
        <Box display="flex" alignContent="center" sx={{ width: '80%', m: 'auto', p: 1, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
            <AppBar position="static" sx={{ bgcolor: 'black' }}>
                <div>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" color="inherit"
                                onClick={handleBiographyClick}
                            >
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline'
                                    },
                                }}>Bioraphy</Typography>
                            </IconButton>

                            <IconButton size="large"
                                onClick={handleAwardClick}
                                color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': { textDecoration: 'underline', },
                                }}> Award </Typography>
                            </IconButton>

                            <IconButton size="large" color="inherit" onClick={handleKnowForClick}>
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif",
                                    textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}> Know For </Typography>
                            </IconButton>

                            <IconButton
                                size="large" color="inherit"
                                onClick={handleFAQClick}>
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}>FAQ </Typography>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Typography sx={{
                                    color: 'white', fontSize: "1rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',

                                    },
                                }}> IMDbPro </Typography>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <Button sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                                < CategoryIcon sx={{ color: 'white' }} />
                                <>
                                    <Typography sx={{
                                        alignItems: 'center', color: 'white', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                        ':hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}>
                                        All Topic
                                    </Typography>
                                </>
                            </Button>
                            <IconButton size="large" color="inherit">
                                <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
                            </IconButton>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}>
                                <IconButton
                                    size="large" color="inherit"
                                    sx={{
                                        ':hover': {
                                            textDecoration: 'underline', bgcolor: '#FFA1F5',
                                        },
                                    }} >
                                    <Badge color="error">
                                        <ShareIcon sx={{
                                            ':hover': {
                                                textDecoration: 'underline', bgcolor: '#FFA1F5',
                                            },
                                        }} />
                                    </Badge>
                                </IconButton>
                            </a>

                        </Box>
                        <Button
                            onClick={toggleDrawer(true)}
                            sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', height: '50px' }}>
                            < CategoryIcon sx={{ color: 'white' }} />
                            <>
                                <Typography sx={{
                                    alignItems: 'center', color: 'white', border: 'none',
                                    fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize',
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}>
                                    All Topiccc
                                </Typography>
                            </>
                        </Button>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large" color="inherit"
                                sx={{
                                    ':hover': {
                                        textDecoration: 'underline', bgcolor: '#FFA1F5',
                                    },
                                }} >
                                <Badge color="error">
                                    <ShareIcon sx={{
                                        ':hover': {
                                            textDecoration: 'underline', bgcolor: '#FFA1F5',
                                        },
                                    }} />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </div>

                <Toolbar >
                    {starList.map((item, index) =>
                        <Grid key={index} container spacing={2} >
                            <Grid item xs={6} md={3}>
                                <Stack sx={{ position: 'relative', height: '100%', width: '100%' }}>
                                    <MovieImage imageUrl={item.image_url} />
                                </Stack>
                            </Grid>
                            <Drawer anchor="bottom" open={open}
                            >
                                {DrawerList(item)}
                            </Drawer>
                            <Grid item xs={6} md={9}>
                                <Box sx={{
                                    width: '100%',
                                    padding: { xs: "1rem 0", md: "1rem 2rem" }
                                }}>
                                    <Typography variant='h4' sx={{ color: 'yellow' }}>{item.name}</Typography>
                                    <List
                                        key={index}
                                        sx={{
                                            width: '100%', borderRadius: 2, border: '1px solid', borderColor: 'divider', overflow: 'hidden',
                                        }}
                                    >
                                        <Stack direction={'column'} >
                                            <MovieBio partialBio={item.partial_bio} name={item.name} />
                                            {!showMore && (
                                                <Button onClick={handleLoadMore} sx={{ color: 'white', mt: 1 }}>
                                                    Load More
                                                </Button>
                                            )}
                                        </Stack>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>

                <Toolbar sx={{ mt: '30px' }}>
                    <Stack sx={{ width: '100%' }}>
                        <SingleStarMedia />
                        <KnowForPageDashBoard />
                        <ActorBio />
                        <Stack
                            direction={'row'} sx={{ width: '100%', display: 'flex' }} alignItems={'center'} alignContent={'center'} >
                            {/* <Button sx={{ alignItems: 'flex-start', alignContent: 'flex-start', height: '50px' }}> */}

                            <Stack direction={'row'} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
                                <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '40px' }} orientation="vertical" />
                                <Typography id='faq'
                                    sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                                    FAQ
                                </Typography>

                                <Stack direction={'row'} sx={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'yellow', width: 'auto' }}>
                                </Stack>


                                {/* <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} /> */}
                                <IconButton onClick={handleMoviesClick}>
                                    {moviesPlay ?
                                        <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />
                                        :
                                        <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />}
                                </IconButton>
                            </Stack>

                            {/* </Button> */}
                        </Stack>
                        {moviesPlay ?
                            <Stack direction={'column'} sx={{ mt: 3 }}>
                                {/* <Toolbar sx={{ bgcolor: 'black', border: '2px solid white', marginTop: '10px', marginLeft: '8px' }} >
                                    <Stack sx={{ textAlign: 'left' }} >
                                        <Typography sx={{
                                            fontWeight: 'bold', fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                            fontSize: '1rem', textTransform: 'none', WebkitFontSmoothing: 'auto', fontSmooth: 'auto', lineHeight: '1.5rem',
                                        }}>
                                            FAQm
                                        </Typography>
                                    </Stack>

                                    <Box sx={{ flexGrow: 1 }} />
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <IconButton size="large" color="inherit" onClick={handleFAQDialogOpen}
                                        >
                                            <InfoIcon sx={{ marginRight: '-8px' }} />
                                        </IconButton>
                                        <Dialog open={openFAQDialog} onClose={handleFAQDialogClose} maxWidth={'lg'} fullWidth
                                            keepMounted={true} PaperProps={{
                                                style: {
                                                    backgroundColor: 'white'
                                                },
                                            }}
                                        >
                                            <Stack>
                                                <Button onClick={() => handleFAQDialogClose()} sx={{
                                                    position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                    overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                    whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                    textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                    ':hover': {
                                                        bgcolor: 'yellow', color: 'blue',
                                                    },
                                                    top: 0, right: 0
                                                    // transform: 'translate(1650%, 290%)'
                                                }}>X
                                                </Button>
                                                <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}>
                                                    {starList.map(item => (item.name))}       FAQ
                                                </Typography>
                                                {starList.map(item => (
                                                    <Stack spacing={2} direction={'column'} alignContent={'flex-start'} justifyContent={'flex-start'} sx={{
                                                        textAlign: 'left',
                                                        bgcolor: 'black', color: 'white',

                                                    }} key={item.imdb_id} >
                                                        <Typography sx={textStyle}>How old is  <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>: {calculateAge(item.birth_date)}</Typography>
                                                        <Typography sx={textStyle} >When was <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> born?  : {item.birth_date}</Typography  >
                                                        <Typography sx={textStyle} >Where was <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> born? :{item.birth_place}</Typography >
                                                        <Typography sx={textStyle} >How tall is <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>? :{item.height}</Typography  >
                                                        <Typography sx={textStyle} >What is <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s birth name?   : Google search it ^^</Typography >
                                                        <Typography sx={textStyle} >Does <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> have children?  : Google search it ^^</Typography >
                                                        <Typography sx={textStyle} >Does <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> have siblings? : Google search it ^^</Typography >
                                                        <Typography sx={textStyle} >Who are <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s parents?  : Google search it ^^</Typography >
                                                        <Typography sx={textStyle} >Who are <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s relatives? : Google search it ^^</Typography >
                                                    </Stack>
                                                ))}
                                            </Stack>
                                        </Dialog>
                                    </Box>
                                </Toolbar> */}
                                {starList.map(item => (
                                    <Stack spacing={2} direction={'column'} alignContent={'flex-start'} justifyContent={'flex-start'} sx={{
                                        textAlign: 'left',
                                        bgcolor: 'black', color: 'white',

                                    }} key={item.imdb_id} >
                                        <Typography sx={textStyle}>How old is  <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>: {calculateAge(item.birth_date)}</Typography>
                                        <Typography sx={textStyle} >When was <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> born?  : {item.birth_date}</Typography  >
                                        <Typography sx={textStyle} >Where was <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> born? :{item.birth_place}</Typography >
                                        <Typography sx={textStyle} >How tall is <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>? :{item.height}</Typography  >
                                        {/* <Typography sx={textStyle} >What is <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s birth name?   : Google search it ^^</Typography >
                                        <Typography sx={textStyle} >Does <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> have children?  : Google search it ^^</Typography >
                                        <Typography sx={textStyle} >Does <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span> have siblings? : Google search it ^^</Typography >
                                        <Typography sx={textStyle} >Who are <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s parents?  : Google search it ^^</Typography >
                                        <Typography sx={textStyle} >Who are <span style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</span>'s relatives? : Google search it ^^</Typography > */}
                                    </Stack>
                                ))}
                            </Stack> : <Stack> </Stack>
                        }



                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}