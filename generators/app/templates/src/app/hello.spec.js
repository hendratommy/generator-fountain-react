<% if (modules !== 'inject') { -%>
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Hello = require('./hello');
<% } else { -%>
var TestUtils = React.addons.TestUtils;
<% } -%>

describe('hello component', function() {
  it('should render hello world', function() {
    var hello = TestUtils.renderIntoDocument(<Hello/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});
