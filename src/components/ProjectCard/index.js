import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class ProjectCard extends Component {
    constructor() {
        super();

        this.state = {
            link:''
        }
    }

    componentDidMount() {
        this.setState({link:`/projects/${this.props.article.id}`})
    }
    render() {
        return (
            <div className="ProjectCard-container">

                <div className="row ProjectCard-title-container">
                    <Link className="ProjectCard-title" to={this.state.link}>
                        {this.props.article.name}
                    </Link>
                </div>

                <div className="ProjectCard-image-container row">
                    <img className="ProjectCard-image img-fluid" alt={this.props.article.name} src={this.props.article.image} />
                </div>

                <div className="ProjectCard-description-container row">
                    <p classname="ProjectCard-description">
                        {this.props.article.description}
                    </p>
                </div>

                <div className="ProjectCard-tags-container row">
                    {this.props.article.tags.map(tag => <p className="ProjectCard-tags-tag">#{tag}&nbsp;</p> )}
                </div>

            </div>
        );
    }
}

export default ProjectCard;