import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <div>
    
    <Provider store={store}>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </Provider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <CssBaseline />

    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
