const mainReducer = ( state, { type, payload }) => {
    switch(type) {
        case "DEL_CODE": 
            return {
                ...state,
                codes: delete state.currentCurrency[payload]
            }
        case "SUPPORT_CURRENCY": 
            return {
                ...state, 
                supportCodes: payload,
            }
        case "ADD_CURRENCY":
            return {
                ...state,
                codes: [ ...state.codes, payload]
            }
        case "CURRENT_CURRENCY":
            return {
                ...state,
                currentCurrency: payload,
            }
        default:
            return state;
    }
};

export default mainReducer;