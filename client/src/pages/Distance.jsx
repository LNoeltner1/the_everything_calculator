import React, { Component, useState } from 'react';
import TypeMenu from '../components/TypeMenu';
import "../App.css";



const Distance = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [result, setResult] = useState(Number);

    

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }
    // CONVERSION EQUATIONS
    
    // miles and kilometers
    const kilometersToMiles = () => {
        setResult(inputValue / 1.609);
    }
    const milesToKilometers = () => {
        setResult(inputValue * 1.609);
    }
    // inches and feet
    // inches and yards
    // inches and miles
    // inches and millimeters
    // inches and centimeters
    // inches and meters
    // inches and kilometers
    // feet and yards
    // feet and miles
    // feet and millimeters
    // feet and centimeters
    // feet and meters
    // feet and kilometers
    // miles and millimeters
    // miles and centimeters
    // miles and meters
    // miles and kilometers
    // millimeters and centimeters
    // millimeters and meters
    // millimeters and kilometers
    // centimeters and meters
    // centimeters and kilometers
    

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
        <div className="row mainSection">
            {/* <div className="col-md-1"></div> */}
            <TypeMenu />
            <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                <div className="row ">
                    <div className="col-md-12">
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput">
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
            {/* <div className="row"> */}
            <div className="col-md-2 col-xs-10 col-sm-10 buttonBox">
                <button className="convertBtn" onClick={handleConvert}>Convert!</button>
            </div>
                    
            {/* </div> */}
            <div className="col-md-3 col-xs-10 col-sm-10 resultBox">Result: {result} 
                <div className="select outputMenu text-center">
                    <select id="unitOutput" className="unitMenu" name="unitOutput">
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
