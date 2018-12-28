import React, {Component} from 'react';

export default class Page extends Component {
    render() {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <main className="container">
                <ul>
                    {numbers.map(value => <li key={value.toString()}>{value}</li>)}
                </ul>
            </main>
        );
    }
}
