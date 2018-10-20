import { fork, takeEvery } from 'redux-saga/effects'
import {getPhotos} from 'sagas/apiSagas';

function* watchGetPhotos() {
  yield takeEvery("USER_FETCH_REQUESTED", getPhotos);
}

function* sagas() {
  yield fork(watchGetPhotos);
}

export default sagas;
