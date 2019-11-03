import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { App } from "./src/app"
import { initializeStore } from "./src/store";
const store = initializeStore();


ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
  document.getElementById('root'),
)