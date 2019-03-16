import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from './ProjectItem';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {projects: []}
    }
    
    componentDidMount() {
        this.setState({
            projects: [
                {
                    title: "Tiny Safe World",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/04/TinySafeWorld.png",
                    url_key: "tiny-safe-world"
                },
                {
                    title: "Experiment Visualizer",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/Visualizer.png",
                    url_key: "visualizer"
                },
                {
                    title: "Tower Defense with A*",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/towerdefense.png",
                    url_key: "tower-defense-with-astar"
                },
                {
                    title: "Space Shooter",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/shooter.png",
                    url_key: "space-shooter"
                },
                {
                    title: "Cellular Automaton Experiment",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/cellular.png",
                    url_key: "cellular-automaton-experiment"
                },
                {
                    title: "Platformer Prototype",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/platformer.png",
                    url_key: "platformer-prototype"
                }
            ]
        });
    }

    render() {
        return (
            <section className="section">
                <div className="container grid">
                    {this.state.projects && this.state.projects.map((val, i) => <ProjectItem project={val} key={i}/>)}
                </div>
            </section>
        );
    }
}