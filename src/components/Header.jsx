import React, { Component } from 'react';

const containerStyle = {
    position: 'relative',
    textAlign: 'center'
}

const imageStyle = {
    position: 'absolute',
    top: '50%',
     left: '50%',
    transform: 'translate(-50%, -50%)'
}

class Header extends Component {
    render() {
        return (
            <header>
                <div style={containerStyle}>
                    <img src="src/assets/forest.jpg" alt="" />
                    <div style={imageStyle}>Marko</div>
                </div>
            </header>
        )
    }
}

export default Header