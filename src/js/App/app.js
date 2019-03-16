import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Project from '../Components/Pages/Project';
import Footer from '../Components/Footer';

function Test() {
    return <h1>Test</h1>
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/project/:key' component={Project}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
