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
            
            </div>        
        </div>
    );
};

export default Speed;