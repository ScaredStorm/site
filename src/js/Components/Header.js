import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container header-container">
                    <h1>Sander<br/>Boelhouwers</h1>
                    <p>scroll down for content</p>
                </div>
            </header>
        );
    }
}
