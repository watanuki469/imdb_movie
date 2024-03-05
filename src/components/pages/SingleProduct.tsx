import InfoIcon from '@mui/icons-material/Info';
import { AppBar, Box, Grid, Stack, Typography } from "@mui/material";
import { movieAward, product } from 'models';
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface SingleProductProps {
    awardList: product[];
}
export default function SingleProduct({
    awardList,
}: SingleProductProps) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Grid container spacing={1} sx={{ mt: 3 }}>
                {awardList.map((item, index) =>
                    <Box key={index} sx={{ textAlign: 'left' }}>
                        <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', borderTop: '2px solid white', borderLeft: '2px solid white' }} >
                            <Typography variant='h4' sx={{ textAlign: 'left', color: 'yellow', margin: '18px' }}>     Dates    </Typography>
                            {Array.isArray(item.locations.dates) && item.locations && item.locations.dates.length > 0
                                ? item.locations.dates.map((triviaItem, index) => (
                                    <Typography key={index} sx={{ margin: '18px' }}>
                                        <span
                                            style={{
                                                borderBottom: '2px solid white',
                                                paddingBottom: '2px',
                                                display: 'inline-block',
                                            }}
                                        >
                                            {index}. {triviaItem}
                                        </span>
                                    </Typography>
                                ))
                                : <span>
                                    <Typography>     No dates available     </Typography>
                                </span>
                            }
                        </AppBar>
                        <AppBar position="static" sx={{ bgcolor: 'black', color: 'white', borderTop: '2px solid white', borderLeft: '2px solid white' }} >
                            <Typography variant='h4' sx={{ textAlign: 'left', color: 'yellow', margin: '18px' }}>     Locations    </Typography>
                            {Array.isArray(item.locations.locations) && item.locations && item.locations.locations.length > 0
                                ? item.locations.locations.map((triviaItem, index) => (
                                    <Typography key={index} sx={{ margin: '18px' }}>
                                        <span
                                            style={{
                                                borderBottom: '2px solid white',
                                                paddingBottom: '2px',
                                                display: 'inline-block',
                                            }}
                                        >
                                            {index}. {triviaItem}
                                        </span>
                                    </Typography>
                                ))
                                : <span>
                                    <Typography>     No location available     </Typography>
                                </span>
                            }
                        </AppBar>


                    </Box>
                )}
            </Grid>
        </div>
    );
}