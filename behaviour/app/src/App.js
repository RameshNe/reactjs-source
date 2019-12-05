import React, { Component } from "react";
import logo from "./hinjewadi.jpg";
import w_logo from "./hinjewadi-wipro.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Hotel from "./Hotel.js";
import list from "./json/finalList.json";

class App extends Component {
  state = {
    isLoading: false,
    locations: [],
    hotels: [],
    locationValue: "Location",
    hotelValue: "Hotel",
    finalList: [],
    finalDisable: true,
    isloadingDone: false
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      finalList: list,
      isLoading: false,
      finalDisable: false,
      isloadingDone: true
    });
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
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <header className="App-header" style={{ marginBottom: 20 }}>
            <h2>Map</h2>
            {this.state.isLoading && !this.state.isloadingDone && (
              <span>Loading...</span>
            )}
            {!this.state.isLoading && !this.state.isloadingDone && (
              <img src={logo} className="App-logo" alt="logo" />
            )}
            {!this.state.isLoading && this.state.isloadingDone && (
              <img src={w_logo} className="App-logo" alt="logo" />
            )}
          </header>
          <div className="container" style={{ marginBottom: 20 }}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h3>Location List</h3>
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
                <h3>Hotel List</h3>
                <Hotel isLoading={this.state.isLoading} />
              </div>
            </div>
          </div>
          <div className="container" style={{ marginBottom: 40 }}>
            <h3>Final List</h3>
            <div>
              <select style={{ width: `300px` }}>
                {Object.entries(this.state.finalList).map(final => {
                  return (
                    <option
                      key={final}
                      value={final}
                      disabled={this.state.finalDisable ? "disabled" : ""}
                    >
                      {JSON.stringify(final)}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <input type="submit" value="Submit" />
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
