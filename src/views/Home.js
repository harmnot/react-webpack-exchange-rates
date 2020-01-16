import React, { useState, useContext, useRef, useEffect} from 'react';
import style from "../assets/css/main.css";
import { MainContext } from "../contexts/mainContext";
import API from "../backend";
import WrapperList from "../components/wrapperList";
import formatMoney from "../helper/formatMoney";
import currencyCode from "../helper/currencyCode";

function Home() {
  const { state, dispatch } = useContext(MainContext);
  const [baseMoney, setBaseMoney] = useState(10.00);
  const [dropDown, setDropDown] = useState(false);
  const [stateCode, setStateCode] = useState(["IDR", "EUR", "GBP", "SGD"])
  const codeInput = useRef("");

  useEffect(() => {

    const codes = stateCode.join(",");
    API.get(`latest?base=USD&symbols=${codes}`)
    .then( ({ data}) => {
        dispatch({ type: "CURRENT_CURRENCY", payload: data.rates});
    })
    .catch(err => console.log(err));

  
    API.get(`latest`)
    .then( ({ data}) => {
        dispatch({ type: "SUPPORT_CURRENCY", payload: Object.keys(data.rates)});
    })
    .catch(err => console.log(err));

  }, [stateCode])

  const handleSubmit = e => {
    e.preventDefault();
    if(codeInput.current.value === "" ) {
      console.log("enter input")
    } else {
      for (let i of state.supportCodes) {
        if(i !== codeInput.current.value.toUpperCase() ) {
          
        } else {
          setStateCode([...stateCode, codeInput.current.value.toUpperCase()]);
          codeInput.current.value = "";
          setDropDown(false);
        }
      } 
    }
  }

  return (
      <div className={style.color}>
        <div class="container">
          <div class="py-5">
            <h3> Foreign Exchange Currency </h3>
            <div class="border px-2 mt-4">
            <div class="my-2 py-2 px-2 d-flex flex-column">
              <div class="px-4 mb-3">
                <span> USD - {currencyCode("USD") }</span>
              </div>
              <div class="d-flex flex-row">
                  <div class="px-4 mr-3">
                    <span> <b> USD </b> </span>
                  </div>
                  <div>
                    <span> <b> {Number.parseFloat(baseMoney).toFixed(2)} </b> </span>
                  </div>
              </div>
            </div>
            <div style={{borderBottom:"1.8px solid white"}}></div>
            {
              Object.entries(state.currentCurrency).map(([code, money], index) => {
              return <WrapperList money={code} country={code} key={money} codeCountry={currencyCode(code)} perOne={formatMoney(code, money)} calculateMoney={formatMoney(code, money * baseMoney)}/>
              })
            }
            <div className={style.border2}>
              <div class="p-2 text-center d-flex flex-column">
                <div>
                  <span onClick={() => setDropDown(!dropDown)} style={{cursor: "pointer"}}> {dropDown ? "(-)" : "(+) Add More Currencies"} </span>
                </div>
                  {{
                    ['true']: 
                      <div class="input-group my-3">
                        <input type="text" class="form-control" placeholder="Input Currency's Code" aria-label="Input Currency's Code" aria-describedby="basic-addon2"  ref={codeInput}/>
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Submit</button>
                          </div>
                      </div>
                  }[dropDown]}
              </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
  );

}

export default Home;
