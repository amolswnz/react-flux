(function() {
  'use strict';

  var React = require('react');

  var Home = React.createClass({
    render: function() {
      return (
        <div className='jumbotron'>
          <h1>Mysite Admin</h1>
          <p>React, React Router and Flux App</p>
        </div>
      );
    }
  });

  module.exports = Home;
}());
