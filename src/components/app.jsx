import React, { Component } from 'react';
import FlatList from './flat-list.jsx';
import Map from './map.jsx';

class App extends Component {

  render () {
    return (
      <div>
        <FlatList />
        <Map />
      </div>
    );
  }
}

export default App;
