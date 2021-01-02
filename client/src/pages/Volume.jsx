import React, { Component, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";

const Volume = () => {
    const [inputValue, setInputValue] = useState(Number);
    const [result, setResult] = useState(Number);
    const [resultUnit, setResultUnit] = useState(String);    

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setInputValue(value);
    }

    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
        console.log(outputUnitMenu.options[outputUnitMenu.selectedIndex].value);
    }
    return (
        <div className="row mainSection">
        {/* <div className="col-md-1"></div> */}
        <SideBar />

        <div className="col-9">
            <div className="row titleRow">
                <div className="col-md-12">
                    <h3>Mass / Weight</h3>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                
                    <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                    <div className="select inputMenu text-center">
                        <select id="unitInput" className="unitMenu" name="unitInput">
                            <option value="0">Select unit:</option>
                            <option value="ounces">ounces (oz.)</option>
                            <option value="pounds">pounds (lbs.)</option>
                            <option value="stone">stone (st.)</option>
                            <option value="tons">tons</option>
                            <option value="milligrams">milligrams (mg)</option>
                            <option value="grams">grams (g)</option>
                            <option value="kilograms">kilograms (kg)</option>
                            <option value="tonnes">metric tonnes</option>
                            <option value="karats">karats</option>
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
                            <option value="ounces">ounces (oz.)</option>
                            <option value="pounds">pounds (lbs.)</option>
                            <option value="stone">stone (st.)</option>
                            <option value="tons">tons</option>
                            <option value="milligrams">milligrams (mg)</option>
                            <option value="grams">grams (g)</option>
                            <option value="kilograms">kilograms (kg)</option>
                            <option value="tonnes">tonnes</option>
                            <option value="karats">karats</option>
                        </select>
                    </div>
                </div>
            </div>
        
        </div>        
    </div>
    );
};

export default Volume;