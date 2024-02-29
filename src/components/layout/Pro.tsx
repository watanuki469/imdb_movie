import { AppBar, Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { Footer } from "components/common";

export function Pro() {
    return (
        <Grid sx={{}}>
            <Box sx={{ bgcolor: "white" }}>
                <img alt="IMDbPro" src="https://m.media-amazon.com/images/G/01/IMDbPro/images/IMDbPro_payments_2x.png" height="46" width="120">
                </img>
                <Grid container spacing={2}
                    sx={{
                        border: '2px solid #ff0000', borderRadius: '10px', textAlign: 'left',
                        width: '70%',
                        padding: '10px', margin: 'auto'
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: 'left' }}>
                        Get the essential resource for entertainment professionals
                    </Typography>

                    <List sx={{ textAlign: 'center', border: ' 2px solid black', alignContent: 'center', alignItems: 'center', m: "auto", width: '100%' }} >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar variant="square" sx={{ textAlign: 'center', alignItems: 'center', alignContent: 'center'
                            ,justifyContent:'center' }} alt="Remy Sharp" src="https://file.baothuathienhue.vn/data2/image/news/2017/20170803/origin/1501744451.png" />
                            </ListItemAvatar>
                            <ListItemText sx={{ alignItems: 'center' }} >
                                <Typography variant='h6' sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Join With Amazon</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>

                    <Container sx={{ display: 'flex', alignItems: 'center', m: '10px' }}>
                        <hr style={{ margin: ' 0 20px' }} />
                        <span style={{ color: 'black', textAlign: 'center', width: '100%' }}>Already have an account?</span>
                        <hr style={{ margin: ' 0 20px' }} />

                    </Container>
                    <List sx={{ textAlign: 'center', border: ' 2px solid black', alignContent: 'center', alignItems: 'center', m: "auto", width: '100%' }} >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar variant="square" sx={{ textAlign: 'center', alignItems: 'center', alignContent: 'center' }} alt="Remy Sharp" src="https://file.baothuathienhue.vn/data2/image/news/2017/20170803/origin/1501744451.png" />
                            </ListItemAvatar>
                            <ListItemText sx={{ alignItems: 'center' }} >
                                <Typography variant='h6' sx={{ whiteSpace: 'nowrap',textAlign:'center' }}>Join With Amazon</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <List sx={{ textAlign: 'center', border: ' 2px solid black', alignContent: 'center', alignItems: 'center', m: "auto", width: '100%', marginTop: '10px' }} >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar variant="square" sx={{
                                    height: "auto", // Sử dụng chiều cao tự động
                                    width: "auto",  // Sử dụng chiều rộng tự động
                                    maxWidth: "80%", // Đảm bảo chiều rộng tối đa là 100% của phần tử cha
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }} alt="Remy Sharp" src="https://m.media-amazon.com/images/G/01/imdbpro/logos/imdb_login_logo._CB1539729863_.png" />
                            </ListItemAvatar>
                            <ListItemText sx={{ alignItems: 'center' }} >
                                <Typography variant='h6' sx={{ whiteSpace: 'nowrap',textAlign:'center' }}>Join With Amazon</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid >
                <Footer/>


                {/* <Box alignContent="center" sx={{ width: '100%', p: 3 }}>
                    <AppBar  sx={{
                        backgroundColor: "white", borderRadius: '10px',
                        opacity: '-moz-initial', boxShadow: 'none'
                    }}>
                        <hr style={{ flexGrow: 1, margin: ' 0 60px' }} />
                        <Toolbar sx={{ justifyContent: 'center' }}>
                            <List sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: 'black'

                            }}>
                                <ListItem >
                                    <Typography sx={{ width: '50px' }} >    Help  </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Typography sx={{ width: '170px' }}>Subscriber Agreement</Typography>
                                </ListItem>
                                <ListItem >
                                    <Typography sx={{ width: '190px' }}> Your Ads Privacy Choices</Typography>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Typography sx={{ width: '190px' }}> Privacy Policy</Typography>
                                </ListItem>

                            </List>


                        </Toolbar>

                        <Typography sx={{ color: 'black' }}>An Amazon company</Typography>
                        <Typography sx={{ color: 'black' }}>© 1990-2024 IMDb.com, Inc. or its affiliates.</Typography>
                    </AppBar>

                </Box> */}
            </Box>
        </Grid>



    );
}