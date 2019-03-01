import React, { Component } from 'react';

const cardStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')"
};

class Flat extends Component {
  handleClick = () => {
    // console.log(this.props.index);
    this.props.setMarker(this.props.index);
  }

  render(props) {
    return (
      <div className="card" style={cardStyle} onClick={this.handleClick}>
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
