import React from "react";
import List from "../components/list";
import style from "../assets/css/main.css";

function WrapperList({ inputCurency, money, country, perOne = 1, calculateMoney, codeCountry }) {

    return (
        <>
            <div class="container" className={style.border}>
                <div class="">
                    <List money={money} country={country} perOne={perOne} inputCurency={inputCurency} calculateMoney={calculateMoney} codeCountry={codeCountry}/>
                </div>
            </div>
        </>
    )

}

export default WrapperList;