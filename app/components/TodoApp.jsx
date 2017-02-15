var React = require('react');

var TodoApp = React.createClass({

  render: function() {
    getInitialState: function() {
      return {
        todos: [
          {
            id: 1,
            text:'Walk the dog'
          },
          {
            id: 2,
            text: 'Clean the yard'
          }
        ]
      };
    },
    return (
      <div>
        TodoApp.jsx
      </div>
    );
  }

});

module.exports = TodoApp;
