import {combineReducers} from 'redux';
import {photosReducer} from 'reducers/photos';

const reducers = combineReducers({
  photosReducer,
});

export default reducers;
