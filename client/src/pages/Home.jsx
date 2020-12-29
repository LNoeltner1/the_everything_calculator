import React, { Component } from 'react';
import TypeMenu from '../components/TypeMenu';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <TypeMenu />
                <div className="row homePage">
                        <div className="col-4">
                            Hello
                        </div>
                        <div className="col-8">Lauren</div>
                    
                </div>
            </div>
        );
    }
}

export default Home;