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
        "inches": 39.37007874,
        "feet" : 3.28083989,
        "yards" : 1.09361329834,
        "miles" : 0.000621371192237,
        "millimeters" : 1000,
        "centimeters" : 100,
        "kilometers" : 0.001,
        "nauticalMiles" : 0.000539956803456,
        "lightYears" : 1.057000834e-16,
        "astronomicalUnit" : 6.685e-12,
        "hand" : 9.84251968504,
        "metricFoot" : 3.333333333,
        "football" : 0.010989010989011,
        "earthCirc" : 2.5e-8,
        "earthRad" : 1.56961231e-7,
        "parsec" : 3.240779289444362e-17,
        "pace" : 1.312335958005249,
        "league" : 2.07125103563e-4,
        "furlong" : 4.970969537899e-3,
        "rod" : 0.198838781515947,
        "barleycorn" : 118.105586394236447,
        "cubit" : 2,
        "fathom" : 0.6468066491688554
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
                                <option value="astronomicalUnit">Astronomical Units (AU)</option>
                                <option value="hand">hands</option>
                                <option value="metricFoot">Metric feet</option>
                                <option value="football">Football Field Lengths</option>
                                <option value="earthCirc">Earth's Circumferences</option>
                                <option value="earthRad">Earth's Radius</option>
                                <option value="parsec">parsecs</option>
                                <option value="pace">paces</option>
                                <option value="league">leagues</option>
                                <option value="furlong">furlongs</option>
                                <option value="rod">rods</option>
                                <option value="barleycorn">barleycorns</option>
                                <option value="cubit">cubits</option>
                                <option value="fathom">fathoms</option>
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
                                <option value="astronomicalUnit">Astronomical Units (AU)</option>
                                <option value="hand">hands</option>
                                <option value="metricFoot">Metric feet</option>
                                <option value="football">Football Field Lengths</option>
                                <option value="earthCirc">Earth's Circumferences</option>
                                <option value="earthRad">Earth's Radius</option>
                                <option value="parsec">parsecs</option>
                                <option value="pace">paces</option>
                                <option value="league">leagues</option>
                                <option value="furlong">furlongs</option>
                                <option value="rod">rods</option>
                                <option value="barleycorn">barleycorns</option>
                                <option value="cubit">cubits</option>
                                <option value="fathom">fathoms</option>
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
