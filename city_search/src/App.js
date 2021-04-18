import { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import { render } from 'react-dom';

//creates array for api data, an open string for City and state is set to false until found
class searchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      City: "",
      found: false
    }
  }
  //function for what happens when you input, it sets the state and converts everything to uppercase
  handleInputChange = (event) => {
    this.setState({ City: event.target.value.toUpperCase()});
  }
//function for what happens when you click the search button
  handleSearchClick = async () => {
    let cityName = this.state.City;
    // eslint-disable-next-line
    let linkToAPI = 'https://ctp-zip-api.herokuapp.com/city/:CITYNAME' + cityName;
    console.log(cityName);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Search City: </h3>
          <input type="text" placeholder="city name" onChange={this.handleInputChange}/>
          <button className="search city" onClick={this.handleSearchClick}>Search</button>
        </div>
      </div>
    );
  }
}

export default searchAPI;
