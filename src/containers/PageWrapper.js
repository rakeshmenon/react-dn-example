import React from 'react';

class PageWrapper extends React.Component {
  render() {
    return (
      <div className="feed-wrapper">
        <div id="page-container" className="wrap padded has-sidebar">
          <div id="page-main-content">
            <div id="page-main-content-inner" role="main">
              {React.cloneElement(this.props.children, this.props)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageWrapper;
