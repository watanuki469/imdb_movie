import { AppBar, Avatar, Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function Footer() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={6}>
                <Box display="flex" alignContent="center" sx={{ flexGrow: 1, width: '100%', p: 3 }}>
                    <AppBar position="static" sx={{
                        backgroundColor: "black", borderRadius: '10px',
                        opacity: '-moz-initial'
                    }}>
                        <Toolbar sx={{justifyContent: 'center'  }}>
                            <Typography variant="h6" component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' ,justifyContent: 'center' ,textAlign:'center'}, flexGrow: 1 }} >
                                Made with
                                <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75" />
                                by
                                <Avatar alt="Remy Sharp" src="https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" />
                            </Typography>

                        </Toolbar>
                    </AppBar>
                </Box>
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid >
    );

}