(function() {
  'use strict';
  var React = require('react');
  var Router = require('react-router');
  var routes = require('./routes');
  var InitActions = require('./actions/initialiseAction');

  InitActions.initApp();

  Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });

}());
