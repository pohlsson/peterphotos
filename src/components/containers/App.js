import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPhotos} from 'actions/photos';

export class App extends Component {
  render() {
    return (
      <div className="app">
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetPhotos: () => {
    dispatch(getPhotos());
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(App);
