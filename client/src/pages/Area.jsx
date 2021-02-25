import React, { Component, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Speed = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [inputUnit, setInputUnit] = useState("");
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);
    const [conversions, setConversions] = useState({});
    
    
    //CONVERSIONS ASSUMING m ^2  IS EQUAL TO 1 -- GIVES RATIOS
    const conversionTable = {
        "m2": 1,
        "mm2": 1000000,
        "cm2" : 10000,
        "km2" : 1e-6,
        "in2" : 1550,
        "ft2" : 10.763910417,
        "yds2" : 1.19599,
        "mi2" : 3.86102e-7,
        "acre" : 0.000247105,
        "hectare" : 0.0001,
        "marathon" : 3.86102254e-7,
        "soccer" : 0.00014005602240896,
        "football" : 0.0001868734483664,
        "usas" : 1.0176382e-13,
        "britains" : 4.1237964e-12
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

    // KMPH TO ANYTHING
    const kmphToAnything = () => {
        setResult(inputValue * conversions[resultUnit]);
    }

    // ANYTHING TO KMPH
    const anythingToKmph = () => {
        setResult(inputValue * (1 / conversions[inputUnit]));
    }

    // IF NO KMPH, CONVERT WITH THIS EQUATION
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
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "0" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "EU") {
            anythingToKmph();
            
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "EU" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "0") {
            kmphToAnything();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value !== "EU" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value !== "EU") {
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
                                <option value="mm2">mm ^ 2</option>
                                <option value="cm2">cm ^ 2</option>
                                <option value="m2">m ^ 2</option>
                                <option value="km2">km ^ 2</option>
                                <option value="in2">inch ^ 2</option>
                                <option value="ft2">feet ^ 2</option>
                                <option value="yds2">yards ^ 2</option>
                                <option value="mi2">miles ^ 2</option>
                                <option value="marathon">marathons ^ 2</option>
                                <option value="acre">acres</option>
                                <option value="hectare">hectare</option>
                                <option value="soccer">soccer fields</option>
                                <option value="football">football fields</option>
                                <option value="usas">U.S.A.s</option>
                                <option value="britains">Britains</option>


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
                            <option value="0">Select unit:</option>
                                <option value="mm2">mm ^ 2</option>
                                <option value="cm2">cm ^ 2</option>
                                <option value="m2">m ^ 2</option>
                                <option value="km2">km ^ 2</option>
                                <option value="in2">inch ^ 2</option>
                                <option value="ft2">feet ^ 2</option>
                                <option value="yds2">yards ^ 2</option>
                                <option value="mi2">miles ^ 2</option>
                                <option value="marathon">marathons ^ 2</option>
                                <option value="acre">acres</option>
                                <option value="hectare">hectare</option>
                                <option value="soccer">soccer fields</option>
                                <option value="football">football fields</option>
                                <option value="usas">U.S.A.s</option>
                                <option value="britains">Britains</option>
                            </select>
                        </div>
                    </div>
                </div>
            
            </div>        
        </div>
    );
};

export default Speed;