import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";


const TypeMenu = () => {
    return (
        <div className="grid-container">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Distance" className="nav-link">Distance</Link>
        </div>
    );
};

export default TypeMenu;