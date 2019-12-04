import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class FinalObject extends Component {
  state = {
    finalList: []
  };
  constructor(props) {
    super(props);
    this.setState({
      isLoading: this.props.isLoading,
      hotels: this.props.hotels,
      locationValue: this.props.locationValue,
      hotelValue: this.props.hotelValue
    });
  }
  UNSAFE_componentDidUpdate() {
    console.log("Location Selected Value", this.state.locationValue);
    console.log("Hotel Selected Value", this.state.hotelValue);
  }
  render() {
    return (
      <select style={{ width: `300px` }}>
        {Object.entries(this.props.hotels).map(hotel => {
          return (
            <option key={hotel} value={hotel}>
              {JSON.stringify(hotel)}
            </option>
          );
        })}
      </select>
    );
  }
}
export default FinalObject;
