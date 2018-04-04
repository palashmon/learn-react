import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    // Call the constructor here
    constructor(props) {
        super();
        console.log(props);
        this.number = props.number;

        // This binding is necessary to make `this` work in the callback
        this.onIncreaseButtonClick = this.onIncreaseButtonClick.bind(this);
    }

    onIncreaseButtonClick() {
        console.log(this);
        this.number += 5;
    }

    render() {
        console.log(this.props);
        // console.log(this.props.children);

        // Return the view
        return (
            <div>
                <section id="content" className="body">
                    <p>Hello World!</p>
                    <p>Your name is {this.props.name}</p>
                    <p>Current number: {this.number}</p>
                    <hr />
                    <button onClick={this.onIncreaseButtonClick} type="button" className="btn btn-sm btn-info">
                        Increase Number
                    </button>
                </section>

                <section className="body footer">&copy; PM {new Date().toLocaleString()}</section>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
};

export default Home;
