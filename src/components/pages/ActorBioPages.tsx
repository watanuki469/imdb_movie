import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CategoryIcon from '@mui/icons-material/Category';
import ShareIcon from '@mui/icons-material/Share';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { AppBar, Badge, Box, Button, Dialog, Divider, Grid, IconButton, List, Popper, Stack, Toolbar, Typography } from "@mui/material";
import { actor, star } from 'models';
import { ReactNode, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SingleStarMedia from './SingleStarMedia';
import { PlayArrow } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';

export interface SingleStarPageProps {
    starList: star[]
}

export default function ActorBioPages({
    starList,

}: SingleStarPageProps) {
    const getRandomNumber = () => {
        // Generate a random number between 1 and 100
        return Math.floor(Math.random() * 100) + 1;
    };
    let navigate = useNavigate();
    const randomScore = getRandomNumber();
    const [openGenDialog, setOpenGenDialog] = useState(false);

    const handleDiaGenlogOpen = () => {
        setOpenGenDialog(true);
    };
    const handleDiaGenlogClose = () => {
        setOpenGenDialog(false);
    };

    const [openQuotesDialog, setOpenQuotesDialog] = useState(false);

    const handleDiaQuoteslogOpen = () => {
        setOpenQuotesDialog(true);
    };
    const handleDiaQuoteslogClose = () => {
        setOpenQuotesDialog(false);
    };


    const [openSalaryDialog, setOpenSalaryDDialog] = useState(false);

    const handleSalaryDialogOpen = () => {
        setOpenSalaryDDialog(true);
    };
    const handleDiaSalaryDialogClose = () => {
        setOpenSalaryDDialog(false);
    };

    const [openTradeDialog, setOpenTradeDialog] = useState(false);

    const handleTradeDialogOpen = () => {
        setOpenTradeDialog(true);
    };
    const handleTradeDialogClose = () => {
        setOpenTradeDialog(false);
    };

    const [openSpouseDialog, setOpenSpouseDialog] = useState(false);

    const handleSpouseDialogOpen = () => {
        setOpenSpouseDialog(true);
    };
    const handleSpouseDialogClose = () => {
        setOpenSpouseDialog(false);
    };

    return (
        <div>
            <Box display="flex" alignContent="center" sx={{ width: '100%', m: 'auto', p: 1, textAlign: 'center', flexGrow: 1, bgcolor: 'black' }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Stack direction={'column'}>
                        <Stack alignContent={'flex-start'} justifyContent={'flex-start'} >
                            <AppBar position="static" sx={{ bgcolor: 'black' }}>
                                {starList.map(item => (
                                    <Stack>
                                        <Toolbar sx={{ bgcolor: 'black', border: '2px solid white' }}>
                                            <Stack sx={{ textAlign: 'left' }} >
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    WebkitFontSmoothing: 'auto',
                                                    fontSmooth: 'auto',
                                                    lineHeight: '1.5rem',
                                                }}>
                                                    Trivia
                                                </Typography>
                                                {/* <Typography>
                                                {item.biography.trivia.length > 0 ? item.biography.trivia[0].split('.')[0] : ''}
                                            </Typography> */}

                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                >
                                                    <InfoIcon onClick={handleDiaGenlogOpen} />
                                                </IconButton>
                                                <Dialog open={openGenDialog} onClose={handleDiaGenlogClose} maxWidth={'lg'}
                                                    keepMounted={true} fullWidth

                                                    PaperProps={{
                                                        style: {
                                                            backgroundColor: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Stack>
                                                        <Button onClick={() => handleDiaGenlogClose()} sx={{
                                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                            ':hover': {
                                                                bgcolor: 'yellow',
                                                                color: 'blue',
                                                            },
                                                            top: 0,
                                                            right: 0
                                                            // transform: 'translate(1650%, 290%)'
                                                        }}>X
                                                        </Button>
                                                        <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}> {starList.map(item => (
                                                            item.actor.name
                                                        ))} Trivia</Typography>
                                                        {starList.map(item =>
                                                            <Typography key={item.actor.imdb_id} sx={{ textAlign: 'left' }}>
                                                                <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', }} >
                                                                    {Array.isArray(item.biography.trivia) && item.biography.trivia.length > 0
                                                                        ? item.biography.trivia.map((triviaItem, index) => (
                                                                            <Typography sx={{ margin: '18px' }}>
                                                                                <span
                                                                                    style={{
                                                                                        borderBottom: '2px solid white',
                                                                                        paddingBottom: '2px', // Optional: Adjust the padding for better spacing
                                                                                        display: 'inline-block', // Make sure the border only wraps the text

                                                                                    }}
                                                                                >
                                                                                    {index}. {triviaItem}

                                                                                </span>

                                                                            </Typography>

                                                                        ))
                                                                        : 'No trivia available'}
                                                                </AppBar>
                                                            </Typography>
                                                        )}
                                                    </Stack>
                                                </Dialog>
                                            </Box>
                                        </Toolbar>
                                        <Toolbar sx={{ bgcolor: 'black', border: '2px solid white', marginTop: '10px' }} >
                                            <Stack sx={{ textAlign: 'left' }} >
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    WebkitFontSmoothing: 'auto',
                                                    fontSmooth: 'auto',
                                                    lineHeight: '1.5rem',
                                                }}>
                                                    Quotes
                                                </Typography>
                                                {/* <Typography>
                                             {item.biography.trivia.length > 0 ? item.biography.trivia[0].split('.')[0] : ''}
                                         </Typography> */}

                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                >
                                                    <InfoIcon onClick={handleDiaQuoteslogOpen} />
                                                </IconButton>
                                                <Dialog open={openQuotesDialog} onClose={handleDiaQuoteslogClose} maxWidth={'lg'}
                                                    keepMounted={true} fullWidth

                                                    PaperProps={{
                                                        style: {
                                                            backgroundColor: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Stack>
                                                        <Button onClick={() => handleDiaQuoteslogClose()} sx={{
                                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                            ':hover': {
                                                                bgcolor: 'yellow',
                                                                color: 'blue',
                                                            },
                                                            top: 0,
                                                            right: 0
                                                            // transform: 'translate(1650%, 290%)'
                                                        }}>X
                                                        </Button>
                                                        <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}> {starList.map(item => (
                                                            item.actor.name
                                                        ))} Quotes</Typography>
                                                        {starList.map(item =>
                                                            <Typography key={item.actor.imdb_id} sx={{ textAlign: 'left' }}>
                                                                <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', }} >
                                                                    {Array.isArray(item.biography.quotes) && item.biography.quotes.length > 0
                                                                        ? item.biography.quotes.map((triviaItem, index) => (
                                                                            <Typography sx={{ margin: '18px' }}>
                                                                                <span
                                                                                    style={{
                                                                                        borderBottom: '2px solid white',
                                                                                        paddingBottom: '2px', // Optional: Adjust the padding for better spacing
                                                                                        display: 'inline-block', // Make sure the border only wraps the text

                                                                                    }}
                                                                                >
                                                                                    {index}. {triviaItem}

                                                                                </span>

                                                                            </Typography>

                                                                        ))
                                                                        : 'No trivia available'}
                                                                </AppBar>
                                                            </Typography>
                                                        )}
                                                    </Stack>
                                                </Dialog>
                                            </Box>
                                        </Toolbar>
                                        <Toolbar sx={{ bgcolor: 'black', border: '2px solid white', marginTop: '10px' }} >
                                            <Stack sx={{ textAlign: 'left' }} >
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    WebkitFontSmoothing: 'auto',
                                                    fontSmooth: 'auto',
                                                    lineHeight: '1.5rem',
                                                }}>
                                                    Salaries
                                                </Typography>
                                                {/* <Typography>
                                             {item.biography.trivia.length > 0 ? item.biography.trivia[0].split('.')[0] : ''}
                                         </Typography> */}

                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                >
                                                    <InfoIcon onClick={handleSalaryDialogOpen} />
                                                </IconButton>
                                                <Dialog open={openSalaryDialog} onClose={handleDiaSalaryDialogClose} maxWidth={'lg'} fullWidth
                                                    keepMounted={true}

                                                    PaperProps={{
                                                        style: {
                                                            backgroundColor: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Stack>
                                                        <Button onClick={() => handleDiaSalaryDialogClose()} sx={{
                                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                            ':hover': {
                                                                bgcolor: 'yellow',
                                                                color: 'blue',
                                                            },
                                                            top: 0,
                                                            right: 0
                                                            // transform: 'translate(1650%, 290%)'
                                                        }}>X
                                                        </Button>
                                                        <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}> {starList.map(item => (
                                                            item.actor.name
                                                        ))} Salaries</Typography>
                                                        {starList.map(item =>
                                                            <Typography key={item.actor.imdb_id} sx={{ textAlign: 'left' }}>
                                                                <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', }} >
                                                                    {Object.keys(item.biography.salary).length > 0
                                                                        ? Object.entries(item.biography.salary).map(([key, value], index) => (
                                                                            <Typography key={index} sx={{ margin: '18px' }}>
                                                                                <span
                                                                                    style={{
                                                                                        borderBottom: '2px solid white',
                                                                                        paddingBottom: '2px', // Optional: Adjust the padding for better spacing
                                                                                        display: 'inline-block', // Make sure the border only wraps the text
                                                                                    }}
                                                                                >
                                                                                    {index}. {key}:  {value as ReactNode}
                                                                                </span>
                                                                            </Typography>
                                                                        ))
                                                                        : 'No salary information available'}
                                                                </AppBar>
                                                            </Typography>
                                                        )}
                                                    </Stack>
                                                </Dialog>
                                            </Box>
                                        </Toolbar>
                                        <Toolbar sx={{ bgcolor: 'black', border: '2px solid white', marginTop: '10px' }} >
                                            <Stack sx={{ textAlign: 'left' }} >
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    WebkitFontSmoothing: 'auto',
                                                    fontSmooth: 'auto',
                                                    lineHeight: '1.5rem',
                                                }}>
                                                    Trade Marks
                                                </Typography>
                                                {/* <Typography>
                                             {item.biography.trivia.length > 0 ? item.biography.trivia[0].split('.')[0] : ''}
                                         </Typography> */}

                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                >
                                                    <InfoIcon onClick={handleTradeDialogOpen} />
                                                </IconButton>
                                                <Dialog open={openTradeDialog} onClose={handleTradeDialogClose} maxWidth={'lg'}
                                                    keepMounted={true} fullWidth

                                                    PaperProps={{
                                                        style: {
                                                            backgroundColor: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Stack>
                                                        <Button onClick={() => handleTradeDialogClose()} sx={{
                                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                            ':hover': {
                                                                bgcolor: 'yellow',
                                                                color: 'blue',
                                                            },
                                                            top: 0,
                                                            right: 0
                                                            // transform: 'translate(1650%, 290%)'
                                                        }}>X
                                                        </Button>
                                                        <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}> {starList.map(item => (
                                                            item.actor.name
                                                        ))} Trade Marks</Typography>
                                                        {starList.map(item =>
                                                            <Typography key={item.actor.imdb_id} sx={{ textAlign: 'left' }}>
                                                                <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', }} >
                                                                    {Array.isArray(item.biography.trademarks) && item.biography.trademarks.length > 0
                                                                        ? item.biography.trademarks.map((triviaItem, index) => (
                                                                            <Typography sx={{ margin: '18px' }}>
                                                                                <span
                                                                                    style={{
                                                                                        borderBottom: '2px solid white',
                                                                                        paddingBottom: '2px', // Optional: Adjust the padding for better spacing
                                                                                        display: 'inline-block', // Make sure the border only wraps the text

                                                                                    }}
                                                                                >
                                                                                    {index}. {triviaItem}

                                                                                </span>

                                                                            </Typography>

                                                                        ))
                                                                        : 'No trade mark available'}
                                                                </AppBar>
                                                            </Typography>
                                                        )}
                                                    </Stack>
                                                </Dialog>
                                            </Box>
                                        </Toolbar>
                                        <Toolbar sx={{ bgcolor: 'black', border: '2px solid white', marginTop: '10px' }} >
                                            <Stack sx={{ textAlign: 'left' }} >
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    WebkitFontSmoothing: 'auto',
                                                    fontSmooth: 'auto',
                                                    lineHeight: '1.5rem',
                                                }}>
                                                    Spouse
                                                </Typography>
                                                {/* <Typography>
                                             {item.biography.trivia.length > 0 ? item.biography.trivia[0].split('.')[0] : ''}
                                         </Typography> */}

                                            </Stack>

                                            <Box sx={{ flexGrow: 1 }} />
                                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                >
                                                    <InfoIcon onClick={handleSpouseDialogOpen} />
                                                </IconButton>
                                                <Dialog open={openSpouseDialog} onClose={handleSpouseDialogClose} maxWidth={'lg'} fullWidth
                                                    keepMounted={true}

                                                    PaperProps={{
                                                        style: {
                                                            backgroundColor: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Stack>
                                                        <Button onClick={() => handleSpouseDialogClose()} sx={{
                                                            position: 'absolute', bgcolor: 'white', color: 'black', textAlign: 'center', border: 'none', fontWeight: 'bold', fontSize: '36px', fontFamily: 'sans-serif', padding: 'auto', height: '50px', textTransform: 'none', borderRadius: '100%',
                                                            overflow: 'hidden', // Tránh chữ tràn ra ngoài
                                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                                            textOverflow: 'ellipsis', // Hiển thị dấu elipsis
                                                            ':hover': {
                                                                bgcolor: 'yellow',
                                                                color: 'blue',
                                                            },
                                                            top: 0,
                                                            right: 0
                                                            // transform: 'translate(1650%, 290%)'
                                                        }}>X
                                                        </Button>
                                                        <Typography variant='h3' sx={{ textAlign: "center", color: 'white', bgcolor: 'black' }}> {starList.map(item => (
                                                            item.actor.name
                                                        ))} Spouse</Typography>
                                                     
                                                        {starList.map(item => (
                                                            <Typography key={item.actor.imdb_id} sx={{ textAlign: 'left' }}>
                                                                <AppBar position="static" sx={{ bgcolor: 'black', color: 'white' }}>
                                                                    {item.biography.spouse && Object.keys(item.biography.spouse).length > 0
                                                                        ? Object.entries(item.biography.spouse).map(([key, value], index) => (
                                                                            <Typography key={index} sx={{ margin: '18px' }}>
                                                                                <span
                                                                                    style={{
                                                                                        borderBottom: '2px solid white',
                                                                                        paddingBottom: '2px',
                                                                                        display: 'inline-block',
                                                                                    }}
                                                                                >
                                                                                    {index}. {key}: {value as ReactNode}
                                                                                </span>
                                                                            </Typography>
                                                                        ))
                                                                        : 'No spouse information available'}
                                                                </AppBar>
                                                            </Typography>
                                                        ))}
                                                    </Stack>
                                                </Dialog>
                                            </Box>
                                        </Toolbar>
                                    </Stack>
                                ))}

                            </AppBar>
                        </Stack>
                    </Stack>

                </AppBar>

            </Box>
        </div >

    );
}