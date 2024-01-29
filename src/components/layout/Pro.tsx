import { AppBar, Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";

export function Pro() {
    return (
        <Box sx={{ bgcolor: "white", position: "relative", width: '100%' }}>
            <Typography sx={{
                bgcolor: 'white',
                color: 'black',
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
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    border: '2px solid #ff0000',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    alignContent: 'center',
                    justifyContent: 'center', // Canh giữa theo chiều ngang
                    alignItems: 'center', // Canh giữa theo chiều dọc
                }}
            >

                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    Get the essential resource for entertainment professionals
                </Typography>

                
                <List sx={{ maxWidth: '50%' }}>
                    <ListItem sx={{ textAlign: 'center', border: ' 2px solid red', }}>
                        <ListItemAvatar>
                            <Avatar variant="square" sx={{ width: 100, height: 50, textAlign: 'center', alignItems: 'center', alignContent: 'center' }} alt="Remy Sharp" src="https://file.baothuathienhue.vn/data2/image/news/2017/20170803/origin/1501744451.png" />
                        </ListItemAvatar>
                        <ListItemText sx={{ fontSize: '200px' }}> <Typography variant='h4'>Join With Amazon</Typography></ListItemText>
                    </ListItem>
                </List>

                <Container sx={{ display: 'flex', alignItems: 'center' }}>
                    <hr style={{ flexGrow: 1, margin: ' 0 60px' }} />
                    <span style={{ color: 'black', margin: ' 0 20px' }}>Already have an account?</span>
                    <hr style={{ flexGrow: 1, margin: ' 0 60px' }} />

                </Container>
                <Stack direction={'column'}>
                    <List sx={{ maxWidth: '100%' }}>
                        <ListItem sx={{ textAlign: 'center', border: ' 2px solid black', }}>
                            <ListItemAvatar>
                                <Avatar variant="square" sx={{ width: 100, height: 50, textAlign: 'center', alignItems: 'center' }} alt="Remy Sharp" src="https://file.baothuathienhue.vn/data2/image/news/2017/20170803/origin/1501744451.png" />
                            </ListItemAvatar>
                            <ListItemText sx={{ fontSize: '200px' }}> <Typography variant='h4'>Join With Amazon</Typography></ListItemText>
                        </ListItem>
                    </List>

                    <List sx={{ maxWidth: '100%' }}>
                        <ListItem sx={{ textAlign: 'center', border: ' 2px solid black', }}>
                            <ListItemAvatar>
                                <Avatar variant="square" sx={{ width: 80, height: 40, textAlign: 'center', alignItems: 'center' }} alt="Remy Sharp" src="https://m.media-amazon.com/images/G/01/imdbpro/logos/imdb_login_logo._CB1539729863_.png" />
                            </ListItemAvatar>
                            <ListItemText sx={{ fontSize: '200px' }}> <Typography variant='h4'>Join With IMDb</Typography></ListItemText>
                        </ListItem>
                    </List>
                </Stack>

            </Grid >


            <Box alignContent="center" sx={{ flexGrow: 1, width: '100%', p: 3 }}>
                <AppBar position="static" sx={{
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

            </Box>
        </Box>


    );
}