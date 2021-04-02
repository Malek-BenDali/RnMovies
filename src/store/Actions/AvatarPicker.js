import * as actionTypes from './Types';

export const AvatarPicker = payload => dispatch => {
  return dispatch({
    type: actionTypes.AVATAR_IMAGE,
    payload,
  });
};
