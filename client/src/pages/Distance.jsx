import React, { Component, useState } from 'react';
import TypeMenu from '../components/TypeMenu';
import "../App.css";



const Distance = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [inputUnit, setInputUnit] = useState(String);
    const [outputUnit, setOutputUnit] = useState(String);
    const [result, setResult] = useState(Number);

    

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }
    //conversion math
    const kilometersToMiles = () => {
        setResult(inputValue / 1.609);
    }
    const milesToKilometers = () => {
        setResult(inputValue * 1.609);
    }
    //handling unit changes
    const handleInputUnitChange = (e) => {
        e.preventDefault();
        let { inputUnit } = e.target;
        setInputUnit(inputUnit);
    }
    const handleOutputUnitChange = (e) => {
        e.preventDefault();
        let { outputUnit } = e.target;
        setOutputUnit(outputUnit);
    }

    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
        //TODO: inputUnit undefined
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            kilometersToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            milesToKilometers();
        } else {
            console.log("you done goofed");
        }
    }

    return (
        <div className="row">
            {/* <div className="col-md-1"></div> */}
            <TypeMenu />
            <div className="col-md-4 inputBox">
                {/* <div className="row"> */}
                    <input id="userInput" type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                    <div className="select inputMenu">
                        <select id="unitInput" name="unitInput" onChange={handleInputUnitChange}>
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
                    <button className="convertBtn" onClick={handleConvert}>Convert!</button>
                {/* </div> */}
                
                
            </div>
            <div className="col-md-4 resultBox">Result: {result} 
                <div className="select outputMenu">
                    <select id="unitOutput" name="unitOutput" onChange={handleOutputUnitChange}>
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
