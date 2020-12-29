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
            <div className="col-md-1"></div>
            <TypeMenu />
            <div className="col-md-4">
                <input id="userInput" type="text" name="number" value={inputValue} onChange={handleInputChange}/> lbs.
                <button onClick={poundsToKilos}>Convert!</button>
            </div>
            <div className="col-md-4">Result: {result} kilograms</div>
        </div>
    );
};

export default Distance;