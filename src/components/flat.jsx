import React, { Component } from 'react';

class Flat extends Component {
  constructor (props) {
    super(props);

    const { flat } = this.props;

    this.state = {
      name: flat.name,
      imageUrl: flat.imageUrl,
      price: flat.price,
      priceCurrency: flat.priceCurrency,
      lat: flat.lat,
      lng: flat.lng
    }
  }

  render () {
    return (
      <div className="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.state.imageUrl})`}}>
        <div className="card-category">{this.state.price} {this.state.priceCurrency}</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
