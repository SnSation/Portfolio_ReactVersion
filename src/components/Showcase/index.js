import React, { Component } from 'react';

class Showcase extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">{this.props.feature_title}</h1>
                    <p className="lead">{this.props.feature_lead}</p>
                </div>
                
            </div>
        );
    }
}

export default Showcase;