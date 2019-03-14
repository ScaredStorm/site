import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Page from '../Components/Page';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Page/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
