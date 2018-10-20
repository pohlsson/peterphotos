import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from 'components/containers/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware  } from 'redux';
import reducers from 'reducers/';
import sagas from 'sagas/';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
