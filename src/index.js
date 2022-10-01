import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'

import ShowsState from './context/shows/ShowsState';
import AlertsState from './context/alerts/AlertsState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <AlertsState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertsState>
  </ShowsState>
);


