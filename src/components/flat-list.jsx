import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../data/flats.js'

class FlatList extends Component {
  handleClick = (event) => {
    const lnglat = event.target.id.split(',');
    this.props.selectFlat(lnglat[0], lnglat[1]);
  }

  render() {
    return (
      <div className="flat-list" onClick={this.handleClick}>
        { flats.map( flat => <Flat flat={flat} key={flat.name} id={[flat.lng, flat.lat]}/> ) }
      </div>
    );
  }
}

export default FlatList;
