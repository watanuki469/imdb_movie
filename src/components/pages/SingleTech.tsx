import InfoIcon from '@mui/icons-material/Info';
import { Grid, Stack, Typography } from "@mui/material";
import { movieAward, tech } from 'models';
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface SingleTechProps {
    awardList: tech[];
}
export default function SingleTech({
    awardList,
}: SingleTechProps) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Grid container spacing={1} sx={{ mt: 3 }}>
            {awardList && awardList.length > 0 && awardList.map((item: any, index: number) => (
                    // <Grid item xs={2} sm={6} md={6} key={index} >
                    <Grid key={index} >
                        <Stack direction={'row'} alignItems="center" sx={{ borderTop: '2px solid white', borderLeft: '2px solid white' }}>
                            <Stack direction={'column'} alignItems="flex-start" alignContent={'flex-start'}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden',
                                    textOverflow: 'ellipsis', maxWidth: '100%', justifyContent: 'flex-start',
                                    alignContent: 'flex-start', marginLeft: '10px'
                                }}>

                                <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                                    <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} style={{ textAlign: 'center', color: 'blue' }}
                                    >
                                        <Typography sx={{ mr: 2, fontWeight: 'bold', color: 'white' }}> Aspect Ratio </Typography>
                                        {item && item['Aspect Ratio'] ? item['Aspect Ratio'] : 'Aspect Ratio not available'}
                                    </Stack>

                                </Stack>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Camera</span>
                                    {item &&item.Camera ? item.Camera : 'Camera not available'}
                                </Typography>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Cinematographic Process</span>
                                    {item && (item['Cinematographic Process'] ?? '2001')}
                                </Typography>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Film Length</span>
                                    { item && (item['Film Length'] ?? 'Film length not available')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'blue' }}>
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Color</span>
                                    {item && item.Color ? item.Color : 'Color not available'}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'blue' }}>
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Laboratory</span>
                                    { item && item.Laboratory ? item.Laboratory : 'Laboratory not available'}
                                </Typography>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>Negative Format</span>
                                    {item && (item['Negative Format'] ?? 'Negative Format not available')}
                                </Typography>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>Printed Film Format</span>
                                    {item && (item['Printed Film Format'] ?? 'Printed Film Format not available')}
                                </Typography>
                                <Typography sx={{ color: 'blue' }} >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>Sound Mix</span>
                                    {item && (item['Sound Mix'] ?? 'Sound Mix not available')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'blue' }}>
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}> Runtime</span>
                                    { item && item.Runtime ? item.Runtime : 'Runtime not available'}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}