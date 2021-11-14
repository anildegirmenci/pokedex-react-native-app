import { combineReducers } from "redux";
import catchReducer from "./catch.reducer";
import themeReducer from './theme.reducer';
import favoriteReducer from "./favorite.reducer";


export default combineReducers({
    themeReducer, catchReducer, favoriteReducer
});

