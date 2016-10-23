import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div id="page-container" className="wrap padded has-sidebar">
         <div id="page-main-content">
            <div id="page-main-content-inner" role="main">
              <div className="standard-padding" id="register-inner-container">
                  <h1 id="register-intro-title">
                      Join Designer News
                  </h1>
                  <p id="register-intro-byline">
                      By creating an account, you agree to be nice and post high quality content. The Designer News community bans users very liberally, so behave yourself.
                  </p>
                  <form acceptCharset="UTF-8" action="/users" className="rte" id="new_user" method="post">
                      <div className="split-field-grouper" id="register-user-name-group">
                          <input className="standard-text-field" id="user_first_name" name="user[first_name]" placeholder="First name" required="required" size="30"/>
                          <input className="standard-text-field" id="user_last_name" name="user[last_name]" placeholder="Last name" required="required" size="30"/>
                      </div>
                      <input className="standard-text-field" id="user_email" name="user[email]" placeholder="Email address" required="required" size="30"/>
                      <div className="password-field-wrapper">
                          <input className="standard-text-field" id="user_password" name="user[password]" placeholder="Password" required="required" type="password"/>
                      </div>
                      <div id="register-form-actions">
                          <input className="standard-button yellow" name="commit" type="submit" value="Create my account"/>
                      </div>
                  </form>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default LoginPage;
