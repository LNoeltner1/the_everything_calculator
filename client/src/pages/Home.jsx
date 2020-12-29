import React, { Component } from 'react';
import TypeMenu from '../components/TypeMenu';

class Home extends Component {
    render() {
        return (
            <div className="grid-container homePage">
                <TypeMenu />
                <div className="grid-item">frbf</div>
                <div className="grid-item">Gerupt</div>
            </div>
        );
    }
}

export default Home;