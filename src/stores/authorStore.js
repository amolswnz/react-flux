(function() {
  'use strict';

  var Dispatcher = require('../dispatcher/dispatcherApp');
  var ActionTypes = require('../constants/actionTypes');
  var EventEmitter = require('events').EventEmitter;
  var assign = require('object-assign');

  var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListner: function(callback) {
      this.on('change', callback);
    },
    removeChangeListner: function(callback) {
      this.removeListner('change', callback);
    },
    emitChangeListner: function(callback) {
      this.emit('change');
    }
  });

  Dispatcher.register(function(action) {
    switch (action.actionType) {
      case :

        break;
      default:

    }
  });

  module.exports = AuthorStore;
}());
