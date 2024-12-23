import React, { Component } from 'react';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <nav className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <a href="/" className='navbar-brand'>{this.props.brand}</a>
                </div>
                
                </nav>
        );
    }
}
 
export default Header;