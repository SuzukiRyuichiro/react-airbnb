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
      <div className="card" id={this.props.id} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`}} >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
