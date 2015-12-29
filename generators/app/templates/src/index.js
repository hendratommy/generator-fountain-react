<% if (modules !== 'inject') { -%>
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./app/hello');

<%   if (modules === 'webpack') { -%>
require('./index.scss');

<%   } -%>
<% } -%>
ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);
