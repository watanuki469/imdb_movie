import InfoIcon from '@mui/icons-material/Info';
import { Button, Grid, Stack, Typography } from "@mui/material";
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

    const [actorHovered, setActorHovered] = useState('');

    const [showActors, setShowActors] = useState<number>(4); // Trạng thái để xác định số lượng diễn viên được hiển thị

    const handleShowMore = () => {
        setShowActors(showActors + 5); // Tăng số lượng diễn viên được hiển thị khi nhấp vào nút "Show More"
    };

    return (
        <div>
            <Grid container spacing={1}>
                {remainingList.map((item: movieAward, index: number) => (
                    <Grid item xs={6} sm={4} md={6} key={index} >
                        <Stack direction={'row'} alignItems="center" sx={{ borderTop: '2px solid white', borderLeft: '2px solid white' }}>
                            <Stack direction={'column'} alignItems="flex-start" alignContent={'flex-start'}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', justifyContent: 'flex-start', alignContent: 'flex-start', marginLeft: '10px'
                                }}>

                                <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                                    <span style={{
                                        fontWeight: "bold", fontSize: '1rem', color: 'white'
                                    }} >
                                        {item.year ?? '2001'}  {item.type ?? 'Meow Meow'}
                                    </span>
                                    ( {item.award_name && item.award_name.length > 35
                                        ? `${item.award_name.slice(0, 50)}...`
                                        : item.award_name})

                                </Typography>

                                {/* <Stack direction={'column'} alignContent={'center'} justifyContent={'center'}>
                                    <Stack direction={'row'}  >
                                        <Typography key={item.award_name} variant="h5" sx={{
                                            fontWeight: 'bold', textAlign: 'left', alignContent: 'center', justifyContent: 'center'
                                        }}>
                                            {item.award_name && item.award_name.length > 35
                                                ? `${item.award_name.slice(0, 50)}...`
                                                : item.award_name}
                                        </Typography>

                                    </Stack>

                                </Stack> */}
                                <Typography sx={{ color: 'white', textAlign: 'left' }} >  {item.award ? item.award : 'Meow Meow Award'}</Typography>
                                <Stack direction={'row'} >
                                    <Typography variant="body1" sx={{ color: 'blue' }}>
                                        {item.actor && (
                                            <span>
                                                {item.actor.slice(0, showActors).map((actor: any, actorIndex: any) => (
                                                    <span key={actorIndex}
                                                        onClick={() => navigate(`/actor/id/${actor.imdb_id}`)}
                                                        style={{
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
                                                {item.actor.length > showActors && (
                                                    <Button onClick={handleShowMore}>Show More</Button>
                                                )}
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