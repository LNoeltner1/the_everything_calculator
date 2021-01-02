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
    const milligramsToKarats = () => {
        setResult(inputValue / 200);
    }
    const karatsToMilligrams = () => {
        setResult(inputValue * 200);
    }
    //mg and oz
    const milligramsToOunces = () => {
        setResult(inputValue / 28350);
    }
    const ouncesToMilligrams = () => {
        setResult(inputValue * 28350);
    }
    //mg and pounds
    const milligramsToPounds = () => {
        setResult(inputValue / 453592);
    }
    const poundsToMilligrams = () => {
        setResult(inputValue * 453592);
    }
    //mg and stone
    const milligramsToStone = () => {
        setResult(inputValue / 6350000);
    }
    const stoneToMilligrams = () => {
        setResult(inputValue * 6350000);
    }
    //g and tonne
    const gramsToTonnes = () => {
        setResult(inputValue / 1000000);
    }
    const tonnesToGrams = () => {
        setResult(inputValue * 1000000);
    }
    //g and karats
    const gramsToKarats = () => {
        setResult(inputValue * 5);
    }
    const karatsToGrams = () => {
        setResult(inputValue / 5);
    }
    //g and oz
    const gramsToOunces = () => {
        setResult(inputValue / 28.35);
    }
    const ouncesToGrams = () => {
        setResult(inputValue * 28.35);
    }
    //g and pounds
    const gramsToPounds = () => {
        setResult(inputValue / 454);
    }
    const poundsToGrams = () => {
        setResult(inputValue * 454);
    }
    //g and stone
    const gramsToStone = () => {
        setResult(inputValue / 6350);
    }
    const stoneToGrams = () => {
        setResult(inputValue * 6350);
    }
    //g and ton
    const gramsToTons = () => {
        setResult(inputValue / 907185);
    }
    const tonsToGrams = () => {
        setResult(inputValue * 907185);
    }
    //kg and karats
    const kilogramsToKarats = () => {
        setResult(inputValue * 5000);
    }
    const karatsToKilograms = () => {
        setResult(inputValue / 5000);
    }
    //kg and oz
    const kilogramsToOunces = () => {
        setResult(inputValue * 35.274);
    }
    const ouncesToKilograms = () => {
        setResult(inputValue / 35.274);
    }
    //kg and pounds
    const kilogramsToPounds = () => {
        setResult(inputValue * 2.205);
    }
    const poundsToKilograms = () => {
        setResult(inputValue / 2.205);
    }
    //kg and stone
    const kilogramsToStone = () => {
        setResult(inputValue / 6.35);
    }
    const stoneToKilograms = () => {
        setResult(inputValue * 6.35);
    }
    //kg and tons
    const kilogramsToTons = () => {
        setResult(inputValue / 907.185);
    }
    const tonsToKilograms = () => {
        setResult(inputValue * 907.185);
    }
    //tonnes and oz
    const tonnesToOunces = () => {
        setResult(inputValue * 35274);
    }
    const ouncesToTonnes = () => {
        setResult(inputValue / 35274);
    }
    //tonnes and pounds
    const tonnesToPounds = () => {
        setResult(inputValue * 2205);
    }
    const poundsToTonnes = () => {
        setResult(inputValue / 2205);
    }
    //tonnes and stone
    const tonnesToStone = () => {
        setResult(inputValue * 157);
    }
    const stoneToTonnes = () => {
        setResult(inputValue / 157);
    }
    //tonnes and tons
    const tonnesToTons = () => {
        setResult(inputValue * 1.102);
    }
    const tonsToTonnes = () => {
        setResult(inputValue / 1.102);
    }
    //pounds and tons
    const poundsToTons = () => {
        setResult(inputValue / 2000);
    }
    const tonsToPounds = () => {
        setResult(inputValue * 2000);
    }
    //karats and tons
    const karatsToTons = () => {
        setResult(inputValue / 4536000);
    }
    const tonsToKarats = () => {
        setResult(inputValue * 4536000);
    }
    //karats and pounds
    const karatsToPounds = () => {
        setResult(inputValue / 2268);
    }
    const poundsToKarats = () => {
        setResult(inputValue * 2268);
    }
    //karats and stone
    const karatsToStone = () => {
        setResult(inputValue / 31751);
    }
    const stoneToKarats = () => {
        setResult(inputValue * 31751);
    }
    //oz and stone
    const ouncesToStone = () => {
        setResult(inputValue / 224);
    }
    const stoneToOunces = () => {
        setResult(inputValue * 224);
    }
    //oz and ton
    const ouncesToTons = () => {
        setResult(inputValue / 32000);
    }
    const tonsToOunces = () => {
        setResult(inputValue * 32000);
    }


    
    


    const handleConvert = (e) => {
        e.preventDefault();
        let inputUnitMenu = document.getElementById("unitInput");
        let outputUnitMenu = document.getElementById("unitOutput");
        console.log(inputUnitMenu.options[inputUnitMenu.selectedIndex].value);
        
        // comparing unit choices
        //mg and kg
        if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            milligramsToKilograms();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            kilogramsToMilligrams();
        }
        //g and kg
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            gramsToKilograms();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            kilogramsToGrams();
        }
        //kg and tonnes
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            kilogramsToTonnes();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            tonnesToKilograms();
        }
        //tonnes and karats
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            tonnesToKarats();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            karatsToTonnes();
        }
        //carats and oz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            karatsToOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            ouncesToKarats();
        }
        //oz and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            ouncesToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            poundsToOunces();
        }
        //pounds and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            poundsToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            stoneToPounds();
        }
        //stone and tons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            stoneToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            tonsToStone();
        }
        //tons and mg
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            tonsToMilligrams();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            milligramsToTons();
        }
        //mg and kg
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            milligramsToKilograms();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            kilogramsToMilligrams();
        }
        //mg and tonnes
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            milligramsToTonnes();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            tonnesToMilligrams();
        }
        //mg and karats
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            milligramsToKarats();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            karatsToMilligrams();
        }
        //mg and oz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            milligramsToOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            ouncesToMilligrams();
        }
        //mg and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            milligramsToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            poundsToMilligrams();
        }
        //mg and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            milligramsToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            stoneToMilligrams();
        }
        //g and tonnes
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            gramsToTonnes();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            tonnesToGrams();
        }
        //g and karats
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            gramsToKarats();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            karatsToGrams();
        }
        //g and oz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            gramsToOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            ouncesToGrams();
        }
        //g and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            gramsToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            poundsToGrams();
        }
        //g and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            gramsToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            stoneToGrams();
        }
        //g and ton
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            gramsToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            tonsToGrams();
        }
        //kg and karats
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            kilogramsToKarats();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            karatsToKilograms();
        }
        //kg and oz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            kilogramsToOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            ouncesToKilograms();
        }
        //kg and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            kilogramsToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            poundsToKilograms();
        }
        //kg and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            kilogramsToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            stoneToKilograms();
        }
        //kg and ton
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "kilograms" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            kilogramsToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "kilograms") {
            tonsToKilograms();
        }
        //tonnes and karats
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            tonnesToKarats();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            karatsToTonnes();
        }
        //tonnes and oz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            tonnesToOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            ouncesToTonnes();
        }
        //tonnes and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            tonnesToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            poundsToTonnes();
        }
        //tonnes and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            tonnesToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            stoneToTonnes();
        }
        //tonnes and tons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tonnes" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            tonnesToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tonnes") {
            tonsToTonnes();
        }
        //pounds and tons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            poundsToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            tonsToPounds();
        }
        //karats and tons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            karatsToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            tonsToKarats();
        }
        //karats and pounds
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "pounds") {
            karatsToPounds();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "pounds" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            poundsToKarats();
        }
        //karats and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "karats" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            karatsToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "karats") {
            stoneToKarats();
        }
        //oz and stone
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "stone") {
            ouncesToStone();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "stone" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            stoneToOunces();
        }
        //oz and tons
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "ounces" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tons") {
            ouncesToTons();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tons" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ounces") {
            tonsToOunces();
        }
        //mg and g
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "milligrams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "grams") {
            milligramsToGrams();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "grams" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "milligrams") {
            gramsToMilligrams();
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
                        <h3>Distance / Length</h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-3 col-xs-10 col-sm-10 inputBox">
                    
                        <input id="userInput"  type="text" name="number" value={inputValue} onChange={handleInputChange}/> 
                        <div className="select inputMenu text-center">
                            <select id="unitInput" className="unitMenu" name="unitInput">
                                <option value="0">Select unit:</option>
                                <option value="ounces">ounces</option>
                                <option value="pounds">pounds</option>
                                <option value="stone">stone</option>
                                <option value="tons">tons</option>
                                <option value="milligrams">milligrams</option>
                                <option value="grams">grams</option>
                                <option value="kilograms">kilograms</option>
                                <option value="tonnes">tonnes</option>
                                <option value="nauticalMiles">karats</option>
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
                                <option value="ounces">ounces</option>
                                <option value="pounds">pounds</option>
                                <option value="stone">stone</option>
                                <option value="tons">tons</option>
                                <option value="milligrams">milligrams</option>
                                <option value="grams">grams</option>
                                <option value="kilograms">kilograms</option>
                                <option value="tonnes">tonnes</option>
                                <option value="nauticalMiles">karats</option>
                            </select>
                        </div>
                    </div>
                </div>
            
            </div>        
        </div>
    );
};

export default Mass;


