import React, {Component} from 'react';

export default class ProjectItem extends Component {
    render() {
        return (
            <div className="project gs-12-xs gs-6-m gs-4-l">
                <div className="project-container">
                    <div className="project-image">
                        <img src={this.props.project.image} alt={this.props.project.title}/>
                    </div>
                    <span>{this.props.project.title}</span>
                </div>
            </div>
        );
    }
}