import React, { Component } from "react";
import logo from "./hinjewadi.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import locations from "./json/locations.json";
import hotels from "./json/hotels.json";
import Location from "./Location.js";
import Hotel from "./Hotel.js";
import FinalObject from "./FinalObject.js";

class App extends Component {
  state = {
    isLoading: false,
    focus: false,
    locations: locations,
    hotels: hotels
  };
  _onBlur() {
    setTimeout(() => {
      if (this.state.focus) {
        this.setState({
          focus: false
        });
      }
    }, 0);
  }
  _onFocus() {
    if (!this.state.focus) {
      this.setState({
        focus: true
      });
    }
  }

  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {}

  async componentDidMount() {
    const response = await fetch("/api/locations");
    const body = await response.json();
    const hresponse = await fetch("/api/hotels");
    const hbody = await hresponse.json();
    this.setState({ locations: body, hotels: hbody, isLoading: false });
  }

  render() {
    const { locations, hotels, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <header className="App-header" style={{ marginBottom: 20 }}>
            <h2>Map</h2>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="container" style={{ marginBottom: 20 }}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h3>Location List</h3>
                <Location
                  locations={locations}
                  hotels={hotels}
                  //isLoading={this.setState({ isLoading: true })}
                  //onFocus={this._onFocus()}
                  //  onBlur={this._onBlur()}
                />
                <h3>Hotel List</h3>
                <Hotel
                  hotels={hotels}
                  //isLoading={this.setState({ isLoading: true })}
                  //onFocus={this._onFocus()}
                  //onBlur={this._onBlur()}
                />
              </div>
            </div>
          </div>
          <div className="container" style={{ marginBottom: 40 }}>
            <h3>Final List</h3>
            <div>
              <FinalObject hotels={hotels} />
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
