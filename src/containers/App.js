import React, { Component } from 'react';
import PageWrapper from './PageWrapper';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PageWrapper>
          {React.cloneElement(this.props.children, this.props)}
        </PageWrapper>
      </div>
    );
  }
}

export default App;
