import React, {Component} from 'react';

export default class Project extends Component
{
    render() {
        return (
            <div>
                <h2>Trying to render project.</h2>
                <span>{this.props.match.params.key}</span>
            </div>
        );
    }
}