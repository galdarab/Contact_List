import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Header brand="Contact List"/>
        <div className='container p-3'>
        <Contacts/>
      </div>

    </div>
    );
  }
}
 
export default App;