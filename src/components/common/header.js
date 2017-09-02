(function() {
  "use strict";

  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;

  var Header = React.createClass({
    render: function() {
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a href='/' className="navbar-brand">
              <img src="img/logo.png" width='52'/>
            </a>
            <ul className="nav navbar-nav">
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/#authors'>Authors</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  });

  module.exports = Header;
}());
