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
      Zip: "",
      found: false
    }
  }
  //function for what happens when you input the zip code
  handleInputChange = (event) => {
    this.setState({ Zip: event.target.value});
  }
//function for what happens when you click the search button
  handleSearchClick = async () => {
    let ZipCode = this.state.Zip;
    // eslint-disable-next-line
    let linkToAPI = 'https://ctp-zip-api.herokuapp.com/zip/:zipcode' + ZipCode;
    console.log(this.state.Zip);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Search Zip: </h3>
          <input type="text" placeholder="zip code" onChange={this.handleInputChange}/>
          <button className="search zip" onClick={this.handleSearchClick}>Search</button>
        </div>
      </div>
    );
  }
}

export default searchAPI;
