import React, { Component, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Speed = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [inputUnit, setInputUnit] = useState("");
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);
    const [conversions, setConversions] = useState({});
    
    
    //CONVERSIONS ASSUMING years IS EQUAL TO 1 -- GIVES RATIOS
    const conversionTable = {
        "days": (1 / 365),
        "ns": 0.277778,
        "ms" : 0.621371,
        "s" : 0.539957,
        "minute" : 0.911344,
        "hour" : 0.000809848,
        "week" : 0.000000000926567,
        "fortnite" : 0.0103562,
        "month" : 0.000277778,
        "year" : 1,
        "decade" : 0.000277778,
        "century" : 0.000277778,
        "month" : 0.000277778,
        "month" : 0.000277778,
        "month" : 0.000277778
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

    // year TO ANYTHING
    const kmphToAnything = () => {
        setResult(inputValue * conversions[resultUnit]);
    }

    // ANYTHING TO year
    const anythingToKmph = () => {
        setResult(inputValue * (1 / conversions[inputUnit]));
    }

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
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "0" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kmph") {
            anythingToKmph();
            
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kmph" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "0") {
            kmphToAnything();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "kmph" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "kmph") {
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
                        <h3>Speed / Velocity</h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-5 col-xs-10 col-sm-10 inputBox">
                    
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput" onChange={handleSetInputUnit}>
                                <option value="0">Select unit:</option>
                                <option value="kmph">km/hr</option>
                                <option value="mps">m/s</option>
                                <option value="mph">mph</option>
                                <option value="knots">knots</option>
                                <option value="fps">ft./s</option>
                                <option value="mach">Mach Number</option>
                                <option value="light">Light Speed</option>
                                <option value="mpm">mile/min.</option>
                                <option value="kmps">km/s</option>
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
                                <option value="kmph">km/hr</option>
                                <option value="mps">m/s</option>
                                <option value="mph">mph</option>
                                <option value="knots">knots</option>
                                <option value="fps">ft./s</option>
                                <option value="mach">Mach Number</option>
                                <option value="light">Light Speed</option>
                                <option value="mpm">mile/min.</option>
                                <option value="kmps">km/s</option>
                            </select>
                        </div>
                    </div>
                </div>
            
            </div>        
        </div>
    );
};

export default Speed;