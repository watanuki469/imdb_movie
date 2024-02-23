import { Box, Divider, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { cast } from 'models';
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface CastPageProps {
    castList: cast[]
}

export default function CastPage({
    castList

}: CastPageProps) {
    console.log(castList + 'cast list')
    const [writers, setWriters] = useState<any>([])
    const [directors, setDirectors] = useState<any>([])
    const [stars, setStars] = useState<any>([])
    const bull = (<Box sx={{ display: 'inline-block', mx: '6px', transform: 'scale(0.8)', color: 'white' }} > • </Box>)

    const sortedStars = [...stars].sort((a, b) => {
        // Check if name is Emma Watson
        const isEmmaWatson = (star: any) => star.actor?.name === 'Emma Watson';

        // Move Emma Watson to the front
        if (isEmmaWatson(a) && !isEmmaWatson(b)) {
            return -1;
        } else if (!isEmmaWatson(a) && isEmmaWatson(b)) {
            return 1;
        } else {
            // If neither or both are Emma Watson, maintain the original order
            return 0;
        }
    });

    useEffect(() => {
        if (castList && castList.length) {
            const writers = castList && castList.filter((item: cast) => item.role === 'Writer')
            setWriters(writers)
            const director = castList && castList.filter((item: cast) => item.role === 'Director')
            setDirectors(director)
            const stars = castList.filter((item) => item.role !== 'Director' && item.role !== 'Writer');
            setStars(stars);
        }

    }, [castList])
    let navigate = useNavigate()
    return (
        <div>
            <Box
                sx={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'capitalize',
                    textAlign: 'left'
                }}
            >
                <Stack direction={'row'}>
                    <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}>  Director:{' '}
                    </Typography>
                    {directors &&
                        directors.map((item: any, index: number) => (
                            <Fragment key={`director_${item.role}_${index}`}>
                                <Stack direction={'row'} spacing={1}>
                                    <Fragment key={item.actor?.imdb_id}>
                                        <IconButton onClick={() => navigate(`/actor/id/${item.actor?.imdb_id}`)}
                                            color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            {/* <span style={{ color: 'blue', fontWeight: 'normal' }}></span> */}
                                            <Typography variant="h6" sx={{ color: 'blue' }}>{item.actor?.name}</Typography>
                                        </IconButton>
                                    </Fragment>
                                </Stack>
                                {index < directors.length - 1 && ', '}
                            </Fragment>
                        ))}
                </Stack>
            </Box>
            <Divider sx={{ borderColor: 'divider', border: '1px solid' }} orientation="vertical" />
            <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />

            <Box sx={{
                color: 'white', fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', textAlign: 'left'
            }}>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}> Writers:{' '}
                    </Typography>

                    {writers &&
                        writers.map((item: any, index: number) => (
                            <Fragment key={`writer_${item.role}_${index}`}>
                                <Stack direction={'row'} spacing={1}>
                                    <Fragment key={item.actor?.imdb_id}>
                                        <IconButton onClick={() => navigate(`/actor/id/${item.actor?.imdb_id}`)}
                                            color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            <Typography variant="h6" sx={{ color: 'blue', fontWeight: 'normal', whiteSpace: 'pre-wrap' }}>{item.actor?.name}</Typography>
                                        </IconButton>
                                    </Fragment>
                                </Stack>
                                {index < writers.length - 1 && ', '}
                            </Fragment>
                        ))
                    }

                </Stack>
            </Box>

            <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
            <Box sx={{
                color: 'white',
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                textTransform: 'capitalize',
                textAlign: 'left',
            }}>
                <Stack direction={'row'} alignItems="center">
                    <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}>    Stars:{' '}
                    </Typography>

                    <Stack direction={'row'} sx={{ marginLeft: '5px', flexWrap: 'wrap' }}>
                        {sortedStars && sortedStars.slice(0, 3).map((item: any, index: number) => (
                            <Fragment key={`star_${item.role}_${index}`}>
                                <Stack direction={'row'} spacing={1} alignItems="center">
                                    <Fragment key={item.actor?.imdb_id}>
                                        <IconButton
                                            onClick={() => navigate(`/actor/id/${item.actor?.imdb_id}`)}
                                            color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            <Typography variant="h6" sx={{ color: 'blue', fontWeight: 'normal', whiteSpace: 'pre-wrap' }}>{item.actor?.name}
                                                <span style={{ color: "white" }}>,</span>
                                            </Typography>

                                        </IconButton>
                                    </Fragment>
                                </Stack>
                                {/* {index <= sortedStars.length - 1 && index <= 1 && <span style={{ marginRight: '5px' }}>-</span>} */}
                            </Fragment>
                        ))}
                    </Stack>
                </Stack>
            </Box>



            <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
            <Typography sx={{
                color: 'white',
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                textTransform: 'capitalize',
                textAlign: 'left'
            }}>IMBb<span style={{ color: '#AED2FF' }}>Pro</span>
                <IconButton onClick={() => navigate('/IMDbPro')} color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                    <span style={{ color: 'blue', fontWeight: 'normal' }}> See production info at IMDbPro</span>
                </IconButton>
            </Typography>
        </div >

    )



}