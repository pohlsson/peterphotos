import {photoActions, status} from 'actions/actionTypes';

export const getPhotos = () => ({
  type: photoActions.GET_PHOTOS + status.PENDING,
});
