const initialState = {
  photos: [],
}
export const photosReducer = (state = initialState, action) => {
  switch (action) {
    case 'GET_PHOTOS_DONE':
      return state;
    default:
      return state;
  }
}
