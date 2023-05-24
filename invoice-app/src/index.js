

import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './Component/App';
// import SignIn from './Component/signInForm';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import store, { persistor } from './Redux/Store';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // connected app to the browser's URL
  <BrowserRouter>
    <React.StrictMode>
      < Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();