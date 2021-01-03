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
    const pintsToQuarts = () => {
        setResult(inputValue / 2);
    }
    const quartsToPints = () => {
        setResult(inputValue * 2);
    }
    //pints and gallons
    const pintsToGallons = () => {
        setResult(inputValue / 8);
    }
    const gallonsToPints = () => {
        setResult(inputValue * 8);
    }
    //pints and ml
    const pintsToMilliliters = () => {
        setResult(inputValue * 473);
    }
    const millilitersToPints = () => {
        setResult(inputValue / 473);
    }
    //pints and liters
    const pintsToLiters = () => {
        setResult(inputValue / 2.113);
    }
    const litersToPints = () => {
        setResult(inputValue * 2.113);
    }
    //pints and m^3
    const pintsToCubicMeters = () => {
        setResult(inputValue / 2113);
    }
    const cubicMetersToPints = () => {
        setResult(inputValue * 2113);
    }
    //pints and tsp
    const pintsToTeaspoons = () => {
        setResult(inputValue * 96);
    }
    const teaspoonsToPints = () => {
        setResult(inputValue / 96);
    }
    //pints and cups
    const pintsToCups = () => {
        setResult(inputValue * 2);
    }
    const cupsToPints = () => {
        setResult(inputValue / 2);
    }
    //pints and tbsp
    const pintsToTablespoons = () => {
        setResult(inputValue * 32);
    }
    const tablespoonsToPints = () => {
        setResult(inputValue / 32);
    }
    //quarts and gallons
    const quartsToGallons = () => {
        setResult(inputValue / 4);
    }
    const gallonsToQuarts = () => {
        setResult(inputValue * 4);
    }
    //quarts and liters
    const quartsToLiters = () => {
        setResult(inputValue / 1.057);
    }
    const litersToQuarts = () => {
        setResult(inputValue / 1.057);
    }
    //quarts and m^3
    const quartsToCubicMeters = () => {
        setResult(inputValue / 1057);
    }
    const cubicMetersToQuarts = () => {
        setResult(inputValue * 1057);
    }
    //quarts and tbsp
    const quartsToTablespoons = () => {
        setResult(inputValue * 64);
    }
    const tablespoonsToQuarts = () => {
        setResult(inputValue / 64);
    }
    //quarts and ml
    const quartsToMilliliters = () => {
        setResult(inputValue * 946);
    }
    const millilitersToQuarts = () => {
        setResult(inputValue / 946);
    }
    //gallons and m^3
    const gallonsToCubicMeters = () => {
        setResult(inputValue / 264);
    }
    const cubicMetersToGallons = () => {
        setResult(inputValue * 264);
    }
    //gallons and ml
    const gallonsToMilliliters = () => {
        setResult(inputValue * 3785);
    }
    const millilitersToGallons = () => {
        setResult(inputValue / 3785);
    }
    //gallons and tsp
    const gallonsToTeaspoons = () => {
        setResult(inputValue * 768);
    }
    const teaspoonsToGallons = () => {
        setResult(inputValue / 768);
    }
    //gallons and tbsp
    const gallonsToTablespoons = () => {
        setResult(inputValue * 256);
    }
    const tablespoonsToGallons = () => {
        setResult(inputValue * 264);
    }
    //gallons and cups
    const gallonsToCups = () => {
        setResult(inputValue * 16);
    }
    const cupsToGallons = () => {
        setResult(inputValue / 16);
    }
    //liters and m^3
    const litersToCubicMeters = () => {
        setResult(inputValue / 1000);
    }
    const cubicMetersToLiters = () => {
        setResult(inputValue * 1000);
    }
    //liters and tsp
    const litersToTeaspoons = () => {
        setResult(inputValue * 203);
    }
    const teaspoonsToLiters = () => {
        setResult(inputValue / 203);
    }
    //liters and gallon
    const litersToGallons = () => {
        setResult(inputValue / 3.785);
    }
    const gallonsToLiters = () => {
        setResult(inputValue * 3.785);
    }
    //liters and tbsp
    const litersToTablespoons = () => {
        setResult(inputValue * 67.628);
    }
    const tablespoonsToLiters = () => {
        setResult(inputValue / 67.628);
    }
    //liters and cups
    const litersToCups = () => {
        setResult(inputValue * 4.227);
    }
    const cupsToLiters = () => {
        setResult(inputValue / 4.227);
    }
    //floz and cups
    const fluidOuncesToCups = () => {
        setResult(inputValue / 8);
    }
    const cupsToFluidOunces = () => {
        setResult(inputValue * 8);
    }
    //floz and pints
    const fluidOuncesToPints = () => {
        setResult(inputValue / 16);
    }
    const pintsToFluidOunces = () => {
        setResult(inputValue * 16);
    }
    //floz and quarts
    const fluidOuncesToQuarts = () => {
        setResult(inputValue / 32);
    }
    const quartsToFluidOunces = () => {
        setResult(inputValue * 32);
    }
    //floz and gallons
    const fluidOuncesToGallons = () => {
        setResult(inputValue / 128);
    }
    const gallonsToFluidOunces = () => {
        setResult(inputValue * 128);
    }
    //floz and ml
    const fluidOuncesToMilliliters = () => {
        setResult(inputValue * 29.5735);
    }
    const millilitersToFluidOunces = () => {
        setResult(inputValue * 8);
    }
    //floz and liters
    const fluidOuncesToLiters = () => {
        setResult(inputValue / 33.814);
    }
    const litersToFluidOunces = () => {
        setResult(inputValue * 33.814);
    }
    //floz and m^3
    const fluidOuncesToCubicMeters = () => {
        setResult(inputValue / 33814);
    }
    const cubicMetersToFluidOunces = () => {
        setResult(inputValue * 33814);
    }
    //floz and tsp
    const fluidOuncesToTeaspoons = () => {
        setResult(inputValue * 6);
    }
    const teaspoonsToFluidOunces = () => {
        setResult(inputValue / 6);
    }
    //ml and tsp
    const millilitersToTeaspoons = () => {
        setResult(inputValue / 4.929);
    }
    const teaspoonsToMilliliters = () => {
        setResult(inputValue * 4.929);
    }
    //ml and tbsp
    const millilitersToTablespoons = () => {
        setResult(inputValue / 14.787);
    }
    const tablespoonsToMilliliters = () => {
        setResult(inputValue * 14.787);
    }
    //ml and liters
    const millilitersToLiters = () => {
        setResult(inputValue / 1000);
    }
    const litersToMilliliters = () => {
        setResult(inputValue * 1000);
    }
    //ml and cups
    const millilitersToCups = () => {
        setResult(inputValue / 237);
    }
    const cupsToMilliliters = () => {
        setResult(inputValue * 237);
    }
    //m^3 and tsp
    const cubicMetersToTeaspoons = () => {
        setResult(inputValue * 202884);
    }
    const teaspoonsToCubicMeters = () => {
        setResult(inputValue / 202884);
    }
    //m^3 and tbsp
    const cubicMetersToTablespoons = () => {
        setResult(inputValue * 67628);
    }
    const tablespoonsToCubicMeters = () => {
        setResult(inputValue / 67628);
    }
    //m^3 and cups
    const cubicMetersToCups = () => {
        setResult(inputValue * 4227);
    }
    const cupsToCubicMeters = () => {
        setResult(inputValue / 4227);
    }
    //m^3 and ml
    const cubicMetersToMilliliters = () => {
        setResult(inputValue * 1000000);
    }
    const millilitersToCubicMeters = () => {
        setResult(inputValue / 1000000);
    }
    //tsp and tbsp
    const teaspoonsToTablespoons = () => {
        setResult(inputValue / 3);
    }
    const tablespoonsToTeaspoons = () => {
        setResult(inputValue * 3);
    }
    //tsp and cups
    const teaspoonsToCups = () => {
        setResult(inputValue / 48);
    }
    const cupsToTeaspoons = () => {
        setResult(inputValue * 48);
    }
    //tbsp and cups
    const tablespoonsToCups = () => {
        setResult(inputValue / 16);
    }
    const cupsToTablespoons = () => {
        setResult(inputValue * 16);
    }
    //tbsp and floz
    const tablespoonsToFluidOunces = () => {
        setResult(inputValue / 2);
    }
    const fluidOuncesToTablespoons = () => {
        setResult(inputValue * 2);
    }
    //tsp and quarts
    const teaspoonsToQuarts = () => {
        setResult(inputValue / 192);
    }
    const quartsToTeaspoons = () => {
        setResult(inputValue * 192);
    }
    //cups and quarts
    const cupsToQuarts = () => {
        setResult(inputValue / 4);
    }
    const quartsToCups = () => {
        setResult(inputValue * 4);
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
            millilitersToCups();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "ml") {
            cupsToMilliliters();
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
        //tbsp and floz
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tbsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "floz") {
            tablespoonsToFluidOunces();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "floz" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tbsp") {
            fluidOuncesToTablespoons();
        }
        //tsp and quarts
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "tsp" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            teaspoonsToQuarts();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "tsp") {
            quartsToTeaspoons();
        }
        //cup and quarts
        else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "cups" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "quarts") {
            cupsToQuarts();
        } else if (inputUnitMenu.options[inputUnitMenu.selectedIndex].value === "quarts" && outputUnitMenu.options[outputUnitMenu.selectedIndex].value === "cups") {
            quartsToCups();
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

export default Volume;