import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import { Link } from "react-router-dom";
import "../App.css";

class Home extends Component {
    render() {
        return (
            <div className="row homeContainer">
                <SideBar />
                
                <div className="col-8 mainColumnHome">
                    Hello, welcome to my home page. You can convert anything on 
                    this website, just click on the type of conversion you want 
                    to calculate on the sidebar.
                </div>
                
            </div>
        );
    }
}

export default Home;