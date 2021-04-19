import { Component } from 'react';
import './App.css';
import axios from 'axios';

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
  handleSearchClick = async() => {
    let cityName = this.state.City;
    // eslint-disable-next-line
    let linkToAPI = 'https://ctp-zip-api.herokuapp.com/city/' + cityName;
    try {
      let response = await axios.get(linkToAPI);
      this.setState({apiData: response.data, found: true})
    } catch (error) {
      if (error.response) {
        console.log("Error Data: ", error.response.data); //Not found
        console.log("Error Status: ", error.response.status); //404
        this.setState({found: false});
      }
    }
  }

  makeTable = () => {
    let currData = this.state.apiData;
    let foundMatch = this.state.found;
    let table = [];
    //found is false when we get 404 error
    if (!foundMatch) {
      table.push(<tr key={-1}><td>No Results</td></tr>);
    } else {
      for (let i = 0; i < currData.length; i++) {
        table.push(
          <tr key={currData[i].id}>
            <td>{currData[i]}</td>
          </tr>
        )
      }
    }
    return table;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Search City: </h3>
          <input type="text" value={this.state.City} placeholder="city name" onChange={this.handleInputChange}/>
          <button className="search-city" onClick={this.handleSearchClick}>Search</button>
        </div>
        <br/>
        <h5>Zip Codes: </h5>
        <table id="data">
          <tbody>
            {this.makeTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default searchAPI;
