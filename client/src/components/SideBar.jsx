import React from 'react';
import "../App.css";
//extra dependencies are for the hambuger sidenav menu
// https://mdbootstrap.com/docs/react/navigation/sidenav/
// import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const TypeMenu = () => {
    return (
            <div className="col-md-2 col-xs-12 col-sm-2 sideBar">
                <p><Link to="/" id="homeLink" className="navLink">Home</Link></p>
                <hr />
                <p><Link to="/Distance" id="distanceLink" className="navLink">Distance</Link></p>
                <p><Link to="/Mass" id="massLink" className="navLink">Mass/Weight</Link></p>
                <p><Link to="/Volume" id="volumeLink" className="navLink">Volume</Link></p>
            

                
            </div>

    );
};

export default TypeMenu;
