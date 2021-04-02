import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import toggleFavorite from './Reducers/ToggleFavorite';
import avatarReducer from './Reducers/AvatarReducer';

const reducers = combineReducers({toggleFavorite, avatarReducer});

export default createStore(reducers, compose(applyMiddleware(thunk)));
