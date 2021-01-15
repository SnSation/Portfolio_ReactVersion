import React, { Component } from 'react';

class PageTitle extends Component {
    render() {
        return (
            <div className="base_title row">
                <h2> {this.props.page} </h2>
            </div>
        );
    }
}

export default PageTitle;