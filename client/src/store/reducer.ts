import { combineReducers } from "redux";

import GeneralReducer from "./general/reducer";

const rootReducer = combineReducers({
    general: GeneralReducer,
})

export default rootReducer;