import React, { Component } from 'react';
import TypeMenu from '../components/TypeMenu';

class Distance extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">Menu</div>
                <div className="col-md-6">user input</div>
                <div className="col-md-2">user output</div>
            </div>
        );
    }
}

export default Distance;