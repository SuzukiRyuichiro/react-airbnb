import React, { Component } from 'react';
import FlatList from './flat-list.jsx';
import Map from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLng: 0,
      selectedFlatLat: 0
    }
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <FlatList />
        </div>
        <div className="right-scene">
          <Map lng={this.state.selectedFlatLng} lat={this.state.selectedFlatLat} />
        </div>
      </div>
    );
  }
}

export default App;
