import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux"
import usersReducer from "./redux/Users"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const store = configureStore({
  reducer: {
  users: usersReducer
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();


