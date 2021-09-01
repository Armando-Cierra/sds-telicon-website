import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@2600hz/sds-core/sds-reset.scss';
import '@2600hz/sds-themes/sds_default-theme.scss';
import '@2600hz/sds-themes/sds_dark-theme.scss';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
