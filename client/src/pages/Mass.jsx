import React, { Component, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Mass = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [result, setResult] = useState(Number);

    

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }
    // CONVERSION EQUATIONS
    //mg and g
    const milligramsToGrams = () => {
        setResult(inputValue / 1000);
    }
    const gramsToMilligrams = () => {
        setResult(inputValue * 1000);
    }
    //g and kg
    const gramsToKilograms = () => {
        setResult(inputValue / 1000);
    }
    const kilogramsToGrams = () => {
        setResult(inputValue * 1000);
    }
    //kg and tonnes
    const kilogramsToTonnes = () => {
        setResult(inputValue / 1000);
    }
    const tonnesToKilograms = () => {
        setResult(inputValue * 1000);
    }
    //tonne and karats
    const tonnesToKarats = () => {
        setResult(inputValue * 5000000);
    }
    const karatsToTonnes = () => {
        setResult(inputValue / 5000000);
    }
    //karats and oz
    const karatsToOunces = () => {
        setResult(inputValue / 142);
    }
    const ouncesToKarats = () => {
        setResult(inputValue * 142);
    }
    //oz and pounds
    const ouncesToPounds = () => {
        setResult(inputValue / 16);
    }
    const poundsToOunces = () => {
        setResult(inputValue * 16);
    }
    //pounds and stone
    const poundsToStone = () => {
        setResult(inputValue / 14);
    }
    const stoneToPounds = () => {
        setResult(inputValue * 14);
    }
    //stone and tons
    const stoneToTons = () => {
        setResult(inputValue / 143);
    }
    const tonsToStone = () => {
        setResult(inputValue * 143);
    }
    //tons and mg
    const tonsToMilligrams = () => {
        setResult(inputValue * 907200000);
    }
    const milligramsToTons = () => {
        setResult(inputValue / 907200000);
    }
    //mg and kg
    const milligramsToKilograms = () => {
        setResult(inputValue / 1000000);
    }
    const kilogramsToMilligrams = () => {
        setResult(inputValue * 1000000);
    }
    //mg and tonnes
    const milligramsToTonnes = () => {
        setResult(inputValue / 1000000000);
    }
    const tonnesToMilligrams = () => {
        setResult(inputValue * 1000000000);
    }
    //mg and karats
    //mg and oz
    //mg and pounds
    //mg and stone
    //g and tonne
    //g and karats
    //g and oz
    //g and pounds
    //g and stone
    //g and ton
    //kg and tonnes
    //kg and karats
    //kg and oz
    //kg and pounds
    //kg and stone
    //kg and tons
    //tonnes and karats
    //tonnes and oz
    //tonnes and pounds
    //tonnes and stone
    //tonnes and tons
    //pounds and tons
    //karats and tons
    //karats and pounds
    //karats and stone
    //oz and pounds
    //oz and stone
    //oz and ton


    
    


    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
        
        // comparing unit choices
        //kilometers and miles
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            kilometersToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            milesToKilometers();
        }
        //feet and miles
         else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            feetToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            milesToFeet();
        }
        //feet and inches
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            feetToInches();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            inchesToFeet();
        }
        // IF INPUT AND OUTPUT UNIT ARE THE SAME
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === outputUnitMenu.options[outputUnitMenu.selectedIndex].value) {
            console.log("no can do, buckaroo");
            alert("You must select two different units to convert");
        }
        // IF NOTHING MATCHES
        else {
            console.log("you done goofed");
        }
    }

    return (
        <div className="row mainSection">
            {/* <div className="col-md-1"></div> */}
            <SideBar />
            <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                
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
            {/* <div className="row"> */}
            <div className="col-md-2 col-xs-10 col-sm-10 buttonBox">
                <button className="convertBtn" onClick={handleConvert}>Convert!</button>
            </div>
                    
            {/* </div> */}
            <div className="col-md-4 col-xs-10 col-sm-10 resultBox">Result: {result} 
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

export default Mass;