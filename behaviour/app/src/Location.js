import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Location extends Component {
  state = {
    locationValue: "Location"
  };
  constructor(props) {
    super(props);
    this.setState({
      isLoading: this.props.isLoading,
      locations: this.props.locations,
      hotels: this.props.hotels
    });
  }
  handleChange(event) {
    console.log("Location Event reached", event.target.value);
    this.setState({ locationValue: event.target.value });
  }
  render() {
    return (
      <div>
        <select
          onChange={this.handleChange.bind(this)}
          style={{ width: `220px` }}
        >
          {Object.entries(this.props.locations).map(location => {
            return (
              <option key={location} value={JSON.stringify(location)}>
                {JSON.stringify(location)}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default Location;
