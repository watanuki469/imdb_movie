import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { movieItem } from 'models';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SliderPageProps {
    popurarityItemList: movieItem[];
}

export default function SliderPage({
    popurarityItemList

}: SliderPageProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = popurarityItemList.length
    // const maxSteps = 50

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const removeDuplicateData = (popurarityItemList: any) => {
        // Sử dụng Set để đảm bảo các phần tử duy nhất
        const uniqueSet = new Set(popurarityItemList.map((item: any) => item.title));
        // Chuyển đổi Set thành mảng để có thể sử dụng các phương thức của mảng
        const uniqueArray = Array.from(uniqueSet);
        // Tạo một mảng mới chỉ chứa các phần tử không trùng lặp
        const result = uniqueArray.map((title) => popurarityItemList.find((item: any) => item.title === title));
        return result;
    };

    // Sử dụng hàm để loại bỏ các phần tử trùng lặp từ mảng movieItemList
    const uniquePopurarityItemList = removeDuplicateData(popurarityItemList);

    const handleImageError = (e: any) => {
        const imgElement = e.currentTarget as HTMLImageElement;
        imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
    };
    const handleBackgroundImageError = (e: any) => {
        e.target.style.backgroundImage = 'url(https://www.dtcvietnam.com.vn/web/images/noimg.jpg)';
        const imgElement = e.currentTarget as HTMLImageElement;
        imgElement.src = 'https://www.dtcvietnam.com.vn/web/images/noimg.jpg'; // Set the fallback image source here
    };

    useEffect(() => {
        const boxElement = document.getElementById('1234567');
        if (boxElement) {
            boxElement.style.backgroundImage = `url(${uniquePopurarityItemList[activeStep]?.banner})`;
            boxElement.addEventListener('error', handleBackgroundImageError);
        }

        return () => {
            if (boxElement) {
                boxElement.removeEventListener('error', handleBackgroundImageError);
            }
        };
    }, [activeStep, uniquePopurarityItemList]);

    let navigate = useNavigate()
    const [imageHeight, setImageHeight] = useState(300); // Chiều cao mặc định của ảnh là 300px
    const halfImageHeight = imageHeight / 2;


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setImageHeight(150); // Đặt chiều cao của ảnh là 100px khi màn hình thu nhỏ
            } else {
                setImageHeight(300); // Đặt lại chiều cao mặc định khi màn hình lớn hơn 600px
            }
        };
        // Chạy handleResize khi trang được tải lần đầu tiên
        handleResize();

        window.addEventListener('resize', handleResize);
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} >
                    <Grid item xs={12} sm={12} md={8}>
                        <Box onClick={() => navigate(`/movie/id/${uniquePopurarityItemList[activeStep]?.imdb_id}`)}
                            id="1234567" sx={{
                                // position: "relative",
                                // "&::before": {
                                //     content: '""', width: "100%", height: "30%", position: "absolute", bottom: 0, left: 0, zIndex: 2, pointerEvents: "none"
                                // },
                                paddingTop: {
                                    xs: "50%", // Giảm xuống 50% cho kích thước màn hình xs
                                    sm: "40%", // Giảm xuống 40% cho kích thước màn hình sm
                                    md: "30%", // Giảm xuống 30% cho kích thước màn hình md
                                    lg: "22.5%" // Giảm xuống 22.5% cho kích thước màn hình lg
                                },
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                                width: '100%',

                                // src={uniquePopurarityItemList[activeStep] && uniquePopurarityItemList[activeStep].banner && uniquePopurarityItemList[activeStep]?.banner}

                                // backgroundImage: uniquePopurarityItemList[activeStep]?.banner ? `url(${uniquePopurarityItemList[activeStep]?.banner})` : 'url(https://www.dtcvietnam.com.vn/web/images/noimg.jpg)', // Thay 'default-background.jpg' bằng đường dẫn của ảnh mặc định
                            }}    >

                            <Stack direction={'row'} sx={{ mt: 5 }}>
                                <div style={{ backgroundColor: 'black', textAlign: 'center' }}>
                                    <img
                                        src={uniquePopurarityItemList[activeStep]?.image_url}
                                        onError={handleImageError}
                                        alt="movie-img"
                                        style={{
                                            alignSelf: 'flex-end',
                                            display: 'block', // Hiển thị ảnh dưới dạng block để đảm bảo nó nằm ở vị trí dưới cùng
                                            marginBottom: '0',
                                            height: `${imageHeight}px`, // Sử dụng dynamic height

                                        }}
                                    />
                                </div>

                                <Stack direction={'column'} sx={{ alignSelf: 'flex-end', width: '100%' }}>
                                    <Stack direction={'row'}>
                                        <PlayCircleOutlineIcon sx={{
                                            fontSize: '60px', color: 'red', alignSelf: 'flex-start', display: { xs: 'flex', md: 'none' }, margin: '6px',
                                            ':hover': {
                                                color: 'yellow',
                                            },
                                        }} />
                                        <Typography variant='h6' sx={{
                                            textDecoration: 'none', color: 'white', alignSelf: 'center',
                                            marginRight: '10px', display: { xs: 'flex', md: 'none' }, justifyContent: 'end',
                                            whiteSpace: 'nowrap', // Ngăn chữ xuống dòng
                                        }}>
                                            {uniquePopurarityItemList[activeStep]?.movie_length} min
                                        </Typography>
                                    </Stack>

                                    <Box sx={{
                                        display: 'flex', bgcolor: 'rgba(0, 0, 0, 0.6)',
                                        alignSelf: 'flex-end', width: '100%', height: `${halfImageHeight}px`
                                    }}>
                                        <Stack direction={'column'}>
                                            <Typography variant='h6' sx={{
                                                textAlign: "left", display: { xs: 'flex', md: 'none' }, overflow: "hidden", textDecoration: 'bold', color: 'white',
                                            }}>
                                                {uniquePopurarityItemList[activeStep]?.title}
                                            </Typography>
                                            <Typography sx={{
                                                color: 'rgba(255, 255, 255, 0.7)', textAlign: "left", display: { xs: 'flex', md: 'none' }, overflow: "hidden", WebkitBoxOrient: "vertical",
                                                marginTop: 'auto', // Đặt margin-top thành auto để nội dung luôn ở dưới cùng


                                            }}>Watch The Trailer
                                            </Typography>
                                        </Stack>
                                        <Stack direction={'row'} sx={{ alignSelf: 'flex-end', }}>
                                            <PlayCircleOutlineIcon sx={{
                                                display: { xs: 'none', md: 'flex' }, height: '100%', bgcolor: 'transparent',
                                                color: 'white', alignSelf: 'center', width: '100px', margin: '6px'
                                                , ':hover': {
                                                    color: 'yellow',
                                                },
                                            }} />

                                            <div style={{ alignSelf: 'center' }}>
                                                <Typography variant='h4' sx={{
                                                    textAlign: "left", display: { xs: 'none', md: 'flex' }, overflow: "hidden", textDecoration: 'bold', color: 'white',
                                                }}>
                                                    {uniquePopurarityItemList[activeStep]?.title}
                                                </Typography>
                                                <Typography sx={{
                                                    color: 'rgba(255, 255, 255, 0.7)', textAlign: "justify", display: { xs: 'none', md: 'flex' }, overflow: "hidden", WebkitBoxOrient: "vertical"
                                                    , marginTop: 'auto', // Đặt margin-top thành auto để nội dung luôn ở dưới cùng

                                                }}>Watch The Trailer
                                                </Typography>

                                            </div>
                                            <Typography variant='h4' sx={{
                                                textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)', alignSelf: 'center', marginRight: '10px', width: '150px'
                                                , display: { xs: 'none', md: 'flex' }, justifyContent: 'end'
                                            }}>
                                                {uniquePopurarityItemList[activeStep]?.movie_length} min
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>


                        <MobileStepper
                            sx={{ backgroundColor: 'transparent', color: 'blue', marginTop: 2 }}
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    sx={{ color: 'red' }}
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    <Typography sx={{ color: 'red' }}> Back </Typography>
                                </Button>
                            }

                        />
                    </Grid>

                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: 'black' }}>
                        <Grid item xs={12} >
                            <Stack spacing={4} direction="row" alignItems="center" sx={{ color: 'yellow', bgcolor: 'black' }}>
                                <Typography variant='h5'>  Up next</Typography>
                            </Stack>
                            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, objectFit: 'contain', display: 'block', width: '100%', bgcolor: 'black' }}>
                                <Stack spacing={1}>
                                    <Stack spacing={2} direction="row" alignItems="center" >
                                        <Avatar variant="square" sx={{ width: '100px', height: '60%', overflow: 'hidden', objectFit: 'cover' }}>
                                            <img
                                                onClick={() => navigate(`/movie/id/${uniquePopurarityItemList[activeStep + 1]?.imdb_id}`)}
                                                src={uniquePopurarityItemList[activeStep + 1]?.image_url}
                                                onError={handleImageError}
                                                alt="movie-img"
                                                style={{ width: '100%', objectFit: 'fill' }}
                                            />
                                        </Avatar>
                                        <Stack>
                                            <Box sx={{ display: 'flex' }}>
                                                <PlayCircleOutlineIcon sx={{
                                                    height: '40px', bgcolor: 'black', color: 'white', width: '40px', margin: '6px', alignSelf: 'center'
                                                    , ':hover': {
                                                        bgcolor: 'black',
                                                        color: 'yellow',
                                                        borderColor: 'red'
                                                    },
                                                }} />
                                                <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'center' }}>
                                                    {uniquePopurarityItemList[activeStep + 1]?.movie_length} min
                                                </h4>
                                            </Box>
                                            <Box>
                                                <h5 style={{
                                                    textAlign: "left", display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", textDecoration: 'bold', color: 'white', marginTop: '0%',
                                                }}>
                                                    {uniquePopurarityItemList[activeStep + 1]?.title}
                                                </h5>
                                                <Typography sx={{
                                                    color: 'gray',
                                                    textAlign: "left",
                                                    overflow: "hidden",
                                                    mt: '-1rem'
                                                }}>
                                                    The Final Match And More</Typography>
                                            </Box>
                                        </Stack>

                                    </Stack>
                                    <Stack spacing={2} direction="row" alignItems="center">
                                        <Avatar variant="square" sx={{ width: '100px', height: '100%', overflow: 'hidden', objectFit: 'cover' }}>
                                            <img
                                                onClick={() => navigate(`/movie/id/${uniquePopurarityItemList[activeStep + 2]?.imdb_id}`)}
                                                onError={handleImageError}
                                                src={uniquePopurarityItemList[activeStep + 2]?.image_url}
                                                alt="movie-img"
                                                style={{ width: '100%', height: '80%', objectFit: 'cover' }}
                                            />
                                        </Avatar>
                                        <Stack>
                                            <Box sx={{ display: 'flex' }}>
                                                <PlayCircleOutlineIcon sx={{
                                                    height: '40px', bgcolor: 'black', color: 'white', width: '40px', margin: '6px', alignSelf: 'center'
                                                    , ':hover': {
                                                        bgcolor: 'black', color: 'yellow', borderColor: 'red'
                                                    },
                                                }} />
                                                <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'center' }}>
                                                    {uniquePopurarityItemList[activeStep + 2]?.movie_length} min
                                                </h4>
                                            </Box>
                                            <Box>
                                                <h5 style={{
                                                    textAlign: "left", overflow: "hidden", textDecoration: 'bold', color: 'white', marginTop: '0%',
                                                }}>
                                                    {uniquePopurarityItemList[activeStep + 2]?.title}
                                                </h5>
                                                <Typography sx={{
                                                    color: 'gray',
                                                    textAlign: "left",
                                                    overflow: "hidden",
                                                    mt: '-1rem'
                                                }}>
                                                    Tell me your mood and feeling</Typography>
                                            </Box>
                                        </Stack>

                                    </Stack>
                                    <Stack spacing={2} direction="row" alignItems="center">
                                        <Avatar variant="square" sx={{ width: '100px', height: '100%', overflow: 'hidden', objectFit: 'cover' }}>
                                            <img
                                                onClick={() => navigate(`/movie/id/${uniquePopurarityItemList[activeStep + 3]?.imdb_id}`)}
                                                src={uniquePopurarityItemList[activeStep + 3]?.image_url}
                                                alt="movie-img"
                                                onError={handleImageError}
                                                style={{ width: '100%', height: '80%', objectFit: 'cover' }}
                                            />
                                        </Avatar>
                                        <Stack>
                                            <Box sx={{ display: 'flex' }}>
                                                <PlayCircleOutlineIcon sx={{
                                                    height: '40px', bgcolor: 'black', color: 'white', width: '40px', margin: '6px', alignSelf: 'center'
                                                    , ':hover': {
                                                        bgcolor: 'black', color: 'yellow', borderColor: 'red'
                                                    },
                                                }} />
                                                <h4 style={{ textDecoration: 'none', color: 'gray', alignSelf: 'center' }}>
                                                    {uniquePopurarityItemList[activeStep + 3]?.movie_length} min
                                                </h4>
                                            </Box>
                                            <Box>
                                                <h5 style={{
                                                    textAlign: "left", overflow: "hidden", textDecoration: 'bold', color: 'white', marginTop: '0%',

                                                }}>
                                                    {uniquePopurarityItemList[activeStep + 3]?.title}
                                                </h5>
                                                <Typography sx={{
                                                    color: 'gray', textAlign: "left", overflow: "hidden", WebkitBoxOrient: "vertical", mt: '-1rem'
                                                }}>
                                                    All Hail Britannia!!</Typography>
                                            </Box>
                                        </Stack>

                                    </Stack>
                                    {/* <Stack spacing={2} direction="row" alignItems="center">
                                    <Typography variant='h4' sx={{ color: 'white' }}>Browse trailer {'>'} </Typography>
                                </Stack> */}
                                </Stack>


                            </Box>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >

    );
}