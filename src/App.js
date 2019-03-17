import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';
import Search from './views/search';
import Upload from './views/upload';
import Scene3D from './views/scene3d';
import Tilt from './views/tilt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() =>
          <Search />} />
          <Route exact path='/upload' render={() =>
          <Upload />} />
          <Route exact path='/scene' render={() =>
          <Scene3D />} />
          <Route exact path='/tilt' render={() =>
          <Tilt />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
