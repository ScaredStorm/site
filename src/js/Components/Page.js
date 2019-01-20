import React, {Component} from 'react';
import About from './About';
import ProjectList from './ProjectList';

export default class Page extends Component {
    render() {
        return (
            <main>
                <About/>
                <ProjectList/>
            </main>
        );
    }
}
