import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Showcase from '../components/Showcase';

class Home extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-content col">
                <Showcase feature_title="Temporary Jumbotron" feature_lead="This is a sample lead for the jumbotron"/>
                <PageTitle page={this.props.page} />
                <div className="page-features row">
                    <div className="feature-container col" id="feature_1">
                        <h3 className="feature-title">Article Title</h3>
                        <div className="feature-image-container text-center">
                            <img className="feature-image" src="https://via.placeholder.com/300x300"/>
                        </div>
                        <p className="feature-summary">This is where the article summary goes. It will be supplied by the website API along with the image, title, and link location. Unfortunately, I have not created or linked the website API yet, so you just have filler text and a filler image.</p>
                    </div>
                    <div className="feature-container col" id="feature_1">
                        <h3 className="feature-title">Article Title</h3>
                        <div className="feature-image-container text-center">
                            <img className="feature-image" src="https://via.placeholder.com/300x300"/>
                        </div>
                        <p className="feature-summary">This is where the article summary goes. It will be supplied by the website API along with the image, title, and link location. Unfortunately, I have not created or linked the website API yet, so you just have filler text and a filler image.</p>
                    </div>
                    <div className="feature-container col" id="feature_1">
                        <h3 className="feature-title">Article Title</h3>
                        <div className="feature-image-container text-center">
                            <img className="feature-image" src="https://via.placeholder.com/300x300"/>
                        </div>
                        <p className="feature-summary">This is where the article summary goes. It will be supplied by the website API along with the image, title, and link location. Unfortunately, I have not created or linked the website API yet, so you just have filler text and a filler image.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;