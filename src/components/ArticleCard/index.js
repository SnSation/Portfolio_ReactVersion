import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class ArticleCard extends Component {
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
            <div className="ArticleCard-container col-md-3">

                <div className="row ArticleCard-title-container">
                    <Link className="ArticleCard-title" to={this.state.link}>
                        {this.props.article.name}
                    </Link>
                </div>

                <div className="ArticleCard-image-container row">
                    <img className="ArticleCard-image img-fluid" alt={this.props.article.name} src={this.props.article.image} />
                </div>

                <div className="ArticleCard-summary-container row">
                    <p classname="ArticleCard-description">
                        {this.props.article.description}
                    </p>
                </div>

                <div className="ArticleCard-tags-container row">
                    {this.props.article.tags.map(tag => <p className="ArticleCard-tags-tag">#{tag}&nbsp;</p> )}
                </div>

            </div>
        );
    }
}

export default ArticleCard;