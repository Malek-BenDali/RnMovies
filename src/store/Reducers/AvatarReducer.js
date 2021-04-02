import * as actionTypes from '../Actions/Types';

const initialState = {
  avatarImage: require('../../../assets/images/avatar.jpg'),
};

const AvatarReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.AVATAR_IMAGE:
      nextState = '../' + action.payload;
      return nextState || state;
    default:
      return state;
  }
};

export default AvatarReducer;
