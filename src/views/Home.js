import React, { Component } from 'react';
import SectionTitle from '../components/SectionTitle';
import Showcase from '../components/Showcase';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            posts : [],
            projects : []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/interface/all_blogposts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}))
            .catch(error => console.error(error));

        fetch('http://127.0.0.1:5000/interface/all_projects')
            .then(res => res.json())
            .then(data => this.setState({projects: data}))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="page-content col">
                <Showcase title="Never Stop Progress" lead="Try, fail, adapt, repeat" link="/"/>
                <SectionTitle title="Featured Projects" />
                <div className="page-features row">
                    {this.state.projects.reverse().map(project => <div className="col-md-3"><ProjectCard article={project} key={project.id}/></div>)}
                </div>
                
                <div className="page-posts row">
                    <div className="col-md-6">
                        <SectionTitle title="Recent Blog Posts" />
                        {this.state.posts.reverse().slice(0, 5).map(post => <div className="row"><BlogPost post={post} key={post.id} /></div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;