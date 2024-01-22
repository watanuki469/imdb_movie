import { Box, Grid, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectSingleStarList, singleStarActions } from "features/singleStar/singleStarSlice";
import { award } from 'models';
import { useEffect } from "react";
import SingleStarItemPage from "./SingleStarItemPage";

export interface SingleStarItemProps {
    awardList: award[];
}
export default function SingleStarItem({
    awardList,
}: SingleStarItemProps) {
    let remainingList = awardList.slice(1);//bỏ qua phần tử đầu tiên(bị undefine)

    const PersonMediaGrid = (personId: any, index: number) => {
        const dispatch = useAppDispatch()
        const singleList = useAppSelector(selectSingleStarList)

        useEffect(() => {
            const fetchData = async () => {
                await dispatch(singleStarActions.fetchSingleStarList(personId));
            };

            fetchData();
        }, [personId]);

        return <div>
            <SingleStarItemPage singleList={singleList} num={index} />
        </div>
    }

    return (
        <div>

            <Grid container spacing={1}>
                {remainingList.slice(0, 4).map((item: any, index: number) => (
                    <Grid item xs={2} sm={6} md={6} key={index}>
                        <Stack key={index} direction={'row'} alignItems="flex-start" alignContent={'flex-start'}>
                            <Box>
                                {PersonMediaGrid(item.movie.imdb_id, index)}
                            </Box>

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
                                <Stack direction={'column'} alignContent={'flex-start'} justifyContent={'flex-start'}>
                                    <Stack
                                        direction={'row'}
                                        alignContent={'flex-start'}
                                        justifyContent={'flex-start'}
                                        style={{

                                        }}
                                    >
                                        <Typography variant="h5" sx={{fontWeight:'bold'}}>
                                            {item.award_name && item.award_name.length > 35
                                                ? `${item.award_name.slice(0, 20)}...`
                                                : item.award_name}
                                        </Typography>

                                    </Stack>

                                </Stack>
                                <Typography variant="h6" sx={{color:'yellow'}} >{item.award}</Typography>
                                <Typography variant="subtitle1">{item.year} <span style={{ marginLeft: '5px' }} /> {item.type} </Typography>
                                <Typography  variant="body1" sx={{color:'blue'}}>{item.movie.title}</Typography>
                                <Stack direction={'row'} >
                                    <Typography variant="body1" style={{color:'gray'}} > Shared with:
                                        {item.actor && (
                                            <span style={{ marginLeft: '5px' ,color:'red'}} >
                                                {item.actor && item.actor.length > 0 && (
                                                    item.actor.slice(0, 3).map((actor: any, actorIndex: any) => (
                                                        actor.name !== 'Emma Watson' ? (
                                                            <span key={actorIndex}>{actor.name}
                                                                {actorIndex < Math.min(item.actor.length, 3) - 1 ? ', ' : ''}</span>
                                                        ) : null
                                                    ))
                                                )}
                                                {item.actor && item.actor.length > 3 && <span>, ...</span>}
                                            </span>
                                        )}
                                    </Typography>

                                </Stack>


                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}