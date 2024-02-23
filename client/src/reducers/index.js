import { combineReducers } from "redux";
import { propertiesListReducer } from "./porpertyReducers";

export default combineReducers({
    propertiesList: propertiesListReducer,
});