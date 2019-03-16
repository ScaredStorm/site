import React, {Component} from 'react';
import About from '../About';
import Header from '../Header';
import ProjectList from '../ProjectList';

export default class Home extends Component
{
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <ProjectList/>
            </div>
        );
    }
}
