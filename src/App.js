import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
