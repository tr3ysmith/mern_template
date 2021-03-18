import { NEW_ALERT, OPEN_DIALOG, CLOSE_DIALOG, SET_LOADING } from "../types";

const initialState = {
    loading: false,
    alerts: [],
    dialog: {
        open: false,
        title: '',
        message: '',
        confirmation: false,
        dispatch: null
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case NEW_ALERT:
            return{
                ...state,
                alerts: [...state.alerts, action.payload]
            }

        case OPEN_DIALOG:
            return {
                ...state,
                loading: false,
                dialog: {
                    open: true,
                    ...action.payload
                }
            }

        case CLOSE_DIALOG:
            return {
                ...state,
                loading: false,
                dialog: initialState.dialog
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.value,
            }

        default:
            return state;
    }//end switch
    
}//end ()


export default reducer;