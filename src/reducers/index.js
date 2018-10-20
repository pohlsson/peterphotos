import {combineReducers} from 'redux';
import {photosReducer} from 'reducers/photos';

const app = combineReducers({
  photosReducer,
});

export default app;
