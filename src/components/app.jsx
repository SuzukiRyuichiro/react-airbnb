import React, { Component } from 'react';
import FlatList from './flat-list.jsx';
import Map from './map.jsx';

class App extends Component {

  render () {
    return (
      <div>
        <div className="left-scene">
          <FlatList />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
