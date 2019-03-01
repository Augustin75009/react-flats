import React, { Component } from 'react';

const cardStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')"
};

class Flat extends Component {
  render(props) {
    return (
      <div className="card" style={ cardStyle }>
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
