// react
import React from 'react';
import ReactDOM from 'react-dom';

// routing
import { BrowserRouter } from 'react-router-dom';

// store
import { Provider } from 'react-redux';
import { store } from './redux/store';

// components
import App from './App';

// styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
