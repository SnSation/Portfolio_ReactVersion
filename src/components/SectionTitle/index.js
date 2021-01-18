import React, { Component } from 'react';
import './index.css'

class SectionTitle extends Component {
    render() {
        return (
            <div className="SectionTitle-container row">
                <p className="SectionTitle-content">
                    {this.props.title}
                </p>
            </div>
        );
    }
}

export default SectionTitle;