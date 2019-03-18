import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProjectItem extends Component {
    render() {
        return (
            <Link to={`/project/${this.props.project.url_key}`} className="project gs-12-xs gs-6-m gs-4-l">
                <div className="project-container">
                    <div className="project-image">
                        <img src={this.props.project.image} alt={this.props.project.title}/>
                    </div>
                    <h3 className="project-title">{this.props.project.title}</h3>
                </div>
            </Link>
        );
    }
}