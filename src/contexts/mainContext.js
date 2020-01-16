import React, { useReducer, createContext, useEffect } from "react";
import mainReducer  from "../reducers/mainReducer.js";

const MainContext = createContext();

const initialState = {
    test: "work",
    codes: ["IDR", "EUR", "GBP", "SGD"],
    currentCurrency: {},
    baseCurrency: null, 
    supportCodes: null,
};


const  MainContextProvider = props => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    const value = { state, dispatch };

    return (
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}

export { MainContext, MainContextProvider };