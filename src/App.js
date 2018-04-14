import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './components/MainApp';
import BaseComponent from './components/BaseComponent';

class App extends BaseComponent {
    render() {
        return (
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        );
    }
}

export default App;
