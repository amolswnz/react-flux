(function() {
  'use strict';

  var React = require('react');
  var AuthorForm = require('./authorForm');
  var AuthorApi = require('../../api/authorApi');

  var Router = require('react-router');

  var toastr = require('toastr');

  var ManageAuthorPage = React.createClass({
    mixins: [
      Router.Navigation
    ],

    getInitialState: function() {
      return {
        author: {
          id: '',
          firstName: '',
          lastName: ''
        },
        errors: {},
        dirty: false
      };
    },

    statics: {
      willTransitionFrom: function(transition, component) {
        if(component.state.dirty && !confirm('Are you sure you want to leave a page without saving?')) {
          transition.abort();
        }
      }
    },

    componentWillMount: function() {
      var authorId = this.props.params.id;
      if(authorId) {
        this.setState({author: AuthorApi.getAuthorById(authorId)});
      }
    },

    setAuthorState: function(event) {
      this.setState({ dirty: true });
      var field = event.target.name;
      var value = event.target.value;
      this.state.author[field] = value;
      return this.setState({author: this.state.author});
    },

    isAuthorFormValid: function() {
      var formIsValid = true;
      this.state.errors = {};
      if(this.state.author.firstName.length < 3) {
        this.state.errors.firstName = 'First name should be more than 3 chars';
        formIsValid = false;
      }
      if(this.state.author.lastName.length < 3) {
        this.state.errors.lastName = 'Last name should be more than 3 chars';
        formIsValid = false;
      }
      console.log(this.state.errors, formIsValid);

      this.setState({errors: this.state.errors});
      return formIsValid;
    },

    saveAuthor: function(event) {
      event.preventDefault();

      if(!this.isAuthorFormValid()) {
        return;
      }
      console.log(AuthorApi.saveAuthor(this.state.author));
      this.setState({ dirty: false });
      toastr.success('Author saved.');
      this.transitionTo('authors');
    },

    render: function() {
      return (
        <div>
          <h1>Manage Author</h1>
          <AuthorForm author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors}
          />
        </div>
      );
    }
  });

  module.exports = ManageAuthorPage;
}());
