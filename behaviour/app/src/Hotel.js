import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Hotel extends Component {
  state = {
    hotelValue: "Hotel"
  };
  constructor(props) {
    super(props);
    this.setState({
      isLoading: this.props.isLoading,
      hotels: this.props.hotels
    });
  }
  handleChange(event) {
    console.log("Hotel Event reached", event.target.value);
    this.setState({ hotelValue: event.target.value });
  }
  render() {
    return (
      <select
        onChange={this.handleChange.bind(this)}
        style={{ width: `220px` }}
      >
        {Object.entries(this.props.hotels).map(hotel => {
          return (
            <option key={hotel} value={JSON.stringify(hotel)}>
              {JSON.stringify(hotel)}
            </option>
          );
        })}
      </select>
    );
  }
}
export default Hotel;
