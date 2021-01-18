import React, { Component } from 'react';
import './index.css'
class BlogPost extends Component {
    render() {
        return (
            <div className="BlogPost-container col">
                <div className="BlogPost-title-container row">
                    <h5 className="BlogPost-title">
                        {this.props.post.title}
                    </h5>
                </div>

                <div className="BlogPost-author-container row">
                    <p className="BlogPost-author">Author: {this.props.post.author} | {this.props.post.created_on}</p>
                </div>
                
                <div className="BlogPost-content-container row">
                    <p className="BlogPost-content">{this.props.post.content}</p>
                </div>

                <div className="BlogPost-tags-container row">
                    {this.props.post.tags.map(tag => <p className="BlogPost-tags">#{tag}&nbsp;</p> )}
                </div>
                <hr />
            </div>
        );
    }
}

export default BlogPost;