import React, {Component} from 'react';

export default class Project extends Component
{
    render() {
        const {params} = this.props.match;
        return (
            <div>
                <h2>Trying to render project.</h2>
                <span>{params.key}</span>
            </div>
        );
    }
}