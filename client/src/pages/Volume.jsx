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

        // CONVERSION EQUATIONS

    //pint and quarts
    //pints and gallons
    //pints and ml
    //pints and liters
    //pints and m^3
    //pints and tsp
    //pints and cups
    //pints and tbsp
    //quarts and gallons
    //quarts and liters
    //quarts and m^3
    //quarts and tbsp
    //quarts and ml
    //gallons and m^3
    //gallons and ml
    //gallons and tsp
    //gallons and tbsp
    //gallons and cups
    //liters and m^3
    //liters and tsp
    //liters and gallon
    //liters and tbsp
    //liters and cups
    //floz and cups
    //floz and pints
    //floz and quarts
    //floz and gallons
    //floz and ml
    //floz and liters
    //floz and m^3
    //floz and tsp
    //ml and tsp
    //ml and tbsp
    //ml and liters
    //ml and cups
    //m^3 and tsp
    //m^3 and tbsp
    //m^3 and cups
    //m^3 and ml
    //tsp and tbsp
    //tsp and cups
    //tbsp and cups

    const milligramsToGrams = () => {
        setResult(inputValue / 1000);
    }
    const gramsToMilligrams = () => {
        setResult(inputValue * 1000);
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
        //pints and ml
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            pintsToMilliliters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            millilitersToPints();
        }
        //pints and liters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            pintsToLiters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            litersToPints();
        }
        //pints and m^3
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            pintsToCubicMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            cubicMetersToPints();
        }
        //pints and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            pintsToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            teaspoonsToPints();
        }
        //pints and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            pintsToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            cupsToPints();
        }
        //pints and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            pintsToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            tablespoonsToPints();
        }
        //quarts and gallons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            quartsToGallons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            gallonsToQuarts();
        }
        //quarts and liters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            quartsToLiters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            litersToQuarts();
        }
        //quarts and m^3
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            quartsToCubicMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            cubicMetersToQuarts();
        }
        //quarts and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            quartsToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            tablespoonsToQuarts();
        }
        //quarts and ml
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            quartsToMilliliters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            millilitersToQuarts();
        }
        //gallons and m^3
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            gallonsToCubicMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            cubicMetersToGallons();
        }
        //gallons and ml
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            gallonsToMilliliters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            millilitersToGallons();
        }
        //gallons and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            gallonsToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            teaspoonsToGallons();
        }
        //gallons and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            gallonsToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            tablespoonsToGallons();
        }
        //gallons and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            gallonsToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            cupsToGallons();
        }
        //liters and m^3
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            litersToCubicMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            cubicMetersToLiters();
        }
        //liters and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            litersToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            teaspoonsToLiters();
        }
        //liters and gallon
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            litersToGallons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            gallonsToLiters();
        }
        //liters and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            litersToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            tablespoonsToLiters();
        }
        //liters and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            litersToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            cupsToLiters();
        }
        //floz and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            fluidOuncesToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            cupsToFluidOunces();
        }
        //floz and pints
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pints") {
            fluidOuncesToPints();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pints" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            pintsToFluidOunces();
        }
        //floz and quarts
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            fluidOuncesToQuarts();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            quartsToFluidOunces();
        }
        //floz and gallons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "gallons") {
            fluidOuncesToGallons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "gallons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            gallonsToFluidOunces();
        }
        //floz and ml
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            fluidOuncesToMilliliters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            millilitersToFluidOunces();
        }
        //floz and liters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            fluidOuncesToLiters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            litersToFluidOunces();
        }
        //floz and m^3
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            fluidOuncesToCubicMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            cubicMetersToFluidOunces();
        }
        //floz and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            fluidOuncesToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            teaspoonsToFluidOunces();
        }
        //ml and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            millilitersToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            teaspoonsToMilliliters();
        }
        //ml and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            millilitersToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            tablespoonsToMilliliters();
        }
        //ml and liters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "liters") {
            millilitersToLiters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "liters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            litersToMilliliters();
        }
        //ml and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            millilitersToLiters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            litersToMilliliters();
        }
        //m^3 and tsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            cubicMetersToTeaspoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            teaspoonsToCubicMeters();
        }
        //m^3 and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            cubicMetersToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            tablespoonsToCubicMeters();
        }
        //m^3 and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            cubicMetersToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            cupsToCubicMeters();
        }
        //m^3 and ml
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "m3" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            cubicMetersToMilliliters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ml" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "m3") {
            millilitersToCubicMeters();
        }
        //tsp and tbsp
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            teaspoonsToTablespoons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            tablespoonsToTeaspoons();
        }
        //tsp and cups    
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            teaspoonsToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            cupsToTeaspoons();
        }
        //tbsp and cups
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            tablespoonsToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            cupsToTablespoons();
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
        }
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
                                <option value="tsp">teaspoons (tsp.)</option>
                                <option value="tbsp">tablespoons (tbsp.)</option>
                                <option value="floz">fluid ounces (fl. oz.)</option>
                                <option value="cups">cups (c.)</option>
                                <option value="pints">pints (pt.)</option>
                                <option value="quarts">quarts (qt.)</option>
                                <option value="gallons">gallons (gl.)</option>
                                <option value="ml">millileters (ml)</option>
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
                                <option value="mpintsg">pints (pt.)</option>
                                <option value="quarts">quarts (qt.)</option>
                                <option value="gallons">gallons (gl.)</option>
                                <option value="ml">millileters (ml)</option>
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

export default Volume;