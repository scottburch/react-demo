var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');

module.exports = {
    render: (component) => ReactDom.findDOMNode(TestUtils.renderIntoDocument(component))
};