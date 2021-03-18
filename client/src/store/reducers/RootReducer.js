import { combineReducer } from "redux";

import GeneralReducer from "./GeneralReducer";

export default combineReducers({
    general: GeneralReducer,
})