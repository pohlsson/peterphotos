

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* getPhotos(action) {
   try {
    /*  const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});*/
   } catch (e) {
    //  yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
