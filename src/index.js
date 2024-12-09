import React from 'react';
import ReactDOM from 'react-dom/client';
import ImageProvider from './context/ImageContext';
import './styles/index.scss';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>,
);
