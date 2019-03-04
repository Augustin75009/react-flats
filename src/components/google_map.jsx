import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    console.log(this.props.marker.lat)



    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA0TyDUIUrSUxv1rK-VAN-7mw7kZ-h0Eos' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.marker.lat}
            lng={this.props.marker.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
