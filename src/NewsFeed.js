import React from 'react';

class NewsFeed extends React.Component {
  render() {
    return (
        <div id="page-container" className="wrap padded has-sidebar">
          <div id="page-main-content">
            <div id="page-main-content-inner" role="main">
               <div className="montana-list" id="top-stories-list">

                  <header id="frontpage-welcome-hero" className="montana-hero">
                     <div className="montana-hero-info">
                        <h2>Designer News <span>is where the design community meets.</span></h2>
                     </div>
                     <div className="montana-hero-prompt-container"><a href="/signup" className="standard-button green montana-hero-prompt-button">Join us</a></div>
                  </header>

                  <ul className="montana-list-items">
                     <li className="story-list-item montana-list-item " data-story-id="75773">
                        <div className="list-story-grouper list-story-upvote-grouper">
                           <button aria-label="Upvote this story to 9 points" className="story-upvote-button toggle-login">
                              <i className="fa fa-chevron-up"></i>
                              <span className="story-upvote-button-number unvoted-number">8</span><span className="story-upvote-button-number upvoted-number">9</span>
                              <i className="fa fa-chevron-down"></i>
                           </button>
                        </div>
                        <div className="list-story-grouper list-story-main-grouper">
                           <a href="http://noahstokes.com" alt="Noah Stokes" className="montana-item-title"> Noah Stokes <span className="list-story-domain">(noahstokes.com)</span></a>
                           <div className="montana-item-meta"><a href="/stories/75773-noah-stokes" className="list-story-comment-count">5 comments</a><span className="montana-item-meta-bullet">•</span><abbr className="list-story-time-ago time-ago" data-time="1477075259" title="2016-10-21T18:40:59Z">5 hours ago</abbr><span>from <a href="/users/6874/nathan-huening" data-card="6874">Nathan Huening</a>, Designer, Developer, Writer</span></div>
                        </div>
                        <div className="list-story-grouper">
                           <a href="#" className="story-star-button">
                              <i className="fa fa-star-o" aria-hidden="true"></i>
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    );
  };
}

export default NewsFeed;
