import * as actionTypes from '../Actions/Types';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const initialState = {
  favoriteFilms: [],
};

const toggleFavorite = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      const favoriteFilmIndex = state.favoriteFilms.findIndex(
        item => item.id === action.value.id,
      );
      if (favoriteFilmIndex !== -1)
        updateObject(state, {
          favoriteFilms: state.favoriteFilms.filter(
            (item, index) => index !== favoriteFilmIndex,
          ),
        });
      else
        updateObject(state, {
          favoriteFilms: [...state.favoriteFilms, action.value],
        });
      return state;
    default:
      nextState;
  }
};

export default toggleFavorite;
