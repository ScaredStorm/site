import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer section">
                <div className="container">
                    &copy; Sander Boelhouwers &mdash; {new Date().getFullYear()}
                </div>
            </footer>
        );
    }
}