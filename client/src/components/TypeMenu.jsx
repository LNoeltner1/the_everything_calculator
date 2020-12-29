import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";


const TypeMenu = () => {
    return (
            <div className="row">
                <Link to="/">Home</Link>
                <Link to="/Distance">Distance</Link>
            </div>

    );
};

export default TypeMenu;