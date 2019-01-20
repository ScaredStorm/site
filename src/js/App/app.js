import React, {Component} from 'react';
import Page from '../Components/Page';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Page/>
                <Footer/>
            </div>
        );
    }
}
