// react
import React from 'react';
import ReactDOM from 'react-dom';

// store
import { Provider } from 'react-redux';
import { store } from './redux/store';

// components
import App from './App';

// styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
