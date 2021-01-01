import React, { Component, useState } from 'react';
import SideBar from '../components/SideBar';
import "../App.css";
import { set } from 'mongoose';



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
        setResult(inputValue / 1.60934);
    }
    const milesToKilometers = () => {
        setResult(inputValue * 1.60934);
    }
    // inches and feet
    const inchesToFeet = () => {
        setResult(inputValue / 12);
    }
    const feetToInches = () => {
        setResult(inputValue * 12);
    }
    // inches and yards
    const inchesToYards = () => {
        setResult(inputValue / 36);
    }
    const yardsToInches = () => {
        setResult(inputValue * 36);
    }
    // inches and miles
    const inchesToMiles = () => {
        setResult(inputValue / 63360);
    }
    const milesToInches = () => {
        setResult(inputValue * 63360);
    }
    // inches and millimeters
    const inchesToMillimeters = () => {
        setResult(inputValue * 25.4);
    }
    const millimetersToInches = () => {
        setResult(inputValue / 25.4);
    }
    // inches and centimeters
    const inchesToCentimeters = () => {
        setResult(inputValue * 2.54);
    }
    const centimetersToInches = () => {
        setResult(inputValue / 2.54);
    }
    // inches and meters
    const inchesToMeters = () => {
        setResult(inputValue / 39.37);
    }
    const metersToInches = () => {
        setResult(inputValue * 39.37);
    }
    // inches and kilometers
    const inchesToKilometers = () => {
        setResult(inputValue / 39370);
    }
    const kilometersToInches = () => {
        setResult(inputValue * 39370);
    }
    // feet and yards
    const feetToYards = () => {
        setResult(inputValue / 3);
    }
    const yardsToFeet = () => {
        setResult(inputValue * 3);
    }
    // feet and miles
    const feetToMiles = () => {
        setResult(inputValue / 5280);
    }
    const milesToFeet = () => {
        setResult(inputValue * 5280);
    }
    // feet and millimeters
    const feetToMillimeters = () => {
        setResult(inputValue * 304.8);
    }
    const millimetersToFeet = () => {
        setResult(inputValue / 304.8);
    }
    // feet and centimeters
    const feetToCentimeters = () => {
        setResult(inputValue * 30.48);
    }
    const centimetersToFeet = () => {
        setResult(inputValue / 30.48);
    }
    // feet and meters
    const feetToMeters = () => {
        setResult(inputValue / 3.281);
    }
    const metersToFeet = () => {
        setResult(inputValue * 3.281);
    }
    // feet and kilometers
    const feetToKilometers = () => {
        setResult(inputValue / 3281);
    }
    const kilometersToFeet = () => {
        setResult(inputValue * 3281);
    }
    // miles and millimeters
    const milesToMillimeters = () => {
        setResult(inputValue * 1609340000);
    }
    const millimetersToMiles = () => {
        setResult(inputValue / 1609340000);
    }
    // miles and centimeters
    const milesToCentimeters = () => {
        setResult(inputValue * 160934);
    }
    const centimetersToMiles = () => {
        setResult(inputValue / 160934)
    }
    // miles and meters
    const milesToMeters = () => {
        setResult(inputValue * 1609.34);
    }
    const metersToMiles = () => {
        setResult(inputValue / 1609.34);
    }
    // millimeters and centimeters
    const millimetersToCentimeters = () => {
        setResult(inputValue / 10);
    }
    const centimetersToMillimeters = () => {
        setResult(inputValue * 10);
    }
    // millimeters and meters
    const millimetersToMeters = () => {
        setResult(inputValue / 1000);
    }
    const metersToMillimeters = () => {
        setResult(inputValue * 1000)
    }
    // millimeters and kilometers
    const millimetersToKilometers = () => {
        setResult(inputValue / 1000000);
    }
    const kilometersToMillimeters = () => {
        setResult(inputValue * 1000000);
    }
    // meters and kilometers
    const metersToKilometers = () => {
        setResult(inputValue / 1000);
    }
    const kilometersToMeters = () => {
        setResult(inputValue * 1000);
    }
    // centimeters and meters
    const centimetersToMeters = () => {
        setResult(inputValue / 100);
    }
    const metersToCentimeters = () => {
        setResult(inputValue * 100);
    }
    // centimeters and kilometers
    const centimetersToKilometers = () => {
        setResult(inputValue / 100000);
    }
    const kilometersToCentimeters = () => {
        setResult(inputValue * 100000);
    }
    // centimeters and yards
    const centimetersToYards = () => {
        setResult(inputValue / 91.44);
    }
    const yardsToCentimeters = () => {
        setResult(inputValue * 91.44);
    }
    // yards and kilometers
    const yardsToKilometers = () => {
        setResult(inputValue / 1094);
    }
    const kilometersToYards = () => {
        setResult(inputValue * 1094);
    }
    // yards and meters
    const yardsToMeters = () => {
        setResult(inputValue / 1.094);
    }
    const metersToYards = () => {
        setResult(inputValue * 1.094);
    }
    // yards and miles
    const yardsToMiles = () => {
        setResult(inputValue / 1760);
    }
    const milesToYards = () => {
        setResult(inputValue * 1760);
    }
    // yards and millimeters
    const yardsToMillimeters = () => {
        setResult(inputValue * 914.4);
    }
    const millimetersToYards = () => {
        setResult(inputValue / 914.4);
    }

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
        //feet and yards 
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            feetToYards();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            yardsToFeet();
        } 
        //feet and centimeters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            feetToCentimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            centimetersToFeet();
        }
        //feet and millimeters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            feetToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            millimetersToFeet();
        }
        //feet and meters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            feetToMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            metersToFeet();
        }
        //feet and kilometers        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            feetToKilometers();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            kilometersToFeet();
        } 
        //inches and miles        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            inchesToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            milesToInches();
        }
        //inches and yards        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            inchesToYards();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            yardsToInches();
        }
        //inches and centimeters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            inchesToCentimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            centimetersToInches();
        }
        //inches and millimeters      
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            inchesToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            millimetersToInches();
        }
        //inches and kilometers        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            inchesToKilometers();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            kilometersToInches();
        }
        //inches and meters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "inches" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            inchesToMeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "inches") {
            metersToInches();
        }
        //meters and miles        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            metersToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            milesToMeters();
        }
        //meters and yards        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            metersToYards();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            yardsToMeters();
        }
        //meters and centimeters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            metersToCentimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            centimetersToMeters();
        }
        //meters and millimeters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            metersToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            millimetersToMeters();
        }
        //meters and kilometers        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "meters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            metersToKilometers();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "meters") {
            kilometersToMeters();
        }


        //centimeters and miles        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            centimetersToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            milesToCentimeters();
        }
        //centimeters and yards        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "feet" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            centimetersToYards();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "feet") {
            yardsToCentimeters();
        }
        //centimeters and millimeters       
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            centimetersToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            millimetersToCentimeters();
        }
        //centimeters and kilometers        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "centimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            centimetersToKilometers();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "centimeters") {
            kilometersToCentimeters();
        }

        //kilometers and yards    
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            kilometersToYards();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            yardsToKilometers();
        }
        //kilometers and millimeters
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilometers" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            kilometersToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilometers") {
            millimetersToKilometers();
        }
        //miles and millimeters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            milesToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            millimetersToMiles();
        }
        //yards and miles        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "miles") {
            yardsToMiles();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "miles" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            milesToYards();
        }
        //yards and millimeters        
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "yards" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "millimeters") {
            yardsToMillimeters();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "millimeters" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "yards") {
            millimetersToYards();
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
