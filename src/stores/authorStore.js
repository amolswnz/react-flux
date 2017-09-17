(function() {
  'use strict';

  var Dispatcher = require('../dispatcher/dispatcherApp');
  var ActionTypes = require('../constants/actionTypes');
  var EventEmitter = require('events').EventEmitter;
  var assign = require('object-assign');
  var _ = require('lodash');

  var _authors = [];

  var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListner: function(callback) {
      this.on('change', callback);
    },
    removeChangeListner: function(callback) {
      this.removeListner('change', callback);
    },
    emitChange: function(callback) {
      this.emit('change');
    },

    getAllAuthors: function() {
      return _authors;
    },
    getAuthorById: function(id) {
      return _.find(_authors, {
        id: id
      });
    }
  });

  Dispatcher.register(function(action) {
    switch (action.actionType) {
      case ActionTypes.INIT:
        _authors = action.initialData.authors;
        AuthorStore.emitChange();
        break;
      case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
        break;
      case ActionTypes.UPDATE_AUTHOR:
        var existingAuthor = _.find(_authors, {
          id: action.author.id
        });
        var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
        _authors.splice(existingAuthorIndex, 1, action.author);
        AuthorStore.emitChange();
        break;
      case ActionTypes.DELETE_AUTHOR:
        _.remove(_authors, function(author) {
          return action.id === author.id;
        });
        AuthorStore.emitChange();
        break;
      default:
        // no op
    }
  });

  module.exports = AuthorStore;
}());
