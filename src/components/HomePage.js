import React, { Component } from 'react'
import Header from './Header'
import Shop from './Shop'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2><u>HomePage.js</u></h2>
                <h1>Home Page</h1>
                {<Header />  }
                <hr />
                <Shop />
            </div>
        );
    }
}
export default HomePage;