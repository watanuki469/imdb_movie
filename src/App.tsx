import PopularDashBoard from 'components/dashboard/PopularDashBoard';
import PopurarityDashBoard from 'components/dashboard/PopurarityDashBoard';
import { AdminLayout, MovieLayout, NotFound, SingleMovie } from 'components/layout';
import { Pro } from 'components/layout/Pro';
import { StarLayout } from 'components/layout/StarLayout';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="/" element={<AdminLayout />} />
        <Route path="/popurarity" element={<PopurarityDashBoard />} />
        <Route path="/movie/byGen/:genre" element={<MovieLayout/>}/>
        <Route path="/movie/id/:imdb_id" element={<SingleMovie/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='IMDbPro' element={<Pro />}/>
        <Route path='Popular' element={<PopularDashBoard/>}/>
        <Route path='/actor/id/:imdb_id' element={<StarLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
