(function() {
  'use strict';

  var Dispatcher = require('../dispatcher/dispatcherApp');
  var AuthorApi = require('../api/authorApi');
  var ActionTypes = require('../constants/actionTypes');

  var AuthorActions = {
    createAuthor: function(author) {
      var newAuthor = AuthorApi.saveAuthor(author);

      // dispatcher tells stores that author is created
      Dispatcher.dispatch({
        actionType: ActionTypes.CREATE_AUTHOR,
        author: newAuthor
      });
    }
  };

  module.exports = AuthorActions;

}());
