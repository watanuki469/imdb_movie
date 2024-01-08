import StarBorderIcon from '@mui/icons-material/StarBorder';
import { AppBar, Badge, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, Dialog, Divider, Grid, IconButton, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { movieItem } from 'models';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import ShareIcon from '@mui/icons-material/Share';

export interface movieItemPageProps {
  movieItemList: movieItem[],
  onEdit?: (movie: movieItem) => void;
}

export default function MovieItemPage({
  movieItemList,
  onEdit
}: movieItemPageProps) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<movieItem>();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenClick = (item: movieItem) => {
    setSelectedMovie(item)
    setOpen(true)
  }
  const bull = (<Box sx={{ display: 'inline-block', mx: '6px', transform: 'scale(0.8)', color: 'white' }} >     • </Box>);
  const handleChangePage = () => {

  };
  const renderPopularity = (uniqueTitles: any[] = []) => {
    return (
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {movieItemList?.map((item: movieItem) => {
          // Kiểm tra xem item.title đã xuất hiện chưa
          if (!uniqueTitles.includes(item.title)) {
            // Nếu chưa xuất hiện, thêm vào mảng uniqueTitles và hiển thị
            uniqueTitles.push(item.title);
            return (
              <Grid item xs={4} md={3} lg={2.4} key={item.title}>
                <Stack alignItems="center">
                  <img
                    src={item.banner}
                    style={{ height: "280px" }}
                    onClick={() => onEdit?.(item)}
                  />
                  <Typography variant="h6" color="white">
                    {item.title}
                  </Typography>
                </Stack>
              </Grid>
            );
          }

          // Nếu item.title đã xuất hiện, không hiển thị
          return null;
        })}
      </Grid>
    );
  };


  return (
    <div style={{ width: '80%', marginLeft: '10%' }}>
      {renderPopularity()}

      {/* Dialog */}
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ bgcolor: "#0B0831" }}
      >
        <div style={{ width: '100%', margin: "auto" }}>

          <Box sx={{ flexGrow: 1, bgcolor: "#0B0831" }}>
            <Box sx={{
              borderRadius: '50px'
              , bgcolor: "#0B0831"
            }}>
              <iframe src={selectedMovie?.trailer} width="99.5%" height
                ="350px"></iframe>
            </Box>

            <Card sx={{ bgcolor: "#0B0831" }}>
              <CardContent>
                <Typography variant="h4" color="white" sx={{ textAlign: "left" }}>
                  {selectedMovie?.title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h5" color="white">
                  <Typography variant="h5" component="div" sx={{ textAlign: "left" }} >
                    {selectedMovie?.year} {bull}
                    {selectedMovie?.movie_length}min{bull}
                    <StarBorderIcon fontSize="small" strokeWidth={9.5} sx={{ color: yellow[500] }} />
                    {selectedMovie?.rating}/10
                  </Typography>
                </Typography>
              </CardContent>

              <CardContent>
                <Grid container spacing={2} justifyContent="left">
                  <Box
                    sx={{
                      display: 'grid',
                      columnGap: 2,
                      rowGap: 2,
                      gridTemplateColumns: 'repeat(5, 1fr)',
                    }} >

                    {selectedMovie?.gen.map(item =>
                      <Button variant="contained"
                        onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                        sx={{
                          textTransform: 'uppercase', textAlign: 'center'
                          , minHeight: '1rem', width: '10rem', ':hover': {
                            bgcolor: 'red',
                            color: 'black',
                          },
                          background: "linear-gradient(180deg,grey,transparent) border-box",
                          border: "2px solid transparent",
                          paddingLeft: '1rem', paddingRight: '1rem',
                          backgroundColor: 'black',
                          color: 'red',
                          borderRadius: '1rem',
                          '--Grid-borderWidth': '1px',
                          borderColor: 'pink',

                        }}>
                        {item.genre}
                      </Button>
                    )}
                  </Box>
                </Grid>
              </CardContent>

              <CardContent>
                <Typography variant="h5" color="white" sx={{ textAlign: "left" }}>
                  {selectedMovie?.description}
                </Typography>
              </CardContent>

            </Card>
          </Box >
        </div >
      </Dialog>

    </div>
  );
}