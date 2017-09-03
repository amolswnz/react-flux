(function() {
  'use strict';

  var React = require('react');
  var AuthorApi = require('../../api/authorApi');
  var AuthorList = require('./authorList');

  var Route = require('react');
  var Link = require('react-router').Link;

  var AuthorPage = React.createClass({
    getInitialState: function() {
      return {authors: []};
    },

    componentDidMount: function() {
      if(this.isMounted()) {
        this.setState({authors: AuthorApi.getAllAuthors()});
      }
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
