import React, { Component, useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import axios from "axios";
import "../App.css";
import API from "../api/API";

const Currency = () => {
    const [inputValue, setInputValue] = useState(Number);
    // const [inputUnit, setInputUnit] = useState("");
    const [result, setResult] = useState(Number);
    // const [resultUnit, setResultUnit] = useState(String);
    const [latestCurrencies, setLatestCurrencies] = useState([]);  
    const [latestUpdate, setLatestUpdated] = useState(String);

    useEffect(() => {
        loadLatestCurrencies();
    }, []);

    //establishing latest conversion rates and setting the array of 
    //objects to
    function loadLatestCurrencies() {
        API.getAllCurrencies()
        .then((res) => {
            setLatestCurrencies(res.data.rates);
            setLatestUpdated(res.data.date);
            console.log(res.data.rates);
        })
        .catch((err) => console.log(err));
    }
    
    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }
    // CONVERSION EQUATIONS
    // must convert to euro, then to other currency?

    //euro to anything
    const euroToAnything = (id) => {
        setResult(inputValue * latestCurrencies[id].value);
    }
    //USD to Euro
    const usdToEuro = () => {
        setResult(inputValue * (1/latestCurrencies.USD));
        console.log(latestCurrencies.inputUnit);
    }
    // const euroToUSD = () => {
    //     setResult(inputValue * latestCurrencies.USD);
    // }


    //euro to CAD
    //euro to HKD
    //EURO TO ISK
    //EURO TO PHP
    //EURO TO DKK
    //EURO TO HUF
    //EURO TO CZK 
    //EURO TO AUD 
    //EURO TO RON 
    //EURO TO SEK 
    //EURO TO IDR 
    //EURO TO INR 
    //EURO TO BRL 
    //EURO TO RUB 
    //EURO TO HRK 
    //EURO TO JPY 
    //EURO TO THB 
    //EURO TO CHF 
    //EURO TO SGD 
    //EURO TO PLN 
    //EURO TO BGN 
    //EURO TO TRY 
    //EURO TO CNY 
    //EURO TO NOK 
    //EURO TO NZD 
    //EURO TO ZAR 
    //EURO TO MXN 
    //EURO TO ILS 
    //EURO TO GBP
    //EURO TO KRW 
    //EURO TO MYR
    
    //USD TO CAD
    //USD TO HKD
    //USD TO ISK
    //USD TO PHP
    //USD TO DKK
    //USD TO HUF
    //USD TO CZK
    //USD TO AUD
    //USD TO RON
    //USD TO SEK
    //USD TO IDR
    //USD TO INR
    //USD TO BRL
    //USD TO RUB
    //USD TO HRK
    //USD TO JPY
    //USD TO THB
    //USD TO CHF
    //USD TO SGD
    //USD TO PLN
    //USD TO BGN
    //USD TO TRY
    //USD TO CNY
    //USD TO NOK
    //USD TO NZD
    //USD TO ZAR
    //USD TO MXN
    //USD TO ILS
    //USD TO GBP
    //USD TO KRW
    //USD TO MYR
    

    

    const handleConvert = (e) => {
        e.preventDefault();
        console.log(latestCurrencies, " latest currencies");
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        let unitInputValue = inputUnitMenu.options[inputUnitMenu.selectedIndex].value;
        let unitOutputValue = outputUnitMenu.options[outputUnitMenu.selectedIndex].value;
        console.log(unitInputValue);
        console.log(unitOutputValue);
        // setResultUnit(unitOutputValue);
        // setInputUnit(unitInputValue);
        //COMPARING USER CHOICES
        //pints and quarts
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "USD" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "EU") {
            usdToEuro();
            console.log("usdToEuro is firing");
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].valueValue === "EU" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "0") {
            euroToAnything();
        }
        //IF USER DOES NOT SELECT A UNIT
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "0" || outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "0") {
            alert("You must select a unit.");
        }
        // IF INPUT AND OUTPUT UNIT ARE THE SAME
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === outputUnitMenu.options[outputUnitMenu.selectedIndex].value) {
            console.log("no can do, buckaroo");
            alert("You must select two different units to convert");
        }
        // IF NOTHING MATCHES
        else {
            console.log("Lauren, you done goofed");
            alert("Error: Lauren goofed");
        }
    }

    return (

        <div className="row mainSection">
            {/* <div className="col-md-1"></div> */}
            <SideBar />
            {/* START CONVERTER BOX */}
            <div className="col-9">
                <div className="row titleRow">
                    <div className="col-md-12">
                        <h3>Currency</h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                    
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput">
                                <option value="0">Select unit:</option>

                                <option value="USD">US Dollar</option>
                                <option value="EU">Euro</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="HKD">Hong Kong Dollar</option>
                                <option value="ISK">Icelandic Króna</option>
                                <option value="PHP">Philippine Peso</option>
                                <option value="DKK">Danish krone</option>
                                <option value="HUF">Hungarian forint</option>
                                <option value="CZK">Czech koruna</option>
                                <option value="AUD">Australian Dollar</option>
                                <option value="RON">Romanian leu</option>
                                <option value="SEK">Swedish krona</option>
                                <option value="IDR">Indonesian rupiah</option>
                                <option value="INR">Indian rupee</option>
                                <option value="BRL">Brazilian real</option>
                                <option value="RUB">Russian ruble</option>
                                <option value="HRK">Croatian kuna</option>
                                <option value="JPY">Japanese Yen</option>
                                <option value="THB">Thai Baht</option>
                                <option value="CHF">Swiss Franc</option>
                                <option value="SGD">Singapore Dollar</option>
                                <option value="PLN">Polish złoty</option>
                                <option value="BGN">Bulgarian lev</option>
                                <option value="TRY">Turkish lira</option>
                                <option value="CNY">Chinese yuan / renmibi</option>
                                <option value="NOK">Norwegian krone</option>
                                <option value="NZD">New Zealand Dollar</option>
                                <option value="ZAR">South African rand</option>
                                <option value="MXN">Mexican peso</option>
                                <option value="ILS">Israeli New Shekel</option>
                                <option value="GBP">Great Britain pound</option>
                                <option value="KRW">South Korean won</option>
                                <option value="MYR">Malaysian ringgit</option>
                                

                            </select>
                        </div>
                    </div>
                    
                    {/* <div className="row"> */}
                    <div className="col-md-2 col-xs-10 col-sm-10 buttonBox">
                        <button className="convertBtn" onClick={handleConvert}>Convert!</button>
                    </div>
                            
                    {/* </div> */}
                    <div className="col-md-4 col-xs-10 col-sm-10 resultBox">
                        <div className="row">
                            <div className="col-md-3">
                                <p>Result: </p>
                            </div>
                            <div className="col-md-8">
                                <p className="">{result}</p>
                            </div>
                            
                        </div>
                        
                        
                        <div className="select outputMenu text-center">
                            <select id="unitOutput" className="unitMenu" name="unitOutput">
                                <option value="0">Select unit:</option>
                                <option value="USD">US Dollar</option>
                                <option value="EU">Euro</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="HKD">Hong Kong Dollar</option>
                                <option value="ISK">Icelandic Króna</option>
                                <option value="PHP">Philippine Peso</option>
                                <option value="DKK">Danish krone</option>
                                <option value="HUF">Hungarian forint</option>
                                <option value="CZK">Czech koruna</option>
                                <option value="AUD">Australian Dollar</option>
                                <option value="RON">Romanian leu</option>
                                <option value="SEK">Swedish krona</option>
                                <option value="IDR">Indonesian rupiah</option>
                                <option value="INR">Indian rupee</option>
                                <option value="BRL">Brazilian real</option>
                                <option value="RUB">Russian ruble</option>
                                <option value="HRK">Croatian kuna</option>
                                <option value="JPY">Japanese Yen</option>
                                <option value="THB">Thai Baht</option>
                                <option value="CHF">Swiss Franc</option>
                                <option value="SGD">Singapore Dollar</option>
                                <option value="PLN">Polish złoty</option>
                                <option value="BGN">Bulgarian lev</option>
                                <option value="TRY">Turkish lira</option>
                                <option value="CNY">Chinese yuan / renmibi</option>
                                <option value="NOK">Norwegian krone</option>
                                <option value="NZD">New Zealand Dollar</option>
                                <option value="ZAR">South African rand</option>
                                <option value="MXN">Mexican peso</option>
                                <option value="ILS">Israeli New Shekel</option>
                                <option value="GBP">Great Britain pound</option>
                                <option value="KRW">South Korean won</option>
                                <option value="MYR">Malaysian ringgit</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row creditRow">
                    <div className="col-md-6">
                        <p>Thanks to the European Central Bank for their Exchange Rates API.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Last Updated: {latestUpdate}</p>
                    </div>
                </div>
            </div> 
           {/* END CONVERTER BOX (COLUMNS) */}
        </div>
        
    );
};

export default Currency;