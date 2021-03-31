import * as actionTypes from './Types';

export const LikeFilm = payload => dispatch => {
  return dispatch({
    type: actionTypes.TOGGLE_FAVORITE,
    payload,
  });
};
