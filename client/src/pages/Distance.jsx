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
    const kilometersToMiles = (e) => {
        e.preventDefault();
        setResult(inputValue / 1.609);
    }
    const milesToKilometers = (e) => {
        e.preventDefault();
        setResult(inputValue * 1.609);
    }
    //handling unit changes
    const handleInputUnitChange = (e) => {
        e.preventDefault();
        let { originUnit } = e.target;
        setInputUnit(originUnit);
    }
    const handleOutputUnitChange = (e) => {
        e.preventDefault();
        let { resultUnit } = e.target;
        setOutputUnit(resultUnit);
    }

    const handleConvert = (e) => {
        e.preventDefault();
        if (inputUnit == "kilometers" && outputUnit == "miles") {
            kilometersToMiles();
        } else if (inputUnit == "miles" && outputUnit == "kilometers") {
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
                        <select name="unitInput" onChange={handleInputUnitChange}>
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
                    <select name="unitOutput" onChange={handleOutputUnitChange}>
                        <option value="0">Select unit:</option>
                        <option value="1">inches</option>
                        <option value="2">feet</option>
                        <option value="3">yards</option>
                        <option value="4">miles</option>
                        <option value="5">millimeters</option>
                        <option value="6">centimeters</option>
                        <option value="7">meters</option>
                        <option value="8">kilometers</option>
                        <option value="9">nautical miles</option>
                        <option value="10">light-years</option>
                        <option value="11">Astronomical Unit (AU)</option>
                        <option value="12">Volvo</option>
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
