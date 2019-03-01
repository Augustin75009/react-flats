import React, { Component } from 'react';
import Flat from './flat';

class Flats extends Component {
  renderList(props) {
    return (
      this.props.flats.map((flat) => {
        return <Flat name={flat.name} price={flat.price} key={flat.name} />;
      })
    );
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default Flats;
