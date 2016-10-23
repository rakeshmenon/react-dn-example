import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return(
        <div id="header-container" className="with-sub-navigation">
         <header id="site-header">
            <div id="header-bar">
               <div className="wrap padded">
                  <div id="header-left-wrap">
                    <Link to="/feed" id="header-logo-link">
                      <h1>
                        DN
                      </h1>
                    </Link>
                  </div>
                  <div id="header-right-wrap">
                     <Link to='/' className="toggle-login" id="manage-account-button">Login</Link>

                     <a href="/submit" className="toggle-login" id="new-story-button"><span id="new-story-plus">+</span><span id="new-story-text">New Story</span></a>
                  </div>
               </div>
            </div>

            <nav id="header-sub-navigation-container">
               <div id="mobile-sub-navigation-toggle"><span id="mobile-sub-navigation-label"> Top Stories </span><span id="mobile-sub-navigation-icon"></span></div>
               <div className="wrap padded">
                  <ul id="sub-navigation-list-items">
                     <div id="sub-navigation-visible-items">
                        <li><a href="/topvoted">Top Voted</a></li>
                        <li><a href="/starred" className="active">Starred</a></li>
                        <li><a href="/recent">Recent</a></li>
                     </div>
                     <li id="sub-navigation-view-more">More</li>
                     <div id="sub-navigation-additional-items"></div>
                  </ul>
               </div>
            </nav>
         </header>
      </div>
    );
  };
}

export default Header;
