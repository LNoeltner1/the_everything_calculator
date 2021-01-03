import React, { Component, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Currency = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);    

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }

    // CONVERSION EQUATIONS

    //pint and quarts
    const pintsToQuarts = () => {
        setResult(inputValue / 2);
    }
    const quartsToPints = () => {
        setResult(inputValue * 2);
    }

    

    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
        console.log(outputUnitMenu.options[outputUnitMenu.selectedIndex].value);
        setResultUnit(outputUnitMenu.options[outputUnitMenu.selectedIndex].value);
        // COMPARING USER CHOICES
        //pints and quarts
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            pintsToQuarts();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            quartsToPints();
        }
        //pints and gallons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            pintsToGallons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            gallonsToPints();
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

        <div className="col-9">
            <div className="row titleRow">
                <div className="col-md-12">
                    <h3>Volume</h3>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                
                    <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                    <div className="select inputMenu text-center">
                        <select id="unitInput" className="unitMenu" name="unitInput">
                            <option value="0">Select unit:</option>
                            <option value="tsp">teaspoons (tsp.)</option>
                            <option value="tbsp">tablespoons (tbsp.)</option>
                            <option value="floz">fluid ounces (fl. oz.)</option>
                            <option value="cups">cups (c.)</option>
                            <option value="pints">pints (pt.)</option>
                            <option value="quarts">quarts (qt.)</option>
                            <option value="gallons">gallons (gl.)</option>
                            <option value="ml">milliliters (ml)</option>
                            <option value="liters">liters (l)</option>
                            <option value="m3">cubic meters (m^3)</option>

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
                            <p className="">{result} {resultUnit}</p>
                        </div>
                        
                    </div>
                    
                    
                    <div className="select outputMenu text-center">
                        <select id="unitOutput" className="unitMenu" name="unitOutput">
                            <option value="0">Select unit:</option>
                            <option value="tsp">teaspoons (tsp.)</option>
                            <option value="tbsp">tablespoons (tbsp.)</option>
                            <option value="floz">fluid ounces (fl. oz.)</option>
                            <option value="cups">cups (c.)</option>
                            <option value="pints">pints (pt.)</option>
                            <option value="quarts">quarts (qt.)</option>
                            <option value="gallons">gallons (gl.)</option>
                            <option value="ml">milliliters (ml)</option>
                            <option value="liters">liters (l)</option>
                            <option value="m3">cubic meters (m^3)</option>
                        </select>
                    </div>
                </div>
            </div>
        
        </div>        
    </div>
    );
};

export default Currency;