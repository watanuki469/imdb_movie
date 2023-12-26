import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout, MovieLayout, NotFound, SingleMovie } from 'components/layout';
import PopurarityDashBoard from 'components/dashboard/PopurarityDashBoard';


function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="/" element={<AdminLayout />} />
        <Route path="/popurarity" element={<PopurarityDashBoard />} />
        <Route path="/movie/byGen/:genre" element={<MovieLayout/>}/>
        <Route path="/movie/id/:imdb_id" element={<SingleMovie/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
