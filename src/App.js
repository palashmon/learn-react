import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
    render() {
        // A sample car object that we will pass as props
        let car = { type: 'Fiat', model: '500', color: 'White' };
        let names = ['Noah', 'William', 'Ethan', 'James'];
        return (
            <div className="App">
                <Header />
                <Home name={'Palash'} car={car} names={names}>
                    <p>This is a paragraph!</p>
                </Home>
            </div>
        );
    }
}

export default App;
