import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.render(
  // строгий режим -
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
