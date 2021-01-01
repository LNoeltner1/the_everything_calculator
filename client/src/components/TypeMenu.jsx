import React from 'react';
import "../App.css";
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const TypeMenu = () => {
    return (
            <div className="col-md-2 col-xs-2 col-sm-2 sideBar">
                <Link to="/">Home</Link>
                <Link to="/Distance">Distance</Link>
            

                
            </div>

    );
};

export default TypeMenu;