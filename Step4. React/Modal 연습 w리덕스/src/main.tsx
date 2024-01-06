import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { ManageUIContext } from './components/common/uiContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ManageUIContext>
        <App />
      </ManageUIContext>
    </Provider>
  </React.StrictMode>
);
