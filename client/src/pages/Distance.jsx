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
    const poundsToKilos = (e) => {
        e.preventDefault();
        setResult(inputValue * .45);


    }
    return (
        <div className="row">
            {/* <div className="col-md-1"></div> */}
            <TypeMenu />
            <div className="col-md-4 inputBox">
                {/* <div className="row"> */}
                    <input id="userInput" type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                    <div className="select inputMenu">
                        <select>
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
                    <button className="convertBtn" onClick={poundsToKilos}>Convert!</button>
                {/* </div> */}
                
                
            </div>
            <div className="col-md-4 resultBox">Result: {result} kilograms</div>
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
