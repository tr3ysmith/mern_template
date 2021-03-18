import { combineReducers } from "redux";

import GeneralReducer from "./GeneralReducer";

const rootReducer = combineReducers({
    general: GeneralReducer,
})

export default rootReducer;