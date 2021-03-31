import * as actionTypes from '../Actions/Types';

const initialState = {
  favoriteFilms: [],
};

const ToggleFavorite = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      const favoriteFilmIndex = state.favoriteFilms.findIndex(
        item => item.id === action.value.id,
      );
      if (favoriteFilmIndex !== -1)
        nextState = {
          ...state,
          favoriteFilms: state.favoriteFilms.filter(
            (item, index) => index !== favoriteFilmIndex,
          ),
        };
      else
        nextState = {
          ...state,
          favoriteFilms: [...state.favoriteFilms, action.value],
        };
      console.log('nextState : ' + nextState);
      return nextState || state;
    default:
      console.log('state ' + state);
      return state;
  }
};

export default ToggleFavorite;
