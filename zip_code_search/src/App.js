import { Component } from 'react';
import './App.css';
// eslint-disable-next-line
// import axios from 'axios';


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
  handleSearchClick = async(submit) => {
    let ZipCode = this.state.Zip;
    // eslint-disable-next-line
    let linkToAPI = 'https://ctp-zip-api.herokuapp.com/zip/' + ZipCode;
  console.log(this.state.Zip);
    fetch(linkToAPI)
    .then((response) => {
      if(response.status === 404){
          return;
      }
      return response.json();
  })
    .then((data) => { //data is response.json()
      this.setState({apiData: data});
    })
  .catch((error) => {
    if (error.response) {
      console.log("Error Data: ", error.response.data); //Not found
      console.log("Error Status: ", error.response.status); //404
      this.setState({found: false});
    }
  });
  }

  makeTable = () => {
    let currData = this.state.apiData;
    console.log("apiData: ", currData);
    console.log("State: ", currData.State);
    console.log("Population: ", currData.EstimatedPopulation);
    console.log("Wages: ", currData.TotalWages);
    let foundMatch = this.state.found;
    console.log("match: ", foundMatch);
    let table = [];
    //found is false when we get 404 error
    if(!foundMatch){
        console.log("No result found");
        table.push(<tr key={-1}><td>No Results</td></tr>);
        return table;
    } else {
        let state = currData.State;
        let population = currData.EstimatedPopulation
        let totalwages = currData.TotalWages;
        console.log("State: ", state);
        console.log("Population: ", population);
        console.log("Wages: ", totalwages);
        table.push(
          <tr key={currData.id}>
            <td>State: {state}</td>
            <td>Total Wages: {totalwages}</td>
            <td>Estimated Population: {population}</td>
          </tr>
        );
        return table;
    }
}   


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Search Zip: </h3>
          <input type="text" placeholder="zip code" onChange={this.handleInputChange}/>
          <button className="search zip" onClick={this.handleSearchClick}>Search</button>
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

