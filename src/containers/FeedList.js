import React from 'react';
import FeedItem from '../components/FeedItem';

class FeedList extends React.Component {
  render() {
    return (
      <ul className="montana-list-items">
        <FeedItem/>
      </ul>
    );
  }
}

export default FeedList;