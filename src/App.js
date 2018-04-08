import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
    render() {
        // A sample car object that we will pass as props
        let number = 10;
        return (
            <div className="App">
                <Header />
                <Home name={'Palash'} initialNumber={number} />
            </div>
        );
    }
}

export default App;
