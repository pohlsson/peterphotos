import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPhotos} from 'actions/photos';
import {Section} from 'components/common/Section';

export class App extends Component {
  render() {
    return (
      <Section className="app" depth={2}>
        test
      </Section>
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
