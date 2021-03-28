import React, { Component, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Speed = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [inputUnit, setInputUnit] = useState("");
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);
    const [conversions, setConversions] = useState({});
    
    
    //CONVERSIONS ASSUMING days IS EQUAL TO 1 -- GIVES RATIOS
    const conversionTable = {
        "days": 1,
        "ns": 8.64e13,
        "ms" : 86400000,
        "s" : 86400,
        "minute" : 1440,
        "hour" : 24,
        "week" : 0.142857142857143,
        "fortnite" : 0.071428571428571,
        "month" : 0.032876676299533,
        "year" : 0.002739726027397,
        "decade" : 0.0002739726027397,
        "century" : 0.00002739726027397,
        "millenia" : 0.000002739726027397,
        "shake" : 8.64e14,
        "jiffy" : 8640000,
        "microfortnite" : 71428.5714286,
        "dogyear" : 0.019178082244324,
        "moment" : 960
    }


    useEffect(() => {
        loadConversions();
    }, []);

    function loadConversions() {
        setConversions(conversionTable);
        console.log(conversionTable);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }

    const handleSetResultUnit = (e) => {
        setResultUnit(e.target.value);
    }
    const handleSetInputUnit = (e) => {
        setInputUnit(e.target.value);
    }

    // days TO ANYTHING
    // const daysToAnything = () => {
    //     setResult(inputValue * conversions[resultUnit]);
    // }

    // // ANYTHING TO days
    // const anythingToDays = () => {
    //     setResult(inputValue * (1 / conversions[inputUnit]));
    // }

    // IF NO Days, CONVERT WITH THIS EQUATION
    const convertIt = () => {
        setResult(inputValue * (1 / conversions[inputUnit]) * conversions[resultUnit])
    }
    

    //IF/ELSE/IF STATEMENTS TO CALL CONVERSION FN'S
    const handleConvert = (e) => {
        e.preventDefault();
        console.log(resultUnit, " resultUnit");
        console.log(inputUnit, " inputUnit")
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");

        //checking for unselected units
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "0" || outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "0") {
            alert("You must select a unit.");
        }
        // IF INPUT AND OUTPUT UNIT ARE THE SAME
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === outputUnitMenu.options[outputUnitMenu.selectedIndex].value) {
            console.log("no can do, buckaroo");
            alert("You must select two different units to convert");
        }
        // else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "0" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "days") {
        //     anythingToDays();
            
        // } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "days" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "0") {
        //     daysToAnything();
        // }
         else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "0" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "0") {
            convertIt();
        }
        // IF NOTHING MATCHES
        else {
            console.log("Lauren, you done goofed");
        }
    }

    return (
        <div className="row mainSection">
            {/* <div className="col-md-1"></div> */}
            <SideBar />

            <div className="col-9">
                <div className="row titleRow">
                    <div className="col-md-12">
                        <h3>Time</h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-5 col-xs-10 col-sm-10 inputBox">
                    
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput" onChange={handleSetInputUnit}>
                                <option value="0">Select unit:</option>
                                <option value="days">days</option>
                                <option value="ns">nanoseconds</option>
                                <option value="ms">microseconds</option>
                                <option value="s">seconds</option>
                                <option value="minute">minutes</option>
                                <option value="hour">hours</option>
                                <option value="week">week</option>
                                <option value="fortnite">fortnight</option>
                                <option value="month">months</option>
                                <option value="year">years</option>
                                <option value="decade">decades</option>
                                <option value="century">centuries</option>
                                <option value="millenia">millenia</option>
                                <option value="shake">shake</option>
                                <option value="jiffy">jiffy</option>
                                <option value="microfortnite">microfortnight</option>
                                <option value="dogyear">dog-year</option>
                                <option value="moment">moment</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* <div className="row"> */}
                    <div className="col-md-2 col-xs-10 col-sm-10 buttonBox">
                        <button className="convertBtn" onClick={handleConvert}>Convert!</button>
                    </div>
                            
                    {/* </div> */}
                    <div className="col-md-5 col-xs-10 col-sm-10 resultBox">Result: {result} 
                        <div className="select outputMenu text-center">
                            <select id="unitOutput" className="unitMenu" name="unitOutput" onChange={handleSetResultUnit}>
                            <option value="0">Select unit:</option>
                                <option value="days">days</option>
                                <option value="ns">nanoseconds</option>
                                <option value="ms">microseconds</option>
                                <option value="s">seconds</option>
                                <option value="minute">minutes</option>
                                <option value="hour">hours</option>
                                <option value="week">week</option>
                                <option value="fortnite">fortnight</option>
                                <option value="month">months</option>
                                <option value="year">years</option>
                                <option value="decade">decades</option>
                                <option value="century">centuries</option>
                                <option value="millenia">millenia</option>
                                <option value="shake">shake</option>
                                <option value="jiffy">jiffy</option>
                                <option value="microfortnite">microfortnight</option>
                                <option value="dogyear">dog-year</option>
                                <option value="moment">moment</option>
                            </select>
                        </div>
                    </div>
                </div>
            
            </div>        
        </div>
    );
};

export default Speed;