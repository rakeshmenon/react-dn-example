import React from 'react';
import FeedFilterNav from '../components/FeedFilterNav';
import FeedHero from '../components/FeedHero';
import FeedList from './FeedList';

class NewsFeed extends React.Component {
  render() {
    return (
      <div className="montana-list">
        <FeedFilterNav/>
        <FeedHero/>
        <FeedList/>
      </div>
    );
  };
}

export default NewsFeed;
