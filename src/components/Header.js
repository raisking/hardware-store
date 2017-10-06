import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently on Sale: A Hammer!</p>
                <input type="text" placeholder="A Hammer" />
            </div>
        );
    }
}
export default Header;