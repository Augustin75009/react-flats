import React, { Component } from 'react';
import FlatList from './flat_list';
import SimpleMap from './google_map';
import flats from '../../data/flats';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {
        lat: 48.853410,
        lng: 2.3488000
      },
      center: {
        lat: 48.853410,
        lng: 2.3488000
      }
    };
  }

  setMarker = (index) => {
    // console.log(flats[index].lat);
    this.setState({
      marker: {
        lat: flats[index].lat,
        lng: flats[index].lng
        // lat: 48.953410,
        // lng: 2.3488000
      },
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="flat-list">
          <FlatList
          flats={flats}
          setMarker={this.setMarker} />
        </div>
        <div className="map-container">
          <SimpleMap
            marker={this.state.marker}
            center={this.state.center} />
        </div>
      </div>
    );
  }
}

export default App;
