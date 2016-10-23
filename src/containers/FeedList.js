import React from 'react';
import FeedItem from '../components/FeedItem';

class FeedList extends React.Component {
  render() {
    var { feed, actions, params } = this.props, feedList;

    switch (params.filter) {
      case 'topvoted':
        feedList = feed.slice(0);
        feedList.sort((a, b) => a.votes < b.votes);
        break;
      case 'starred':
        feedList = feed.filter(item => item.isStarred);
        break;
      default:
        feedList = feed;
        break;
    }

    feedList = feedList.map(item => {
      return (
        <FeedItem key={item._id} {...item} {...actions}/>
      );
    });

    return (
      <ul className="montana-list-items">
        {feedList}
      </ul>
    );
  }
}

export default FeedList;