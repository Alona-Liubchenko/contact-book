import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
