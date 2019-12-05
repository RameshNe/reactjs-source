import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import list from "./json/finalList.json";

class FinalObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationValue: this.props.locationValue,
      hotelValue: this.props.hotelValue,
      finalList: []
    };
  }
  computeFinalList() {
    this.setState({ finalList: list });
  }
  render() {
    return (
      <div>
        <div>
          <select style={{ width: `300px` }}>
            {Object.entries(this.state.finalList).map(final => {
              return (
                <option key={final} value={final}>
                  {JSON.stringify(final)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
export default FinalObject;
