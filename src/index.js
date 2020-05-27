import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
