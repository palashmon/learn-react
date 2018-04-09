import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import BaseComponent from '../src/components/BaseComponent';

class App extends BaseComponent {
    // Call the constructor here
    constructor(props) {
        super();
        this.state = {
            homeLink: 'Learn React'
        };
        this._bind('onChangeLinkName');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        // A sample car object that we will pass as props
        let number = 10;
        return (
            <div className="App">
                <Header homeLink={this.state.homeLink} />
                <Home name={'Palash'} initialNumber={number} changeLink={this.onChangeLinkName} />
            </div>
        );
    }
}

export default App;
