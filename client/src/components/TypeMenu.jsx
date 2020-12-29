import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";


const TypeMenu = () => {
    return (
            <div className="col-3 sideBar">
                <div className="row"><Link to="/">Home</Link></div>
                <div className="row"><Link to="/Distance">Distance</Link></div>
            

                
            </div>

    );
};

export default TypeMenu;