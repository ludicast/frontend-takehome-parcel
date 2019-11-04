import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { App } from "./src/app"
import { configureStore } from "./src/store";

const { store, persistor} = configureStore();
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root'),
)