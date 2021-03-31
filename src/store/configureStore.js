import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import toggleFavorite from './Reducers/ToggleFavorite';

export default createStore(toggleFavorite, compose(applyMiddleware(thunk)));
