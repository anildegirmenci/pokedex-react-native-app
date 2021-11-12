import { combineReducers } from "redux";
import catchReducer from "./catch.reducer";
import themeReducer from './theme.reducer';


export default combineReducers({
    themeReducer, catchReducer
});

