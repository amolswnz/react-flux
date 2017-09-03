(function() {
  'use strict';

  var React = require('react');
  var AuthorApi = require('../../api/authorApi');

  var Router = require('react-router');
  var Link = Router.Link;

  var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired

    },

    render: function() {
      var showAuthor = function(author) {
        return (
          <tr key={author.id}>
            <td>
              {/* <a href={'/#authors/' + author.id}> {author.id} </a> */}
              <Link to='editAuthor' params={{id: author.id}}>{author.id}</Link>
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
