import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.children);

        let namesList = this.props.names.map((name, index) => <li key={index}>{name}</li>);

        return (
            <div>
                <section id="content" className="body">
                    <p>Hello World!</p>
                    <p>Your name is {this.props.name}</p>
                    <p>Your car is {this.props.car.type + ' ' + this.props.car.model}</p>
                    <p>Looping through an array:-</p>
                    <ul>{namesList}</ul>
                    <hr />
                    {this.props.children}
                </section>

                <section className="body footer">&copy; PM {new Date().toLocaleString()}</section>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    car: PropTypes.object,
    names: PropTypes.array,
    children: PropTypes.element.isRequired
};

export default Home;
