import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from 'components/containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import app from 'reducers/'

const store = createStore(app)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
