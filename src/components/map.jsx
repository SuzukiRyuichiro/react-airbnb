import React from 'react';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nvb3Rlci1zY29vdGVyIiwiYSI6ImNra3J2Z2ozZTBmNDczMXA2MzVvdXdrOHkifQ.RiTFrooZyY_30oinadpaxw';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatLng: this.props.selectedFlatLng,
      selectedFlatLat: this.props.selectedFlatLat,
      zoom: 9
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { selectedFlatLng, selectedFlatLat, zoom } = this.state;
    // makes the intial map
    const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [selectedFlatLng, selectedFlatLat],
    zoom: zoom
    });
  }

  // this is just after initialization. won't be called when state or props change.

  addMarker = (lng, lat) => {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 13
    });
    const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedFlatLng: nextProps.selectedFlatLng,
      selectedFlatLat: nextProps.selectedFlatLat
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.selectedFlatLat && nextState.selectedFlatLng)
   }

  componentWillUpdate (nextProps, nextState) {
    this.addMarker(nextState.selectedFlatLng, nextState.selectedFlatLat);
  }

  render() {
    return (
     <div>
       <div ref={this.mapContainer} className="map-container" />
     </div>
    );
  }
}

export default Map;
