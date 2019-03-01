import React, { Component } from 'react';
import Flat from './flat';

class Flats extends Component {
  renderList(props) {
    return (
      this.props.flats.map((flat, index) => {
        return (
          <Flat
            name={flat.name}
            price={flat.price}
            index={index}
            key={flat.name}
            setMarker={this.props.setMarker} />
        );
      })
    );
  }

  render() {
    return (
      <div className="flat-list inner">
        {this.renderList()}
      </div>
    );
  }
}

export default Flats;
