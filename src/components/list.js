import React, { useContext } from "react";
import style from "../assets/css/main.css";
import { MainContext } from "../contexts/mainContext"

function List({ inputCurency = "USD", money, country, perOne, calculateMoney, codeCountry }) {

    const { dispatch } = useContext(MainContext)

    const test = (e) => {
        e.preventDefault();
        dispatch({ type: "DEL_CODE", payload: country  })
    }
    
    return (
        <>
            <div class="d-flex justify-content-between flex-row">
                <div class="px-4 d-flex justify-content-center flex-column">
                    <div class="p-2 d-flex justify-content-between w-75">
                        <div class="mr-5 my-auto">
                            <span> { money.toUpperCase() }</span>
                        </div>
                        <div>
                            <span> {calculateMoney}</span>
                        </div>
                    </div>
                    <div class="p-2">
                        <span style={{ fontStyle:"italic"}}> <b> { country.toUpperCase() } - {codeCountry}</b> </span>
                    </div>
                    <div class="p-2">
                        <span style={{ fontStyle:"italic"}}> 1 {inputCurency.toUpperCase()} =  { perOne }</span>
                    </div>
                </div>
                <div className={ style.del }>
                    <span class="p-3 my-auto" onClick={test}> <b> (-) </b> </span>
                </div>
            </div>
        </>
    );
}

export default List;