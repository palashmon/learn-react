import { Component } from 'react';

class BaseComponent extends Component {
    // Bind `this` to multiple events
    _bind(...methods) {
        methods.forEach(method => (this[method] = this[method].bind(this)));
    }
}

export default BaseComponent;
