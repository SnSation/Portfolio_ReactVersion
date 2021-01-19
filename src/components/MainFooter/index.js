import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom'

class MainFooter extends Component {
    render() {
        return (
            <div className="MainFooter-container bg-light row">
                <div className="MainFooter-sitemap-container col-md-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="list-group-item bg-light">
                            <Link to='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li className="list-group-item bg-light">
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                        <li className="list-group-item bg-light">
                            <Link to='/blog'>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="MainFooter-contact-container col-md-6">
                    <form action="#">
                        <div className="MainFooter-contact-identity-container row">
                            <div className="form-group col">
                                <input className="form-control" type="text" name="email" placeholder="person@email.com"/>
                            </div>
                            <div className="form-group col">
                                <input className="form-control" type="text" name="name" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="MainFooter-contact-content-container row">
                        <textarea class="form-control" id="MainFooter-contact-content" name="content" rows="4">All questions and suggestions welcome!</textarea>
                        </div>
                        <button type="submit" class="contact-submit btn btn-dark mb-2">Contact Me</button>
                    </form>
                </div>

                <div className="Mainfooter-social-container col-md-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light">
                            <a href="https://www.linkedin.com/in/software-engineer-blair/" className="fa fa-linkedin"/>
                            <a href="https://www.linkedin.com/in/software-engineer-blair/">
                                software-engineer-blair
                            </a>
                        </li>
                        <li className="list-group-item bg-light">
                            <a href="https://github.com/SnSation" className="fa fa-github"/>
                            <a href="https://github.com/SnSation">
                                SnSation
                            </a>
                        </li>
                        <li className="list-group-item bg-light">
                            <a href="https://twitter.com/_SnSation_" className="fa fa-twitter"/>
                            <a href="https://twitter.com/_SnSation_">
                                _SnSation_
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default MainFooter;