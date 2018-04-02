import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="content" className="body">
                    Hello World!
                </section>

                <section className="body footer">&copy; PM {new Date().toLocaleString()}</section>
            </div>
        );
    }
}

export default Home;
