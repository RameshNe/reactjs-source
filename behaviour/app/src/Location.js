import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      locations: this.props.locations,
      locationValue: this.props.locationValue
    };
  }
  handleChange(event) {
    this.setState({ locationValue: event.target.value });
  }

  async loadLocations() {
    const response = await fetch("/api/locations");
    const body = await response.json();
    this.setState({ locations: body, isLoading: true });
  }

  render() {
    return (
      <div>
        <select
          onChange={this.handleChange.bind(this)}
          style={{ width: `220px` }}
          onFocus={() => this.loadLocations()}
        >
          {Object.entries(this.state.locations).map(location => {
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
