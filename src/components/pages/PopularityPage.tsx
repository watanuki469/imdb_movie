import { Box, Grid, Stack, Typography } from "@mui/material";
import { movieItem } from 'models';


export interface PopurarityPageProps {
  popurarityItemList: movieItem[];
  onEdit?: (movie: movieItem) => void;

}

export default function PopurarityPage({
  popurarityItemList,
  onEdit

}: PopurarityPageProps) {

  return (
  
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {popurarityItemList?.map(item =>
          <Grid item xs={4} md={3} lg={2.4} >
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
        )}
      </Grid>
    

  );
}