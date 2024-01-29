import InfoIcon from '@mui/icons-material/Info';
import { Grid, Stack, Typography } from "@mui/material";
import { movieAward } from 'models';
import { useNavigate } from "react-router-dom";

export interface SingleStarItemProps {
    awardList: movieAward[];
}
export default function SingleMovieAward({
    awardList,
}: SingleStarItemProps) {
    const remainingList = awardList.slice(1);//bỏ qua phần tử đầu tiên(bị undefine)

    const navigate = useNavigate()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Grid container spacing={1}>
                {remainingList.map((item: movieAward, index: number) => (
                    <Grid item xs={2} sm={6} md={6} key={index} >
                        <Stack direction={'row'} alignItems="center" sx={{ borderTop: '2px solid white', borderLeft: '2px solid white' }}>
                            <Stack direction={'column'} alignItems="flex-start" alignContent={'flex-start'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%',
                                    justifyContent: 'flex-start',
                                    alignContent: 'flex-start',
                                    marginLeft: '10px'
                                }}>

                                <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                                    <Stack
                                        direction={'row'}
                                        alignContent={'center'}
                                        justifyContent={'center'}
                                        style={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Typography key={item.award_name} variant="h5" sx={{
                                            fontWeight: 'bold', textAlign: 'center', alignContent: 'center'
                                            , justifyContent: 'center'
                                        }}>
                                            {item.award_name && item.award_name.length > 35
                                                ? `${item.award_name.slice(0, 50)}...`
                                                : item.award_name}
                                        </Typography>

                                    </Stack>

                                </Stack>
                                <Typography variant="h6" sx={{ color: 'yellow' }} >  {item.award ? item.award : 'Meow Meow Award'}</Typography>
                                <Typography variant="subtitle1">{item.year ?? '2001'} <span style={{ marginLeft: '5px' }} /> {item.type ?? 'Meow Meow'} </Typography>
                                <Typography variant="body1" sx={{ color: 'blue' }}>{item.movie?.title ?? 'Meow Meow'}</Typography>
                                <Stack direction={'row'} >
                                    <Typography variant="body1" style={{ color: 'gray' }} > Shared with:
                                        {item.actor && (
                                            <span style={{ marginLeft: '5px', color: 'red' }} >
                                                {item.actor && item.actor.length > 0 && (
                                                    item.actor.map((actor: any, actorIndex: any) => (
                                                        <span key={actorIndex}>{actor.name}
                                                            {actorIndex < Math.min(item.actor.length) - 1 ? ', ' : ''}</span>
                                                    ))
                                                )}
                                                {/* {item.actor && item.actor.length > 3 && <span>, ...</span>} */}
                                            </span>
                                        )}
                                    </Typography>

                                </Stack>
                            </Stack>
                            <InfoIcon
                                onClick={scrollToTop}
                                sx={{
                                    marginLeft: 'auto',
                                    justifyContent: 'flex-end',
                                    alignContent: 'flex-end',
                                    marginRight: '30px'
                                }}
                            />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}