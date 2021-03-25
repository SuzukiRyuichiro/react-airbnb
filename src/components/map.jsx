import React from 'react';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nvb3Rlci1zY29vdGVyIiwiYSI6ImNra3J2Z2ozZTBmNDczMXA2MzVvdXdrOHkifQ.RiTFrooZyY_30oinadpaxw';


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    lng: this.props.lng,
    lat: this.props.lat,
    zoom: 9
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);
  }

  render() {
   const { lng, lat, zoom } = this.state;
   return (
     <div>
       <div className="sidebar">
         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
       </div>
       <div ref={this.mapContainer} className="map-container" />
     </div>
   );
  }
}

export default Map;
