import { AppBar, Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { Footer, Header } from "components/common";
import { singleMovie } from "models";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export function WatchList() {
    const [watchList, setWatchList] = useState<singleMovie[]>([]);

    useEffect(() => {
        // Lấy dữ liệu từ local storage
        const storedDataString = localStorage.getItem('watchList');
        let storedData = [];

        if (storedDataString) {
            storedData = JSON.parse(storedDataString);
        }
        console.log('Stored data:', storedData);

        // Lưu dữ liệu vào state
        setWatchList(Object.values(storedData)); // Chuyển đổi dữ liệu từ đối tượng sang mảng
    }, []);
    const removeFromWatchList = (imdb_id: string) => {
        // Lấy dữ liệu từ local storage
        const storedDataString = localStorage.getItem('watchList');
        let storedData: Record<string, singleMovie> = {};

        if (storedDataString) {
            storedData = JSON.parse(storedDataString);
        }

        // Xóa item với imdb_id tương ứng khỏi object
        delete storedData[imdb_id];

        // Cập nhật local storage
        localStorage.setItem('watchList', JSON.stringify(storedData));

        // Cập nhật state để render lại
        setWatchList(Object.values(storedData));
    };
    const [email, setEmail] = useState(localStorage.getItem('email') || ''); // Lấy giá trị email từ local storage nếu có
    let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: 'black', height: '100%' }}>
            <Header />
            <Stack sx={{ bgcolor: 'black', height: '100%', cursor: 'pointer' }}>
                <Typography variant="h3" sx={{ color: 'white', textAlign: 'center' }}>Here is your watch list
                    <br /> Mr/Mrs: {email}</Typography>
                <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="left">
                    {Array.isArray(watchList) && watchList.map((item: singleMovie) => (
                        <Grid item xs={6} md={3} lg={2.4} key={item.imdb_id}>
                            <Stack alignItems="center" position="relative"
                                onClick={() => navigate(`/movie/id/${item.imdb_id}`)} >
                                <img
                                    src={item.banner}
                                    style={{
                                        height: "100%", width: '100%', objectFit: 'initial', backgroundColor: 'black',
                                        maxHeight: '300px'
                                    }}
                                />

                                <div
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0,
                                        transition: 'opacity 0.3s ease', backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    }}
                                    onMouseEnter={(e: any) => { e.currentTarget.style.opacity = 1 }}
                                    onMouseLeave={(e: any) => { e.currentTarget.style.opacity = 0 }}
                                >
                                    <Typography variant="h6" color="white" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        {item.title}
                                    </Typography>
                                </div>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} alignContent={'center'} justifyContent={'center'}
                                sx={{
                                    width: '100%', bgcolor: 'red', borderRadius: '5%', padding: '6px ',
                                    ':hover': {
                                        backgroundColor: 'green'
                                    }
                                }} >
                                <DeleteIcon sx={{ color: 'white' }} />
                                <Typography sx={{ color: 'white' }} onClick={() => removeFromWatchList(item.imdb_id)}>Remove</Typography>
                            </Stack>
                        </Grid>
                    ))}

                </Grid>

            </Stack>
            <Footer />
        </div>




    );
}