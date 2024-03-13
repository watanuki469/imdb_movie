import { PlayArrow } from "@mui/icons-material";
import { Box, Divider, FormControl, IconButton, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AwardActions, selectAwardList } from 'features/award/awardSlice';
import { award } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SingleStarItem from "./SingleStarItem";

export default function SingleStarMedia() {
    const { imdb_id } = useParams();
    const dispatch = useAppDispatch()

    const awardList = useAppSelector(selectAwardList)

    useEffect(() => {
        dispatch(AwardActions.fetchAwardList(imdb_id))
    }, [imdb_id])

    useEffect(() => {
        const genreCount = countType(awardList);
        setTypeCount(genreCount);
    }, [awardList]);

    const [typeCount, setTypeCount] = useState<Record<string, number>>({});

    type Type = | ' ';

    function countType(TypeList: award[]): Record<string, number> {
        const keyCounting: Record<string, number> = {};
        TypeList.forEach((movie) => {
            // type key
            const keyName: Type = movie.type as Type;
            // Nếu thể loại đã tồn tại, tăng giá trị đếm lên 1; ngược lại, tạo mới với giá trị 1.
            keyCounting[keyName] = (keyCounting[keyName] || 0) + 1;
        })
        return keyCounting;

    }
    const [moviesPlay, setMoviesIsPlay] = useState(true);

    const handleMoviesClick = () => {
        setMoviesIsPlay(!moviesPlay);
    };


    return (
        <div id="awarrd">
            <Stack direction={'column'} sx={{ mt: 3 }}>
                <SingleStarItem awardList={awardList} />
            </Stack>

            {/* <Stack direction={'row'} sx={{ width: '100%', display: 'flex' }} alignItems={'center'} alignContent={'center'} >
                <Stack direction={'row'} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
                    <Divider sx={{ border: '5px solid yellow', marginRight: '10px', height: '30px' }} orientation="vertical" />
                    <Typography sx={{ color: 'yellow', border: 'none', fontWeight: 'bold', fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline' } }}>
                        Award:
                    </Typography>
                    {Object.entries(typeCount)
                        .filter(([type, count]) => type !== 'undefined')
                        .map(([type, count], index, array) => (
                            <Stack key={index} direction={'row'} sx={{ fontSize: "1rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'yellow', width: 'auto' }}>
                                {`${count} ${type}${index !== array.length - 1 ? ' & ' : ''}`}
                            </Stack>

                        ))}
                    <IconButton onClick={handleMoviesClick}>
                        {moviesPlay ?
                            <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />
                            :
                            <KeyboardArrowDownIcon sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "2rem" }} />}
                    </IconButton>
                </Stack>
            </Stack>
            {moviesPlay ?
                <Stack direction={'column'} sx={{ mt: 3 }}>
                    <SingleStarItem awardList={awardList} />
                </Stack>
                : <Stack>

                </Stack>
            } */}

        </div >

    );
}