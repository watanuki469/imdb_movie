import { Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Dashboard from "../dashboard/GenrePageDashBoard";

export function Body() {

    return (
        <CardContent>
            <Typography variant='h2' color="white" gutterBottom>
                Discover top-rated movies based on your mood
            </Typography>
            <Typography variant="h4" color="white" component="div">
                How are you feeling now?
            </Typography>
            <Dashboard />
        </CardContent>

    );
}