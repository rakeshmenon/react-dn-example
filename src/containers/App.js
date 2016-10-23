import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../action-creators';

import PageWrapper from './PageWrapper';
import Header from '../components/Header';

const mapStateToProps = state => ({
  feed: state.feed,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <PageWrapper>
          {React.cloneElement(this.props.children, this.props)}
        </PageWrapper>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
