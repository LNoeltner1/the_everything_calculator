import React, { Component, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Speed = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [result, setResult] = useState(Number);

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }

    //CONVERSIONS

    //IF/ELSE/IF STATEMENTS TO CALL CONVERSION FNS
    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
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
                            <select id="unitInput" className="unitMenu" name="unitInput">
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
                            <select id="unitOutput" className="unitMenu" name="unitOutput">
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