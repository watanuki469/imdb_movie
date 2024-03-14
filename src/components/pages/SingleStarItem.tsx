import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { award } from 'models';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleStarItemPage from "./SingleStarItemPage";
import { selectSingleStarList, singleStarActions } from "features/singleStar/singleStarSlice";
import InfoIcon from '@mui/icons-material/Info';

export interface SingleStarItemProps {
    awardList: award[];
}
export default function SingleStarItem({
    awardList,
}: SingleStarItemProps) {
    const remainingList = awardList.slice(1);//bỏ qua phần tử đầu tiên(bị undefine)

    const navigate = useNavigate()
    // const dispatch = useAppDispatch()
    // const singleList = useAppSelector(selectSingleStarList)

    // useEffect(() => {
    //     if (remainingList) {
    //         remainingList.slice(0, 4).forEach((item: any) => {
    //             dispatch(singleStarActions.fetchSingleStarList(item.movie.imdb_id));
    //         });
    //     }

    // }, [remainingList]);

    return (
        <div >
            <Grid container spacing={3}>
                {remainingList?.map((item: any, index: number) => (
                    <Grid
                        item xs={6} sm={4} md={6}
                        key={index}>
                        <Stack key={index} direction={'row'} alignItems="center" sx={{ borderTop: '2px solid white', borderLeft: '2px solid white' }}>
                            <Stack direction={'column'} alignItems="flex-start" alignContent={'flex-start'}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', justifyContent: 'flex-start', alignContent: 'flex-start', marginLeft: '10px'
                                }}>

                                <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                                    <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} style={{ textAlign: 'center' }}
                                    >
                                        <Typography variant="h5" sx={{
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
                            <InfoIcon onClick={() => navigate(`/movie/id/${item.movie.imdb_id}`)}
                                sx={{
                                    marginLeft: 'auto', // Add this style to move the InfoIcon to the right
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