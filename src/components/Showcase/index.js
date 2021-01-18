import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <h1 className="display-3">{this.props.title}</h1>
                    <p className="lead">{this.props.lead}</p>
                    <hr class="my-4"/>
                    <p class="lead">
                        <Link className="btn btn-primary btn-lg" to={this.props.link} role="button">Learn more</Link>
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Showcase;