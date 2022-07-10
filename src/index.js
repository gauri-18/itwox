import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/store';

import './index.css';

export default function MyPage() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyPage />
  </React.StrictMode>
);
