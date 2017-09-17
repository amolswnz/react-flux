(function() {
  'use strict';

  var React = require('react');
  var AuthorActions = require('../../actions/authorAction');
  var AuthorStore = require('../../stores/authorStore');
  var toastr = require('toastr');

  var Router = require('react-router');
  var Link = Router.Link;

  var AuthorList = React.createClass({
    propTypes: {
      authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function(id, event) {
      event.preventDefault();
      // debugger;
      AuthorActions.deleteAuthor(id);
      toastr.warning('Author deleted');
    },

    render: function() {
      var showAuthor = function(author) {
        return (
          <tr key={author.id}>
            <td>
              <Link to='editAuthor' params={{id: author.id}}>{author.id}</Link>
            </td>
            <td>
              <a href='#' className='btn btn-danger' onClick={this.deleteAuthor.bind(this, author.id)}>Delete </a>
            </td>
            <td>{author.firstName} {author.lastName}</td>
          </tr>
        );
      };

      return (
        <div>
          <table className='table'>
            <thead>
              <th>ID</th>
              <th>DELETE</th>
              <th>Name</th>
            </thead>
            <tbody>
              {this.props.authors.map(showAuthor, this)}
            </tbody>
          </table>
        </div>
      );
    }
  });

  module.exports = AuthorList;
}());
