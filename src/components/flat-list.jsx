import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../data/flats.js'

class FlatList extends Component {

  render() {
    return (
      <div>
        { flats.map( flat => <Flat flat={flat} key={flat.name}/> ) }
      </div>
    );
  }
}

export default FlatList;
