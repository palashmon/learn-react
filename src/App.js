import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import BaseComponent from '../src/components/BaseComponent';

class App extends BaseComponent {
    // Call the constructor here
    constructor(props) {
        super();
        this.state = {
            homeLink: 'Learn React',
            homeMounted: true
        };
        this._bind('onChangeLinkName', 'onChangeHomeMounted');
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        let homeCmp = '';
        let number = 10;
        if (this.state.homeMounted) {
            homeCmp = (
                <Home
                    name={'Palash'}
                    initialNumber={number}
                    changeLink={this.onChangeLinkName}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="App">
                <Header homeLink={this.state.homeLink} />
                {homeCmp}
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 text-center">
                        <button onClick={this.onChangeHomeMounted} className="btn btn-sm btn-info">
                            (Un)Mount Home Component
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
