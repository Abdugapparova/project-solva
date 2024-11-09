import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './types/store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


