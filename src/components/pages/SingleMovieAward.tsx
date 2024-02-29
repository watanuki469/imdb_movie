import InfoIcon from '@mui/icons-material/Info';
import { Grid, Stack, Typography } from "@mui/material";
import { movieAward } from 'models';
import { useState } from 'react';
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
    const [actorHovered, setActorHovered] = useState('');

    return (
        <div>
            <Grid container spacing={1}>
                {remainingList.map((item: movieAward, index: number) => (
                    <Grid item xs={6} sm={4} md={3} key={index} >
                        <Stack direction={'row'} alignItems="center" sx={{ borderTop: '2px solid white', borderLeft: '2px solid white' }}>
                            <Stack direction={'column'} alignItems="flex-start" alignContent={'flex-start'}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', justifyContent: 'flex-start', alignContent: 'flex-start', marginLeft: '10px'
                                }}>

                                <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                                    <Stack direction={'row'}  >
                                        <Typography key={item.award_name} variant="h5" sx={{
                                            fontWeight: 'bold', textAlign: 'left', alignContent: 'center', justifyContent: 'center'
                                        }}>
                                            {item.award_name && item.award_name.length > 35
                                                ? `${item.award_name.slice(0, 50)}...`
                                                : item.award_name}
                                        </Typography>

                                    </Stack>

                                </Stack>
                                <Typography variant="h6" sx={{ color: 'yellow', textAlign: 'left' }} >  {item.award ? item.award : 'Meow Meow Award'}</Typography>
                                <Typography variant="subtitle1">{item.year ?? '2001'} <span style={{ marginLeft: '5px' }} /> {item.type ?? 'Meow Meow'} </Typography>
                                <Typography variant="body1" sx={{ color: 'blue' }}>{item.movie?.title ?? 'Meow Meow'}</Typography>
                                <Stack direction={'row'} >
                                    <Typography variant="body1" sx={{ color: 'gray' }}> Shared with:
                                        {item.actor && (
                                            <span>
                                                {item.actor.map((actor: any, actorIndex: any) => (
                                                    <span key={actorIndex}
                                                    onClick={() => navigate(`/actor/id/${actor.imdb_id}`)}
                                                        style={{
                                                            marginLeft: '5px',
                                                            color: 'red',
                                                            cursor: 'pointer',
                                                            textDecoration: 'none',
                                                            ...(actorHovered === actor.name && { textDecoration: 'underline' }) // Thêm gạch dưới khi actor được hover
                                                        }}
                                                        onMouseEnter={() => setActorHovered(actor.name)} // Thiết lập actorHovered khi hover
                                                        onMouseLeave={() => setActorHovered('')} // Xóa actorHovered khi di chuột ra khỏi actor
                                                    >
                                                        {actor.name}
                                                        {actorIndex < Math.min(item.actor.length) - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </Typography>


                                </Stack>
                            </Stack>
                            {/* <InfoIcon
                                onClick={scrollToTop}
                                // onClick={() => navigate(`/movie/id/${item.movie.imdb_id}`)}
                                sx={{
                                    marginLeft: 'auto',
                                    justifyContent: 'flex-end',
                                    alignContent: 'flex-end',
                                    marginRight: '30px',
                                }}
                            /> */}
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}