import React, { Component } from 'react';

class BlogPost extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="col">
                <div className="row">
                    <h5>
                        {post.title}
                    </h5>
                </div>
                <div className="row">
                    <p>{post.content}</p>
                </div>
                <div className="row">
                    <p>{post.author}</p>
                </div>
            </div>
        );
    }
}

export default BlogPost;