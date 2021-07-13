import React from 'react';
import ReactDOM from 'react-dom';

// persist
import { PersistGate } from 'redux-persist/integration/react';

// routing
import { BrowserRouter } from 'react-router-dom';

// store
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// components
import App from './App';

// styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
