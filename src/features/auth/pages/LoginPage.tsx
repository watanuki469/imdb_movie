import ClearIcon from '@mui/icons-material/Clear';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../authSlice';
import { toast } from 'react-toastify';


function Copyright(props: any) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">  Vasiliev Movie Website     </Link>{' '}
            {new Date().getFullYear()}    {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

export function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    let navigate = useNavigate()
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector((state) => state.auth.logging);

    const handleLoginClick = () => {
        if (email.length < 8 || password.length < 8) {
            return; // Ngăn người dùng ấn nút nếu email hoặc password không đạt độ dài yêu cầu
        }
        setIsProcessing(true); // Đánh dấu rằng quá trình đang được xử lý

        setTimeout(() => {
            // TODO: Get username + pwd from login form
            dispatch(login({ username: '', password: '', }));
            setIsProcessing(false); // Kết thúc quá trình xử lý
            // Toast success
            setTimeout(() => { navigate('/') }, 1500);
        }, 100);
        localStorage.setItem('email', email);
        toast.success(`Welcome to Vasiliev Movie Palace Mr/Mrs: ${email}`)


    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'), password: data.get('password'),
        });

    }

    const handleChange = (event: any) => {
        setPassword(event.target.value);

    };

    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        // Kiểm tra email có đủ dài và chứa '@gmail.com' ở cuối không
        setIsValidEmail(newEmail.length >= 8 && newEmail.endsWith('@gmail.com'));

    };
    const handleClearEmail = () => {
        setEmail(''); // Xóa nội dung của email khi người dùng nhấn vào biểu tượng "X"
        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };
    const handleClearPassword = () => {
        setPassword(''); // Xóa nội dung của email khi người dùng nhấn vào biểu tượng "X"
        if (passwordRef.current) {
            passwordRef.current.value = '';
        }
    };
    const searchRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    return (
        <Container component="main" maxWidth="xs" 
        >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'  }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="gmail"
                        label="gmail@gmail.com"
                        type="gmail"
                        id="gmail"
                        inputRef={searchRef}
                        autoComplete="current-gmail"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {isValidEmail ? '✅' : '❌'}
                                    {email && ( // Hiển thị biểu tượng X chỉ khi có nội dung trong TextField và email hợp lệ
                                        <IconButton
                                            onClick={handleClearEmail}
                                            edge="end"
                                            aria-label="clear"
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    )}
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        inputRef={passwordRef}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (

                                <InputAdornment position="end">
                                    {password.length >= 8 ? '✅' : '❌'} {/* Hiển thị biểu tượng tương ứng với mật khẩu đủ độ dài */}
                                    {password && ( // Hiển thị biểu tượng X chỉ khi có nội dung trong TextField
                                        <IconButton
                                            onClick={handleClearPassword}
                                            edge="end"
                                            aria-label="clear"
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    )}
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />} label="Remember me"
                    />
                    <Button
                        onClick={handleLoginClick} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                        disabled={!isValidEmail || email.length < 8 || password.length < 8}
                    >
                        {isProcessing ? (
                            <CircularProgress size={20} color="secondary" />
                        ) : (
                            'Login'
                        )}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>

    )
}