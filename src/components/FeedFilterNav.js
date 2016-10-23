import React from 'react';

class FeedFilterNav extends React.Component {
  render() {
    return (
      <nav id="sub-navigation-container">
        <div className="wrap padded">
          <ul id="sub-navigation-list-items">
            <div id="sub-navigation-visible-items">
              <li><a href="/topvoted">Top Voted</a></li>
              <li><a href="/starred" className="active">Starred</a></li>
              <li><a href="/recent">Recent</a></li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default FeedFilterNav;
