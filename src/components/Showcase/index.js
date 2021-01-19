import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
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
            
            <div className="Showcase-container jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="Showcase-title display-3">{this.props.title}</h1>
                    <p className="Showcase-lead lead">{this.props.lead}</p>
                    <hr class="my-4"/>
                    <p class="lead">
                        <Link className="btn btn-dark btn-lg" to={this.props.link} role="button">My Projects</Link>
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Showcase;