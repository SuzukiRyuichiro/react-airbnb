import React, { Component } from 'react';
import FlatList from './flat-list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLng: 2.34689,
      selectedFlatLat: 48.884211
    };
  }

  selectFlat = (selectedFlatLng, selectedFlatLat) => {
    this.setState({
      selectedFlatLng: selectedFlatLng,
      selectedFlatLat: selectedFlatLat
    });
  }

  render () {
    const { selectedFlatLat, selectedFlatLng } = this.state;
    return (
      <div>
        <div className="left-scene">
          <FlatList selectFlat={this.selectFlat} />
        </div>
        <div className="right-scene">
          <Map selectedFlatLng={selectedFlatLng} selectedFlatLat={selectedFlatLat} />
        </div>
      </div>
    );
  }
}

export default App;
