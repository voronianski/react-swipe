'use strict';

var React = require('react');
var ReactSwipe = require('../react-swipe');

var Panes = Array.apply(null, Array(20)).map(function (_, i) {
  return React.createElement('div', {key: i},
      React.createElement('b', null, i)
  );
});

var Page = React.createClass({
    render: function () {
      return (
        React.createElement('div', null,
          React.createElement('h1', null, 'ReactSwipe'),
          React.createElement(ReactSwipe, {
            id: 'mySwipe'
          }, Panes)
        )
      );
    }
});

React.render(
  React.createElement(Page, null),
  document.getElementById('app')
);
