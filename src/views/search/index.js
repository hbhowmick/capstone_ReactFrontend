import React, { Component } from 'react';
import './index.css';
import AddressForm from '../../components/addressForm';


class Search extends Component {
  returnSearch = async(e) => {
    e.preventDefault();

    let street = e.target.elements.street.value;
    let city = e.target.elements.city.value;
    let state = e.target.elements.state.value;
    let zip = e.target.elements.zip.value;

    console.log(street, city, state, zip);

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Search for a location!</h1>
          </div>
          <div className="col-md-4 offset-md-4">
            <AddressForm returnSearch={this.returnSearch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
