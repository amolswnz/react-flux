(function() {
  'use strict';

  var React = require('react');
  var AuthorActions = require('../../actions/authorAction');
  var AuthorStore = require('../../stores/authorStore');
  var AuthorList = require('./authorList');

  var Route = require('react');
  var Link = require('react-router').Link;

  var AuthorPage = React.createClass({
    getInitialState: function() {
      return { authors: AuthorStore.getAllAuthors() };
    },

    _onChange: function() {
      this.setState( { authors: AuthorStore.getAllAuthors() });
    },

    componentWillMount: function() {
      AuthorStore.addChangeListner(this._onChange);
    },

    componentWillUnmount: function() {
      AuthorStore.removeListner(this._onChange);
    },

    render: function() {
      return (
        <div>
          <h1>Authors List</h1>
          <Link to='addAuthor' className='btn btn-info'> Add Author </Link>
          <AuthorList authors={this.state.authors}/>
        </div>
      );
    }
  });

  module.exports = AuthorPage;
}());
