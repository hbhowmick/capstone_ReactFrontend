import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="footer">
            <div className="col-md-2 offset-md-10">
              <h6>CONTACT</h6>
              <p>heather.m.cormier@gmail.com</p>
              <p>GIS Portfolio</p>
            </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
