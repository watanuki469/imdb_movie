import { Box, Button, Divider, IconButton, ListItemText, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AwardActions, selectAwardList } from 'features/award/awardSlice';
import { award } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SingleStarItem from "./SingleStarItem";
import { PlayArrow } from "@mui/icons-material";

export default function SingleStarMedia() {
    const { imdb_id } = useParams();
    const dispatch = useAppDispatch()

    const awardList = useAppSelector(selectAwardList)

    useEffect(() => {
        dispatch(AwardActions.fetchAwardList(imdb_id))

    }, [imdb_id])

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
    useEffect(() => {
        const genreCount = countType(awardList);
        setTypeCount(genreCount);

    }, [awardList]);
    return (
        <div>
            <Stack direction={'column'}>
                <Stack alignContent={'flex-start'} alignItems={'flex-start'}>
                    <IconButton color="inherit">
                        <Button sx={{ alignItems: 'flex-start', alignContent: 'flex-start', height: '50px' }}>
                            <Divider sx={{ border: '5px solid yellow', marginRight: '10px' }} orientation="vertical" />
                            <Stack direction={'row'} alignContent={'center'} alignItems={'center'}>
                                <Typography sx={{ color: 'white', border: 'none', fontWeight: 'bold', fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', ':hover': { textDecoration: 'underline', } }}>
                                    <b>Award</b>:
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(4, 1fr)',
                                    }} >

                                    {Object.entries(typeCount)
                                        .filter(([type, count]) => type !== 'undefined') // Filter out entries with type 'Halloween'
                                        .map(([type, count], index, array) => (
                                            <Typography key={index} sx={{ fontSize: "2rem", fontFamily: "Arial, sans-serif", textTransform: 'capitalize', color: 'white' }}>
                                                {`${count} ${type}${index !== array.length - 1 ? ' & ' : ''}`}
                                            </Typography>

                                        ))}
                                    <PlayArrow sx={{ color: 'yellow', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: "3rem" }} />

                                    {/* </List> */}
                                </Box>

                            </Stack>
                        </Button>
                    </IconButton>
                </Stack>
                <Stack>
                    <SingleStarItem awardList={awardList} />
                </Stack>
            </Stack>


        </div >

    );
}