import { AppBar, Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { Footer, Header } from "components/common";
import { singleMovie } from "models";
import { useEffect, useState } from "react";

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

    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            <Stack sx={{ bgcolor: 'black', height: '100%' }}>
                <Typography variant="h3" sx={{ color: 'white', textAlign: 'center' }}>Welcome to your watch list: {email}</Typography>
                <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="left">
                    {Array.isArray(watchList) && watchList.map((item: singleMovie) => (
                        <Grid item xs={6} md={3} lg={2.4} key={item.imdb_id}>
                            <Stack alignItems="center">
                                <img
                                    src={item.banner}
                                    style={{
                                        height: "280px", maxWidth: '200px', objectFit: 'initial',
                                        backgroundColor: 'black',
                                    }}
                                />
                                <Typography variant="h6" color="red">
                                    {item.title}
                                </Typography>
                                <Button fullWidth sx={{ color: 'white' }} onClick={() => removeFromWatchList(item.imdb_id)}>Remove</Button>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

            </Stack>
        </div>




    );
}