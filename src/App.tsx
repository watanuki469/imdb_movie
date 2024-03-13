import PopularDashBoard from 'components/dashboard/PopularDashBoard';
import PopurarityDashBoard from 'components/dashboard/PopurarityDashBoard';
import { AdminLayout, MovieLayout, NotFound, SingleMovie, WatchList } from 'components/layout';
import { Pro } from 'components/layout/Pro';
import { StarLayout } from 'components/layout/StarLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { Fragment, useEffect } from 'react';
import { PrivateRoute } from 'components/common/PrivateRoute';
import { Home } from 'components/layout/Home';
import { SignUp } from 'features/auth/pages/SignUp';
import { Stack } from '@mui/material';


function App() {
  useEffect(() => {
    // Kiểm tra xem đã chạy lần đầu tiên hay không
    if (!localStorage.getItem('hasRunBefore')) {
      // Nếu là lần đầu tiên, xóa dữ liệu trong localStorage
      localStorage.clear();

      // Đặt biến flag để đánh dấu rằng đã chạy ít nhất một lần
      localStorage.setItem('hasRunBefore', 'true');
    }
  }, []);
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Stack sx={{
        maxWidth: {
          base: "80%", // For extra small screens and up
          sm: "100%",   // For small screens and up
          md: "100%",   // For medium screens and up
          lg: "90%",   // For large screens and up
          xl: "90%",   // For extra large screens and up
        },
        margin: "0 auto", // Center align the Stack horizontally
      }}>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path="/" element={<AdminLayout />} />
            <Route path="/popurarity" element={<PopurarityDashBoard />} />
            <Route path="/movie/byGen/:genre" element={<MovieLayout />} />
            <Route path="/movie/id/:imdb_id" element={<SingleMovie />} />
            <Route path='*' element={<NotFound />} />
            <Route path='IMDbPro' element={<Pro />} />
            <Route path='WatchList' element={<WatchList />} />
            <Route path='Popular' element={<PopularDashBoard />} />
            <Route path='/actor/id/:imdb_id' element={<StarLayout />} />
          </Route>
        </Routes>
      </Stack>
    </div>
  );
}

export default App;
