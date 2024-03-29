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
    const [writers, setWriters] = useState<any>([])
    const [directors, setDirectors] = useState<any>([])
    const [stars, setStars] = useState<any>([])

    // const sortedStars = [...stars].sort((a, b) => {
    //     // Check if name is Emma Watson
    //     const isEmmaWatson = (star: any) => star.actor?.name === 'Emma Watson';

    //     // Move Emma Watson to the front
    //     if (isEmmaWatson(a) && !isEmmaWatson(b)) {
    //         return -1;
    //     } else if (!isEmmaWatson(a) && isEmmaWatson(b)) {
    //         return 1;
    //     } else {
    //         // If neither or both are Emma Watson, maintain the original order
    //         return 0;
    //     }
    // });

    useEffect(() => {
        // if (castList && castList.length) {
        // const writers = castList && castList.filter((item: cast) => item.role === 'Writer')
        // setWriters(writers)
        // const director = castList && castList.filter((item: cast) => item.role === 'Director')
        // setDirectors(director)
        // const stars = castList.filter((item) => item.role !== 'Director' && item.role !== 'Writer');
        // setStars(stars);
        // }
        if (castList ) {
            setWriters(castList.filter((item: cast) => item.role === 'Writer'));
            setDirectors(castList.filter((item: cast) => item.role === 'Director'));
            setStars(castList.filter((item: cast) => item.role !== 'Director' && item.role !== 'Writer'));
        }
    }, [castList])
    let navigate = useNavigate()
    return (
        <div>
            <Box
                sx={{
                    color: 'white', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', textTransform: 'capitalize', textAlign: 'left'
                }}
            >
                <Stack direction={'row'}>
                    <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}>  Director:{' '}
                    </Typography>
                    {directors.map((item: any, index: number) => (
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
                                {index < Math.min(item.actor.length) - 1 ? ', ' : ''}
                            </Fragment>
                        ))}
                </Stack>
            </Box>
            <Divider sx={{ borderColor: 'divider', border: '1px solid' }} orientation="vertical" />
            <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />

            <Box sx={{
                color: 'white', fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', textAlign: 'left'
            }}>
                <Stack direction={'row'} spacing={1} sx={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{
                        textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold',
                        flexWrap: 'wrap'
                    }}> Writers:{' '}
                    </Typography>
                    {/* <Stack direction={'row'} sx={{ marginLeft: '5px', flexWrap: 'wrap' }}> */}
                    {
                        writers.map((item: any, index: number) => (
                            <Fragment key={`writer_${item.role}_${index}`}>
                                <Stack direction={'row'} spacing={1}>
                                    <Fragment key={item.actor?.imdb_id}>
                                        <IconButton onClick={() => navigate(`/actor/id/${item.actor?.imdb_id}`)}
                                            color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            <Typography variant="h6" sx={{ color: 'blue', fontWeight: 'normal', whiteSpace: 'pre-wrap', textAlign: "left" }}>{item.actor?.name}</Typography>
                                        </IconButton>
                                    </Fragment>
                                </Stack>
                                {index < Math.min(writers.length) - 1 ? ', ' : ''}
                            </Fragment>
                        ))
                    }
                    {/* </Stack> */}

                </Stack>
            </Box>

            <Divider sx={{ borderColor: 'divider', border: '1px solid', }} orientation="vertical" />
            <Box sx={{
                color: 'white', fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', textAlign: 'left',
            }}>
                <Stack direction={'row'} alignItems="center">
                    <Typography variant="h6" sx={{ textAlign: 'left', marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}>    Stars:{' '}
                    </Typography>

                    <Stack direction={'row'} sx={{ marginLeft: '5px', flexWrap: 'wrap' }}>
                        {/* {sortedStars && sortedStars.slice(0, 3).map((item: any, index: number) => ( */}
                        { stars.slice(0, 3).map((item: any, index: number) => (
                            <Fragment key={`star_${item.role}_${index}`}>
                                <Stack direction={'row'} spacing={1} alignItems="center">
                                    <Fragment key={item.actor?.imdb_id}>
                                        <IconButton
                                            onClick={() => navigate(`/actor/id/${item.actor?.imdb_id}`)}
                                            color="inherit" sx={{ ':hover': { textDecoration: 'underline' } }}>
                                            <Typography variant="h6" sx={{ color: 'blue', fontWeight: 'normal', whiteSpace: 'pre-wrap' }}>
                                                {item.actor?.name}
                                            </Typography>
                                        </IconButton>
                                    </Fragment>
                                </Stack>
                                {index < Math.min(3) - 1 ? ', ' : ''}

                            </Fragment>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            
        </div >
    )
}