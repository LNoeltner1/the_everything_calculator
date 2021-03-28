import React, { Component, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";
// import { set } from 'mongoose';



const Distance = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [inputUnit, setInputUnit] = useState("");
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);
    const [conversions, setConversions] = useState({});
    
    
    //CONVERSIONS ASSUMING days IS EQUAL TO 1 -- GIVES RATIOS
    const conversionTable = {
        "meters": 1,
        "inches": 8.64e13,
        "feet" : 86400000,
        "yards" : 86400,
        "miles" : 1440,
        "millimeters" : 24,
        "centimeters" : 0.142857142857143,
        "kilometers" : 0.071428571428571,
        "nauticalMiles" : 0.032876676299533,
        "lightYears" : 0.002739726027397,
        "astronomicalUnit" : 0.0002739726027397,
       
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
                        <h3>Distance / Length</h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-5 col-xs-10 col-sm-10 inputBox">
                    
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput" onChange={handleSetInputUnit}>
                                <option value="0">Select unit:</option>
                                <option value="inches">inches</option>
                                <option value="feet">feet</option>
                                <option value="yards">yards</option>
                                <option value="miles">miles</option>
                                <option value="millimeters">millimeters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="meters">meters</option>
                                <option value="kilometers">kilometers</option>
                                <option value="nauticalMiles">nautical miles</option>
                                <option value="lightYears">light-years</option>
                                <option value="astronomicalUnit">Astronomical Unit (AU)</option>
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
                                <option value="inches">inches</option>
                                <option value="feet">feet</option>
                                <option value="yards">yards</option>
                                <option value="miles">miles</option>
                                <option value="millimeters">millimeters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="meters">meters</option>
                                <option value="kilometers">kilometers</option>
                                <option value="nauticalMiles">nautical miles</option>
                                <option value="lightYears">light-years</option>
                                <option value="astronomicalUnit">Astronomical Unit (AU)</option>
                            </select>
                        </div>
                    </div>
                </div>
            
            </div>        
        </div>
    );
};

export default Distance;





// NOTES for Distance/Length::
// =========
// Imperial:
    // feet
    // inches
    // yards
    // miles
    // marathon
// Metric:
    // centimeters
    // decimeters
    // meters
    // kilometers
