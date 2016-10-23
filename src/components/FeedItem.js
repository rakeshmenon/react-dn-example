import React from 'react';

import ItemVote from './ItemVote';
import ItemDetails from './ItemDetails';
import FavoriteStar from './FavoriteStar';

class FeedItem extends React.Component {
  render() {
    return (
      <li className="story-list-item montana-list-item " data-story-id="75773">
        <ItemVote/>
        <ItemDetails/>
        <FavoriteStar/>
      </li>
    );
  }
}

export default FeedItem;
