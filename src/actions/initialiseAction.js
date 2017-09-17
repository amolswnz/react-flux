(function() {
  'use strict';

  var Dispatcher = require('../dispatcher/dispatcherApp');
  var ActionTypes = require('../constants/actionTypes');
  var AuthorApi = require('../api/authorApi');

  var InitActions = {
    initApp: function() {
      Dispatcher.dispatch({
        actionType: ActionTypes.INIT,
        initialData: {
          authors: AuthorApi.getAllAuthors()
        }
      });
    }
  };

  module.exports = InitActions;

}());
