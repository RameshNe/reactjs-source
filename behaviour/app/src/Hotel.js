import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      hotels: [],
      hotelValue: this.props.hotelValue
    };
  }
  handleChange(event) {
    this.setState({ hotelValue: event.target.value });
  }

  async loadHotels() {
    const response = await fetch("/api/hotels");
    const body = await response.json();
    this.setState({ hotels: body, isLoading: false });
  }

  render() {
    return (
      <div>
        <div>
          <select
            onChange={this.handleChange.bind(this)}
            style={{ width: `220px` }}
            onFocus={() => this.loadHotels()}
          >
            {Object.entries(this.state.hotels).map(hotel => {
              return (
                <option key={hotel} value={JSON.stringify(hotel)}>
                  {JSON.stringify(hotel)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
export default Hotel;
