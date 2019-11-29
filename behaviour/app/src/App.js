import React, {Component} from 'react';
import logo from './hinjewadi.jpg';
import './App.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    isLoading: true,
    locations: [],
    hotels: []
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
  }

  async componentDidMount() {
    const response = await fetch('/api/locations');
    const body = await response.json();
    const hresponse = await fetch('/api/hotels');
    const hbody = await hresponse.json();
    this.setState({locations: body, hotels: hbody, isLoading: false});
  }

  render() {
    const {locations, hotels, isLoading} = this.state;
    const location = Object.entries(locations);
    const hotel = Object.entries(hotels);
    const techCompanies = [
      { label: "Apple", value: 1 },
      { label: "Facebook", value: 2 },
      { label: "Netflix", value: 3 },
      { label: "Tesla", value: 4 },
      { label: "Amazon", value: 5 },
      { label: "Alphabet", value: 6 },
    ];

    console.log("Tech Companies: ", techCompanies);    
    console.log("locations: ", Object.entries(locations));

    let keys = Object.entries(locations);
    for( let i=0; i<keys.length; i++) {
      console.log("keys[i]: ", keys[i]);      
    }

    const loc = [];
    location.map((loc2, key) => {
      let id = loc2.id;
      let value = loc2[id];
      loc.push({
        [id]: loc2.id, 
        [value]: loc2.value
      });
      return loc;
    }); 
    console.log("Loc: ", loc);

    if(isLoading) {
      return <p>Loading...</p>;
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <header className="App-header"> 
            <h2>Map</h2>
            <img src={logo} className="App-logo" alt="logo" />
          </header>  
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h3>Location List</h3>            
                    <Select options={Object.entries(loc)}/>
                    <Select options={Object.keys(loc.map((l, i) => {
                          return <option key={i} value={l}>{l}</option>
                        }))
                      }
                    />

                  <h3>Hotel List</h3>            
                    <Select options={hotel.map((guest, index) => {
                          return <option key={index} value={guest}>{guest}</option>
                        })
                      }  
                    />

                  <h3>Tech Companies</h3>              
                    <Select options={techCompanies} />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>    
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <input type="submit" value="Submit"/>
              <div className="col-md-4"></div>                          
              </div>
            </div>            
          </div>  
      </form>
    );
  }
}

export default App;
