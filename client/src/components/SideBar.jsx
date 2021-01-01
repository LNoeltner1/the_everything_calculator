import React from 'react';
import "../App.css";
//extra dependencies are for the hambuger sidenav menu
// https://mdbootstrap.com/docs/react/navigation/sidenav/
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const TypeMenu = () => {
    return (
            <div className="col-md-2 col-xs-2 col-sm-2 sideBar">
                <p><Link  to="/" className="navLink">Home</Link></p>
                <p><Link to="/Distance" className="navLink">Distance</Link></p>
            

                
            </div>

    );
};

export default TypeMenu;