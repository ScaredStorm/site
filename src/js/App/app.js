import React, {Component} from 'react';
import Header from '../Components/Header';
import Page from '../Components/Page';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Page/>
            </div>
        );
    }
}
