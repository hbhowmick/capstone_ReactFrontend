import React, { Component } from 'react';
import './index.css';


class AddressForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.returnSearch}>
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" className="form-control" name="street" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" className="form-control" name="city" required/>
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" className="form-control" name="state" required/>
        </div>
        <div className="form-group">
          <label>Zip</label>
          <input type="text" className="form-control" name="zip"/>
        </div>
        <button type="submit" className="btn btn-primary">Search Address</button>
      </form>
    );
  }
}

export default AddressForm;
