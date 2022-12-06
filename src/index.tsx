import App from './App';
import store, { persistor } from "./store/index";
import ReactDOM from 'react-dom/client';

import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={ store }>
          <PersistGate persistor={ persistor }>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);