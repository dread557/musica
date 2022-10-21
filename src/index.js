import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScreensizeProvider from './contexts/Screensize';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './app/store';
import { Provider } from 'react-redux';
import SongContextProvider from './contexts/SongContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScreensizeProvider>
      <SongContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SongContextProvider>
    </ScreensizeProvider>
  </Router>


);

