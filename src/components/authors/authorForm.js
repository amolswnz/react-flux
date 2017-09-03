(function() {
  "use strict";

  var React = require('react');
  var Input = require('../common/textInput');

  var AuthorForm = React.createClass({
    propTypes: {
      name: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired,
      placeholder: React.PropTypes.string,
      value: React.PropTypes.string,
      error: React.PropTypes.string
    },
    render: function() {
      return (
        <form>
          <Input name='firstName' label='First name' value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.errors.firstName}/>
          <Input name='lastName' label='Last name' value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.errors.lastName}/>
          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
        </form>
      );
    }
  });

  module.exports = AuthorForm;
}());
