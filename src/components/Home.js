import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../components/BaseComponent';

class Home extends BaseComponent {
    // Call the constructor here
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            number: props.initialNumber,
            status: 0,
            currentDate: new Date().toLocaleString(),
            homeLink: 'Changed Link'
        };

        // This binding is necessary to make `this` work in the callback
        this._bind('onButtonClick', 'onHandleClick', 'onChangeLink');
    }

    onChangeLink() {
        let newLink = this.state.homeLink === 'Changed Link' ? 'Learn React' : 'Changed Link';
        this.setState({ homeLink: newLink });
        this.props.changeLink(this.state.homeLink);
    }

    onButtonClick() {
        this.setState({ number: this.state.number + 5 });
        console.log(this.state);
    }

    onHandleClick() {
        console.log(this);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.children);

        // Return the view
        return (
            <div>
                <section id="content" className="body">
                    <p>Hello World!</p>
                    <p>Your name is {this.props.name}</p>
                    <p>Current number: {this.state.number}</p>
                    <hr />
                    <button onClick={this.onButtonClick} type="button" className="btn btn-sm btn-info">
                        Increase Number
                    </button>
                    <button onClick={this.onChangeLink} type="button" className="btn btn-sm btn-info ml-1">
                        Change Header Link
                    </button>
                </section>

                <section className="body footer">&copy; PM {this.state.currentDate}</section>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialNumber: PropTypes.number
};

export default Home;
