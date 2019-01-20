import React, {Component} from 'react';
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
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/04/TinySafeWorld.png"
                },
                {
                    title: "Experiment Visualizer",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/Visualizer.png"
                },
                {
                    title: "Tower Defense with A*",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/towerdefense.png"
                },
                {
                    title: "Space Shooter",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/shooter.png"
                },
                {
                    title: "Cellular Automaton Experiment",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/cellular.png"
                },
                {
                    title: "Platformer Prototype",
                    image: "https://www.sboelhouwers.nl/wp-content/uploads/2017/03/platformer.png"
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