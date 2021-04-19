import { Component } from 'react';
import './App.css';
import axios from 'axios';


//creates array for api data, an open string for City and state is set to false until found
class searchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      Zip: "",
      found: false
    }
  }

  //function for what happens when you input the zip code
  handleInputChange = (event) => {
    this.setState({ Zip: event.target.value});
  }

//function for what happens when you click the search button
  handleSearchClick = async() => {
    let ZipCode = this.state.Zip;
    let linkToAPI = 'https://ctp-zip-api.herokuapp.com/zip/' + ZipCode;
    console.log(this.state.Zip);
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
    if(!foundMatch){
        table.push(<tr key={-1}><td>No Results</td></tr>);
        return table;
    } else {
        for (let i = 0; i < currData.length; i++) {
          table.push(
            <tbody>
            <tr key={currData[i].id}>
            <td>
            <ul>
            <td> {currData[i].City}, {currData[i].State }</td>
            <li>State: {currData[i].State}</li>
            <li>Location: {currData[i].Lat}, {currData[i].Long}</li>
            <li>Estimated Population: {currData[i].EstimatedPopulation}</li>
            <li>Total Wages: {currData[i].TotalWages}</li>
            </ul>
            </td>
            </tr>
            </tbody>
          );
        }
        return table;
    }
}   

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Zip Code Search: </h3>
          <input type="text" value={this.state.Zip} placeholder="zip code" onChange={this.handleInputChange}/>
          <button className="search-zip" onClick={this.handleSearchClick}>Search</button>
        </div>
        <br/>
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

